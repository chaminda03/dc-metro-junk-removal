import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

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

    // Try Resend API if configured
    const resendApiKey = process.env.RESEND_API_KEY
    
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey)
        
        const { data, error } = await resend.emails.send({
          from: 'Wee Haul Contact Form <noreply@weehauljunkdc.com>',
          to: ['info@weehaulnow.com'],
          subject: 'New Quote Request - Wee Haul Junk Removal',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">New Quote Request</h1>
                <p style="color: #fed7aa; margin: 10px 0 0 0;">Wee Haul Junk Removal</p>
              </div>
              
              <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <h2 style="color: #1f2937; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Customer Information</h2>
                
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p style="margin: 8px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${name}</span></p>
                  <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a></p>
                  <p style="margin: 8px 0;"><strong style="color: #374151;">Phone:</strong> <a href="tel:${phone}" style="color: #f97316; text-decoration: none;">${phone}</a></p>
                </div>
                
                <h3 style="color: #1f2937; margin-top: 30px;">Project Description</h3>
                <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
                  <p style="color: #475569; line-height: 1.6; margin: 0;">${description || 'No description provided'}</p>
                </div>
                
                <div style="background: #ecfdf5; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin-top: 30px;">
                  <h4 style="color: #065f46; margin: 0 0 10px 0;">⏰ Follow-up Required</h4>
                  <p style="color: #047857; margin: 0; font-size: 14px;">Please contact this customer within 24 hours for best conversion rates.</p>
                  <p style="color: #6b7280; margin: 10px 0 0 0; font-size: 12px;">Submitted: ${new Date().toLocaleString()}</p>
                </div>
                
                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="background: #f97316; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-right: 10px;">📞 Call Now</a>
                  <a href="mailto:${email}" style="background: #374151; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">📧 Reply</a>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
                <p>This email was sent from your website contact form at weehauljunkdc.com</p>
              </div>
            </div>
          `,
        })

        if (error) {
          console.error('Resend error:', error)
        } else {
          console.log('Email sent successfully via Resend:', data)
          return NextResponse.json(
            { 
              success: true, 
              message: 'Quote request submitted successfully',
              emailId: data?.id 
            },
            { status: 200 }
          )
        }
      } catch (error) {
        console.error('Resend API error:', error)
      }
    }

    // Fallback: Log to console if no email service configured
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

    // You can also integrate with services like Zapier webhook to send to email
    // Example webhook call:
    /*
    const webhookResponse = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@weehaulnow.com',
        subject: 'New Quote Request - Wee Haul Junk Removal',
        name,
        email,
        phone,
        description,
        timestamp: new Date().toISOString()
      }),
    })
    */

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