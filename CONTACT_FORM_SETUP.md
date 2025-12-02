# Contact Form Setup Instructions

This document explains how to set up the contact form with Gmail SMTP.

## 📋 Prerequisites

1. A Gmail account
2. 2-Step Verification enabled on your Gmail account
3. An App Password generated for this application

## 🔐 Step 1: Enable 2-Step Verification

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Follow the prompts to enable 2-Step Verification

## 🔑 Step 2: Generate an App Password

1. Go to [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down to **App passwords**
4. Select **Mail** as the app and **Other (Custom name)** as the device
5. Enter a name like "Portfolio Contact Form"
6. Click **Generate**
7. **Copy the 16-character password** (you won't see it again!)

## 🌍 Step 3: Set Environment Variables

### For Local Development

Create a `.env.local` file in the root of your project:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASS=your-16-character-app-password
```

**Important:** 
- Never commit `.env.local` to git (it should already be in `.gitignore`)
- Replace `your-email@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password you generated

### For Vercel Deployment

1. Go to your project on [Vercel](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   - **Name:** `GMAIL_USER`
   - **Value:** `your-email@gmail.com`
   - **Environment:** Production, Preview, Development (select all)

   - **Name:** `GMAIL_APP_PASS`
   - **Value:** `your-16-character-app-password`
   - **Environment:** Production, Preview, Development (select all)

4. Click **Save**
5. **Redeploy your application** for the changes to take effect

## 🧪 Step 4: Test the Contact Form

1. Install dependencies (if not already done):
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Navigate to the contact form on your website
4. Fill out and submit the form
5. Check your Gmail inbox for the message

## 📧 How It Works

- When a user submits the contact form, the data is sent to `/api/contact`
- The server validates the input (name, email, message)
- Nodemailer sends an email from your Gmail account to your Gmail account
- The user's email is set as the `replyTo` field, so you can reply directly
- The user receives visual feedback (loading, success, or error states)

## 🔒 Security Notes

- **Never** expose `GMAIL_USER` or `GMAIL_APP_PASS` in client-side code
- These variables are only used in the server-side API route (`/app/api/contact/route.ts`)
- The `.env.local` file is automatically ignored by Next.js in production
- Always use App Passwords, never your regular Gmail password

## 🐛 Troubleshooting

### "Invalid login" error
- Verify your Gmail address is correct
- Ensure you're using the App Password (16 characters), not your regular password
- Check that 2-Step Verification is enabled

### "Server configuration error"
- Verify both environment variables are set correctly
- For Vercel: Make sure you redeployed after adding the variables
- Check that variable names match exactly: `GMAIL_USER` and `GMAIL_APP_PASS`

### Email not received
- Check your spam folder
- Verify the email is being sent to the correct address (same as `GMAIL_USER`)
- Check Vercel function logs for any errors

## 📝 File Structure

```
src/
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          # Backend API endpoint
└── components/
    └── ContactSection.tsx         # Frontend form component
```

## ✅ Verification Checklist

- [ ] 2-Step Verification enabled on Gmail
- [ ] App Password generated and copied
- [ ] `.env.local` created with both variables (for local dev)
- [ ] Environment variables added to Vercel (for production)
- [ ] Dependencies installed (`npm install`)
- [ ] Form tested locally
- [ ] Form tested in production after deployment

