# 📧 Email Setup Guide - Get Emails from Contact Form

## 🚀 QUICK SETUP (5 minutes) - EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) 
2. Sign up for FREE account
3. Connect your Gmail/Outlook account

### Step 2: Create Email Service
1. In EmailJS dashboard, click **"Add New Service"**
2. Choose **Gmail** (or your email provider)
3. Authorize access to your `info@weehaulnow.com` account
4. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Click **"Create New Template"**
2. Use this template content:

```
Subject: New Quote Request - Wee Haul Junk Removal

Hello,

You have received a new quote request from your website:

Customer Information:
- Name: {{from_name}}
- Email: {{from_email}} 
- Phone: {{from_phone}}

Project Description:
{{message}}

Please follow up within 24 hours for best conversion rates.

Best regards,
Website Contact Form
```

3. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key** (looks like: `user_AbC123XyZ`)

### Step 5: Add to Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Go to **Settings** → **Environment Variables**
3. Add these 3 variables:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = user_your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID = service_your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_your_template_id
```

### Step 6: Redeploy
1. Trigger a new deployment in Vercel
2. Test your contact form - emails will now go to `info@weehaulnow.com`! ✅

---

## 🎯 RESULT
- ✅ Contact form submissions → Direct to `info@weehaulnow.com`
- ✅ No server setup required
- ✅ Free tier: 200 emails/month
- ✅ Works immediately

## 🔧 Alternative Option: Resend API
If you prefer server-side email sending, see `README-EMAIL-SETUP.md` for Resend setup.

---

## 📋 Quick Checklist
- [ ] EmailJS account created
- [ ] Gmail connected to EmailJS
- [ ] Email template created with quote request format  
- [ ] 3 environment variables added to Vercel
- [ ] Vercel redeployed
- [ ] Contact form tested

**Need help?** The form currently logs to console - once you add the environment variables, it will start sending real emails!