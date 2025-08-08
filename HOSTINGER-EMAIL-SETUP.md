# 📧 Hostinger Email Setup - 2 Easy Options

## 🚀 OPTION 1: Resend API (Recommended for Hostinger)

### Why Resend + Hostinger is Perfect:
- ✅ Works with ANY email provider (including Hostinger)
- ✅ Professional email delivery
- ✅ Simple server-side setup
- ✅ 3,000 emails/month FREE
- ✅ Better deliverability than SMTP

### Quick Setup (3 minutes):

#### Step 1: Create Resend Account
1. Go to [Resend.com](https://resend.com/)
2. Sign up for FREE account
3. Verify your email

#### Step 2: Add Domain (Optional but Recommended)
1. In Resend dashboard, go to **Domains**
2. Add your domain: `weehauljunkdc.com`
3. Add the DNS records Resend provides to Hostinger DNS
4. Wait for verification (usually instant)

#### Step 3: Create API Key
1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it: `Wee Haul Contact Form`
4. **Copy the API key** (starts with `re_...`)

#### Step 4: Add to Vercel
1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add: `RESEND_API_KEY = re_your_api_key_here`
3. Redeploy your project

#### Step 5: Install Resend (I'll do this for you)
```bash
npm install resend
```

### 🎯 Result:
- Emails sent from: `noreply@weehauljunkdc.com` 
- Emails delivered to: `info@weehaulnow.com` (your Hostinger email)
- Professional appearance
- Excellent deliverability

---

## 🔧 OPTION 2: EmailJS with Hostinger SMTP

Use the main `EMAIL-SETUP-GUIDE.md` with these Hostinger settings:

**Hostinger SMTP Settings:**
- **SMTP Server**: `smtp.hostinger.com`
- **Port**: `587` (TLS) or `465` (SSL)
- **Username**: `info@weehaulnow.com`
- **Password**: Your Hostinger email password
- **Security**: TLS/STARTTLS

---

## ⚡ Which Should You Choose?

**Choose Resend if:**
- ✅ You want professional email delivery
- ✅ You don't mind adding DNS records
- ✅ You want better deliverability
- ✅ You want server-side email sending

**Choose EmailJS if:**
- ✅ You want zero DNS setup
- ✅ You prefer client-side email sending
- ✅ You want to use existing Hostinger credentials

**My Recommendation**: **Resend** - It's more professional and reliable for business use.

---

## 🚀 Next Steps

Let me know which option you prefer, and I'll implement it for you! Both will deliver emails to your `info@weehaulnow.com` Hostinger mailbox.