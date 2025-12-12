# Vercel Deployment Guide

## Setup Instructions

### 1. Environment Variables

In your Vercel project settings, add these environment variables:

- `GMAIL_USER` - Your Gmail address
- `GMAIL_APP_PASSWORD` - Gmail app-specific password (get from https://myaccount.google.com/apppasswords)
- `GMAIL_RECIPIENT` - Email address to receive form submissions (optional, defaults to GMAIL_USER)
- `SMTP_HOST` - smtp.gmail.com (optional, this is the default)
- `SMTP_PORT` - 465 (optional, this is the default)
- `SMTP_SECURE` - true (optional, this is the default)

### 2. Deploy to Vercel

#### Option A: Via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy
vercel
```

#### Option B: Via GitHub Integration
1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your repository
5. Configure environment variables
6. Deploy

### 3. Build Command

Vercel will automatically detect your project type. The build configuration is already set in `vercel.json`.

### 4. How It Works

- **Local Development**: Uses `/src/pages/api/contact.ts` (Astro endpoint)
  - Run: `yarn dev`
  - API: `http://localhost:4321/asjr-web/api/contact`

- **Vercel Production**: Uses `/api/contact.js` (Vercel serverless function)
  - API: `https://your-project.vercel.app/api/contact`

The form automatically detects the environment and calls the correct endpoint.

### 5. Testing

After deployment:
1. Visit your Vercel URL
2. Navigate to the contact form
3. Submit a test message
4. Check the recipient email

### 6. Troubleshooting

**If emails aren't sending:**
- Verify environment variables are set in Vercel dashboard
- Check Vercel function logs for errors
- Ensure Gmail app password is correct (not regular password)
- Enable "Less secure app access" in Gmail if needed

**If form doesn't submit:**
- Check browser console for errors
- Verify the API endpoint is accessible at `/api/contact`
- Check Vercel function logs

### 7. Notes

- The `/api/contact.js` file is only used in production (Vercel)
- The `/src/pages/api/contact.ts` file is only used in local development
- Keep both files - they serve different environments
