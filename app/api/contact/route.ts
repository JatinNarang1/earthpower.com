import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

interface ContactData {
  name: string
  phone: string
  email: string
  businessType: string
  message: string
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

    // Check for environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'earthpowerjourney@gmail.com', // Send to yourself
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <br>
        <p><small>Received on ${new Date().toLocaleString('en-IN')}</small></p>
      `,
    }

    // Send Email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
