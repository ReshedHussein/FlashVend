import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Check if Resend API key is available
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("RESEND_API_KEY environment variable is not set")
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not configured. Please contact us directly at info@flashvend.com or call (469) 588-5045.",
        },
        { status: 500 },
      )
    }

    // Initialize Resend with the API key
    const resend = new Resend(apiKey)

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "FlashVend Contact <onboarding@resend.dev>", // Using Resend's default domain for testing
      to: ["info@flashvend.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0; 
              padding: 0; 
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
            }
            .header { 
              background: linear-gradient(135deg, #2563eb, #9333ea); 
              color: white; 
              padding: 20px; 
              border-radius: 8px 8px 0 0; 
              text-align: center;
            }
            .content { 
              background: #f8fafc; 
              padding: 20px; 
              border-radius: 0 0 8px 8px; 
              border: 1px solid #e2e8f0;
            }
            .field { 
              margin-bottom: 15px; 
              padding: 10px;
              background: white;
              border-radius: 6px;
              border-left: 4px solid #2563eb;
            }
            .label { 
              font-weight: bold; 
              color: #2563eb; 
              margin-bottom: 5px;
            }
            .value { 
              color: #374151;
            }
            .message-box { 
              background: white; 
              padding: 15px; 
              border-radius: 6px; 
              border-left: 4px solid #2563eb; 
              white-space: pre-wrap;
            }
            .footer { 
              text-align: center; 
              margin-top: 20px; 
              font-size: 12px; 
              color: #666; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
              <p style="margin: 5px 0 0 0;">FlashVend Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              This message was sent from the FlashVend website contact form.
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission from FlashVend Website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This message was sent from the FlashVend website contact form.
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      // Provide more specific error messages
      if (error.message?.includes("API key")) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Email service configuration error. Please contact us directly at info@flashvend.com or call (469) 588-5045.",
          },
          { status: 500 },
        )
      }

      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please contact us directly at info@flashvend.com or call (469) 588-5045.",
        },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please contact us directly at info@flashvend.com or call (469) 588-5045.",
      },
      { status: 500 },
    )
  }
}
