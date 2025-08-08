import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, description } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Quote Request from Wee Haul Website

Customer Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Project Description:
${description || 'No description provided'}

Date: ${new Date().toLocaleString()}

Please follow up with this customer within 24 hours.
    `

    console.log('Email would be sent to info@weehaulnow.com:')
    console.log(emailContent)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request submitted successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}