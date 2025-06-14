import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST() {
  try {
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

    // Send test email
    const info = await transporter.sendMail({
      from: `"FlashVend Test" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to yourself
      subject: "SMTP Configuration Test",
      text: "If you receive this email, your SMTP configuration is working correctly!",
      html: `
        <h2>SMTP Configuration Test</h2>
        <p>If you receive this email, your SMTP configuration is working correctly!</p>
        <p><strong>Configuration Details:</strong></p>
        <ul>
          <li>Host: ${process.env.SMTP_HOST}</li>
          <li>Port: ${process.env.SMTP_PORT}</li>
          <li>User: ${process.env.SMTP_USER}</li>
        </ul>
      `,
    })

    return NextResponse.json({
      success: true,
      message: `Test email sent successfully! Message ID: ${info.messageId}`,
    })
  } catch (error) {
    console.error("SMTP Test Error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 },
    )
  }
}
