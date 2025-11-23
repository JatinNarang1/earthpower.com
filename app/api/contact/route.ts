import { NextRequest, NextResponse } from 'next/server'
export const runtime = 'nodejs'
import * as fs from 'fs'
import * as path from 'path'

// Minimal CSV helpers to avoid external dependencies
function escapeCsv(value: string): string {
  const needsQuotes = /[",\n]/.test(value)
  let v = value.replace(/"/g, '""')
  return needsQuotes ? `"${v}"` : v
}

function toCsvLine(record: Record<string, string>): string {
  return [
    escapeCsv(record.timestamp || ''),
    escapeCsv(record.name || ''),
    escapeCsv(record.phone || ''),
    escapeCsv(record.email || ''),
    escapeCsv(record.businessType || ''),
    escapeCsv(record.message || ''),
  ].join(',')
}

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuotes) {
      if (ch === '"') {
        if (i + 1 < line.length && line[i + 1] === '"') {
          current += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        current += ch
      }
    } else {
      if (ch === ',') {
        result.push(current)
        current = ''
      } else if (ch === '"') {
        inQuotes = true
      } else {
        current += ch
      }
    }
  }
  result.push(current)
  return result
}

interface ContactData {
  name: string
  phone: string
  email: string
  businessType: string
  message: string
  timestamp?: string
}

// Data abstraction layer for easy migration to database
class DataStore {
  private filePath: string

  constructor() {
    // Store in a data folder that can be easily migrated
    this.filePath = path.join(process.cwd(), 'data', 'contacts.csv')
    this.ensureDataDirectory()
  }

  private ensureDataDirectory() {
    const dataDir = path.dirname(this.filePath)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Create CSV with headers if it doesn't exist
    if (!fs.existsSync(this.filePath)) {
      const headers = 'timestamp,name,phone,email,businessType,message\n'
      fs.writeFileSync(this.filePath, headers, 'utf-8')
    }
  }

  async save(data: ContactData): Promise<void> {
    const record = {
      timestamp: new Date().toISOString(),
      ...data
    }

    // Append record to CSV (headers already ensured in constructor)
    const line = `\n${toCsvLine(record as any)}`
    fs.appendFileSync(this.filePath, line, 'utf-8')
  }

  // Future migration helper
  async getAll(): Promise<ContactData[]> {
    try {
      const fileContent = fs.readFileSync(this.filePath, 'utf-8')
      const lines = fileContent.split(/\r?\n/).filter(l => l.trim().length > 0)
      if (lines.length <= 1) return []
      const header = parseCsvLine(lines[0])
      const indexes = {
        timestamp: header.indexOf('timestamp'),
        name: header.indexOf('name'),
        phone: header.indexOf('phone'),
        email: header.indexOf('email'),
        businessType: header.indexOf('businessType'),
        message: header.indexOf('message'),
      }
      const records: ContactData[] = []
      for (let i = 1; i < lines.length; i++) {
        const cols = parseCsvLine(lines[i])
        records.push({
          timestamp: cols[indexes.timestamp] || '',
          name: cols[indexes.name] || '',
          phone: cols[indexes.phone] || '',
          email: cols[indexes.email] || '',
          businessType: cols[indexes.businessType] || '',
          message: cols[indexes.message] || '',
        })
      }
      return records
    } catch (error) {
      console.error('Error reading contacts:', error)
      return []
    }
  }
}

// Email notification service (abstracted for easy replacement)
class NotificationService {
  async sendEmail(data: ContactData): Promise<void> {
    // This would normally use nodemailer or another email service
    // For now, we'll just log it - in production, implement email sending
    console.log('Email notification for new contact:', {
      to: 'earthpowerjourney@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      body: `
        New contact form submission received:
        
        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Business Type: ${data.businessType}
        Message: ${data.message}
        
        Timestamp: ${new Date().toLocaleString('en-IN')}
      `
    })

    // In production, implement actual email sending:
    // const nodemailer = require('nodemailer')
    // const transporter = nodemailer.createTransport({...})
    // await transporter.sendMail({...})
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json()

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.businessType || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate phone format (10 digits)
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Save to data store
    const dataStore = new DataStore()
    await dataStore.save(data)

    // Send email notification
    const notificationService = new NotificationService()
    await notificationService.sendEmail(data)

    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  // Optional: Add authentication here for admin access
  const dataStore = new DataStore()
  const contacts = await dataStore.getAll()
  
  return NextResponse.json({ 
    contacts,
    count: contacts.length 
  })
}
