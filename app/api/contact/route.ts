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

const esc = (v: string) =>
  String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))

export async function POST(request: NextRequest) {
  console.log('API /api/contact called')

  try {
    const data: ContactData = await request.json()
    console.log('Request data received:', { ...data, message: 'REDACTED' })

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.businessType || !data.message) {
      console.warn('Validation failed: Missing fields')
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(data.email)) {
      console.warn('Validation failed: Invalid email', data.email)
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Validate phone format (10 digits)
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(data.phone)) {
      console.warn('Validation failed: Invalid phone', data.phone)
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    // Check for environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration: EMAIL_USER or EMAIL_PASS not set')
      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials' },
        { status: 500 }
      )
    }

    console.log('Attempting to create transporter with user:', process.env.EMAIL_USER)

    // Create Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('Transporter verification successful');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Failed to connect to email server. Check credentials.' },
        { status: 500 }
      );
    }

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: data.email,
      to: process.env.CONTACT_TO || 'contact@earthpowerbattery.com', // company inbox (override with CONTACT_TO)
      subject: `${data.businessType === 'Warranty Registration' ? 'New Warranty Registration' : 'New Contact Form Submission'} from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${esc(data.name)}</p>
        <p><strong>Phone:</strong> ${esc(data.phone)}</p>
        <p><strong>Email:</strong> ${esc(data.email)}</p>
        <p><strong>Business Type:</strong> ${esc(data.businessType)}</p>
        <p><strong>Message:</strong></p>
        <p>${esc(data.message).split('\n').join('<br>')}</p>
        <br>
        <p><small>Received on ${new Date().toLocaleString('en-IN')}</small></p>
      `,
    }

    console.log('Sending email...')

    // Send Email
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form fatal error:', error)
    return NextResponse.json(
      { error: 'Failed to send message: ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    )
  }
}
