import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('📨 Received POST request to /api/contact');
    console.log('Content-Type:', request.headers.get('content-type'));

    let body;
    try {
      body = await request.json();
      console.log('📦 Parsed body:', body);
    } catch (parseError) {
      console.error('❌ Failed to parse JSON:', parseError);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Invalid JSON in request body',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'All fields are required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Gmail SMTP Configuration from environment variables
    const smtpConfig = {
      host: import.meta.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(import.meta.env.SMTP_PORT || '465'),
      secure: import.meta.env.SMTP_SECURE === 'true' || true,
      user: import.meta.env.GMAIL_USER,
      recipient: import.meta.env.GMAIL_RECIPIENT || import.meta.env.GMAIL_USER,
      password: import.meta.env.GMAIL_APP_PASSWORD,
    };

    // Check if credentials are configured
    if (!smtpConfig.user || !smtpConfig.password) {
      console.error('Gmail credentials not configured');
      return new Response(
        JSON.stringify({
          success: false,
          message:
            'Email service not configured. Please contact the administrator.',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.password,
      },
    });

    // Email options
    const mailOptions = {
      from: smtpConfig.user,
      to: smtpConfig.recipient,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">ASJR Contact Form Submission</h2>
          <div>
            <p><strong>From:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="background-color: #f5f5f5; padding: 16px 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">This email was sent from the ASJR contact form.</p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully!',
        messageId: info.messageId,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('❌ Error sending email:', error);
    console.error(
      'Error details:',
      error instanceof Error ? error.message : 'Unknown error'
    );

    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
