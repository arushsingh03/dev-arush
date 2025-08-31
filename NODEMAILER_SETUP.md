# Nodemailer Setup for Contact Form

This guide explains how to set up Nodemailer to receive emails from your portfolio contact form.

## 🚀 **Setup Completed ✅**

1. **Nodemailer Package Installed**: `npm install nodemailer @types/nodemailer`
2. **API Route Updated**: `/src/app/api/contact/route.ts` now uses Nodemailer
3. **Environment Variables Set**: `.env.local` with Gmail credentials
4. **Contact Form Ready**: Will send emails to your Gmail address

## 📧 **How It Works**

1. **Visitor fills out contact form** on your portfolio
2. **Form submits to `/api/contact`** endpoint
3. **Nodemailer sends email** FROM your Gmail TO your Gmail
4. **You receive the email** at `arushsingh1803@gmail.com` with their contact details

## ⚠️ **IMPORTANT: You Need to Set Up Gmail App Password**

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Scroll down and click "App passwords"
4. Select "Mail" and "Other (Custom name)"
5. Name it "Portfolio Contact Form"
6. Copy the generated 16-character password

### Step 3: Update Environment Variables
Replace the placeholder in `.env.local`:

```bash
GMAIL_USER=arushsingh1803@gmail.com
GMAIL_APP_PASSWORD=your_actual_16_character_app_password
```

## 🔧 **Current Configuration**

The API route is configured to:
- **Send FROM**: Your Gmail address (`arushsingh1803@gmail.com`)
- **Send TO**: Your Gmail address (`arushsingh1803@gmail.com`)
- **Subject**: "New Contact Form Submission: [Their Subject]"
- **Content**: Professional HTML email with their contact details

## 📬 **What You'll Receive**

When someone submits the form, you'll get an email like:

```
Subject: New Contact Form Submission: [Their Subject]

Contact Details:
- Name: [Their Name]
- Email: [Their Email]
- Subject: [Their Subject]

Message:
[Their Message]

---
Sent from your portfolio contact form on [Timestamp]
```

## 🧪 **Testing Your Setup**

1. **Set up Gmail App Password** (see steps above)
2. **Update `.env.local`** with your actual app password
3. **Start dev server**: `npm run dev`
4. **Go to `/contact`** page
5. **Fill out form** and submit
6. **Check your email** at `arushsingh1803@gmail.com`

## 🔒 **Security Features**

- ✅ **Input validation** (client + server)
- ✅ **Email format validation**
- ✅ **Honeypot field** for bot protection
- ✅ **Environment variable protection**
- ✅ **Gmail App Password** (more secure than regular password)

## 🚨 **Troubleshooting**

### Common Issues:

1. **"Authentication failed" error**
   - Make sure you're using the App Password, not your regular Gmail password
   - Ensure 2-Factor Authentication is enabled
   - Check that the App Password is exactly 16 characters

2. **"Invalid login" error**
   - Verify your Gmail address is correct
   - Make sure the App Password is copied correctly (no extra spaces)

3. **"Connection timeout" error**
   - Check your internet connection
   - Gmail might be blocking the connection (check Gmail security settings)

4. **Email not received**
   - Check spam/junk folders
   - Verify the recipient email in the API route
   - Check browser console for errors

## 🌐 **Production Deployment**

When you deploy:
1. **Set environment variables** on your hosting platform:
   - `GMAIL_USER=arushsingh1803@gmail.com`
   - `GMAIL_APP_PASSWORD=your_actual_app_password`

2. **Consider using a custom domain** for the "from" email address later

3. **Monitor email delivery** and check for any rate limiting

## 📚 **Useful Links**

- [Google Account Security](https://myaccount.google.com/security)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [Nodemailer Documentation](https://nodemailer.com/)

## 🎯 **Next Steps**

1. **Set up Gmail App Password** (most important!)
2. **Update `.env.local`** with your actual app password
3. **Test the contact form**
4. **Deploy when ready**

Your contact form will now send emails directly to your Gmail inbox using Nodemailer! 🎉
