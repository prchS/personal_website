import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// -------------------------
// Simple In-Memory Rate Limiting
// -------------------------

const ipRequests = new Map<string, number[]>();
const emailRequests = new Map<string, number[]>();

const ONE_HOUR = 60 * 60 * 1000;
const ONE_DAY = 24 * 60 * 60 * 1000;

function isRateLimited(
  map: Map<string, number[]>,
  key: string,
  limit: number,
  windowMs: number
) {
  const now = Date.now();

  const timestamps = map.get(key) || [];

  // Keep only recent requests
  const filtered = timestamps.filter(
    (timestamp) => now - timestamp < windowMs
  );

  // Too many requests
  if (filtered.length >= limit) {
    return true;
  }

  // Add current request
  filtered.push(now);

  map.set(key, filtered);

  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    // -------------------------
    // Validation
    // -------------------------

    if (!name || name.trim().length === 0) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Name is required',
        },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Valid email is required',
        },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Message must be at least 5 characters',
        },
        { status: 400 }
      );
    }

    // -------------------------
    // Get Client IP
    // -------------------------

    const forwardedFor = request.headers.get('x-forwarded-for');

    const ip =
      forwardedFor?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // -------------------------
    // IP Rate Limit
    // 5 requests per hour
    // -------------------------

    if (isRateLimited(ipRequests, ip, 5, ONE_HOUR)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Too many requests from this IP. Please try again later.',
        },
        { status: 429 }
      );
    }

    // -------------------------
    // Email Rate Limit
    // 3 messages per day
    // -------------------------

    const normalizedEmail = email.toLowerCase().trim();

    if (
      isRateLimited(
        emailRequests,
        normalizedEmail,
        3,
        ONE_DAY
      )
    ) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Too many messages sent from this email address.',
        },
        { status: 429 }
      );
    }

    // -------------------------
    // Environment Variables
    // -------------------------

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPass = process.env.GMAIL_APP_PASS;

    if (!gmailUser || !gmailAppPass) {
      console.error('Missing Gmail credentials');

      return NextResponse.json(
        {
          ok: false,
          error: 'Server configuration error',
        },
        { status: 500 }
      );
    }

    // -------------------------
    // Create Mail Transporter
    // -------------------------

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPass,
      },
    });

    // -------------------------
    // Email Content
    // -------------------------

    const mailOptions = {
      from: gmailUser,
      to: gmailUser,
      replyTo: normalizedEmail,
      subject: `Portfolio Contact Form: Message from ${name}`,

      text: `
You received a new message from your portfolio contact form.

Name: ${name}
Email: ${normalizedEmail}

Message:
${message}
      `,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
          "
        >
          <h2 style="color: #4fd1c5;">
            New Contact Form Submission
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${normalizedEmail}
          </p>

          <h3>Message:</h3>

          <p
            style="
              white-space: pre-wrap;
              background-color: #f5f5f5;
              padding: 15px;
              border-radius: 5px;
            "
          >
            ${message}
          </p>
        </div>
      `,
    };

    // -------------------------
    // Send Email
    // -------------------------

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      {
        ok: false,
        error:
          'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}