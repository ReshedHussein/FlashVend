import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs" // Force Node.js runtime instead of Edge

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    // Validate the form data
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address" }, { status: 400 })
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Verify connection configuration
    await transporter.verify()

    // Email content
    const mailOptions = {
      from: `"FlashVend Contact Form" <${email}>`,
      to: "info@flashvend.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      replyTo: email,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
This message was sent from the FlashVend website contact form.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #9333ea); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #2563eb; }
        .value { margin-top: 5px; }
        .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
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
                <div class="message-box">${message.replace(/\n/g, "<br>")}</div>
            </div>
        </div>
        <div class="footer">
            This message was sent from the FlashVend website contact form.
        </div>
    </div>
</body>
</html>
      `,
    }

    // Send the email
    const info = await transporter.sendMail(mailOptions)
    console.log("Message sent: %s", info.messageId)

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    })
  } catch (error) {
    console.error("Error sending email:", error)

    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("authentication")) {
        return NextResponse.json(
          { success: false, error: "Email authentication failed. Please check your credentials." },
          { status: 500 },
        )
      } else if (error.message.includes("connection")) {
        return NextResponse.json(
          { success: false, error: "Unable to connect to email server. Please try again later." },
          { status: 500 },
        )
      }
    }

    return NextResponse.json(
      { success: false, error: "Failed to send email. Please try again later or contact us directly." },
      { status: 500 },
    )
  }
}
