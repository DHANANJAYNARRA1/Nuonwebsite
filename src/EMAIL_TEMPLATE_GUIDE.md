# Email Template Setup Guide for NUON Waitlist

## 📧 EmailJS Template Configuration

### Step 1: Create Your EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

---

### Step 2: Add an Email Service

1. In your EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider:
   - **Gmail** (Recommended for testing)
   - Outlook
   - Yahoo
   - Custom SMTP (for your domain email)

3. Follow the authorization steps:
   - For Gmail: Allow EmailJS to access your account
   - For custom SMTP: Enter your email server details

4. **Save your Service ID** - you'll need this later

---

### Step 3: Create Email Template

#### Template for Admin Notification (When someone joins waitlist)

1. Go to **"Email Templates"** in EmailJS
2. Click **"Create New Template"**
3. Name it: `NUON_Waitlist_Admin_Notification`

**Template Settings:**
- **From Name:** `{{from_name}}`
- **From Email:** `{{from_email}}`
- **To Email:** `support@nuon.app` (or your email)
- **Subject:** `🎉 New NUON Waitlist Signup - {{from_name}}`

**Email Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #06b6d4 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9fafb;
      padding: 30px 20px;
      border: 1px solid #e5e7eb;
      border-top: none;
      border-radius: 0 0 10px 10px;
    }
    .field {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      border-left: 4px solid #9333ea;
    }
    .field-label {
      font-weight: bold;
      color: #9333ea;
      display: block;
      margin-bottom: 5px;
    }
    .field-value {
      color: #333;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎉 New Waitlist Signup!</h1>
    <p>Someone just joined the NUON early access waitlist</p>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="field-label">👤 Full Name</span>
      <span class="field-value">{{from_name}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">📧 Email Address</span>
      <span class="field-value">{{from_email}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">📱 Phone Number</span>
      <span class="field-value">{{phone_number}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">🏥 Hospital/Clinic</span>
      <span class="field-value">{{hospital}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">💉 Specialization</span>
      <span class="field-value">{{specialization}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">📊 Experience Level</span>
      <span class="field-value">{{experience}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">🎯 Interests</span>
      <span class="field-value">{{interests}}</span>
    </div>
    
    <div class="field">
      <span class="field-label">📅 Submitted At</span>
      <span class="field-value">{{submission_time}}</span>
    </div>
  </div>
  
  <div class="footer">
    <p>This is an automated notification from NUON Waitlist Form</p>
    <p>© 2026 Nuon - Nurses United Opportunities Nourished</p>
  </div>
</body>
</html>
```

4. Click **"Save"**
5. **Save your Template ID** - you'll need this later

---

### Step 4: Optional - User Confirmation Email

Create a second template to send a confirmation to the user:

**Template Name:** `NUON_Waitlist_User_Confirmation`

**Template Settings:**
- **From Name:** `NUON Team`
- **From Email:** `noreply@nuon.app` (or your email)
- **To Email:** `{{from_email}}`
- **Subject:** `Welcome to NUON Early Access! 🎉`

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #06b6d4 100%);
      color: white;
      padding: 40px 20px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #ffffff;
      padding: 40px 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .highlight {
      background: #f3e8ff;
      border-left: 4px solid #9333ea;
      padding: 20px;
      margin: 20px 0;
      border-radius: 5px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #9333ea 0%, #06b6d4 100%);
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 25px;
      margin: 20px 0;
      font-weight: bold;
    }
    .footer {
      background: #f9fafb;
      text-align: center;
      padding: 30px;
      color: #666;
      font-size: 13px;
      border-radius: 0 0 10px 10px;
      border: 1px solid #e5e7eb;
      border-top: none;
    }
    .social-links {
      margin: 20px 0;
    }
    .social-links a {
      display: inline-block;
      margin: 0 10px;
      color: #9333ea;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🎉 Welcome to NUON!</h1>
    <p>You're on the early access waitlist</p>
  </div>
  
  <div class="content">
    <p>Hi {{from_name}},</p>
    
    <p>Thank you for joining the <strong>NUON (Nurses United Opportunities Nourished)</strong> early access waitlist! We're thrilled to have you as part of our founding community.</p>
    
    <div class="highlight">
      <h3 style="margin-top: 0; color: #9333ea;">🎁 Your Early Access Benefits:</h3>
      <ul>
        <li><strong>One FREE course</strong> when we launch</li>
        <li>Priority access when we launch in early 2026</li>
        <li>Exclusive founding member benefits</li>
        <li>Direct input on features you want to see</li>
      </ul>
    </div>
    
    <p><strong>What happens next?</strong></p>
    <ol>
      <li>We'll keep you updated on our launch progress via email</li>
      <li>You'll be among the first to know when NUON goes live</li>
      <li>You'll receive your exclusive discount code before launch</li>
    </ol>
    
    <p>In the meantime, feel free to share NUON with your nursing colleagues. The more united we are, the stronger our community becomes!</p>
    
    <center>
      <a href="https://nuon.app" class="cta-button">Visit Our Website</a>
    </center>
    
    <p>Questions? Reply to this email or reach out to us at <a href="mailto:support@nuon.app">support@nuon.app</a></p>
    
    <p>Get United. Get Nourished. Get Nuon.</p>
    
    <p style="margin-top: 30px;">
      Best regards,<br>
      <strong>The NUON Team</strong>
    </p>
  </div>
  
  <div class="footer">
    <div class="social-links">
      <a href="#">LinkedIn</a> | 
      <a href="#">Twitter</a> | 
      <a href="#">Instagram</a>
    </div>
    <p>NUON - Nurses United Opportunities Nourished<br>
    Mumbai, Maharashtra, India</p>
    <p style="font-size: 11px; color: #999;">
      You're receiving this email because you signed up for NUON early access.<br>
      If you didn't sign up, please ignore this email.
    </p>
    <p>© 2026 Nuon. All rights reserved.</p>
  </div>
</body>
</html>
```

---

### Step 5: Get Your Credentials

1. Go to **"Account"** tab in EmailJS
2. Find and copy your **Public Key**
3. You should now have:
   - ✅ Public Key
   - ✅ Service ID
   - ✅ Template ID (for admin notification)
   - ✅ (Optional) Template ID (for user confirmation)

---

### Step 6: Update Your Code

Open `/utils/emailService.ts` and update:

```typescript
const EMAILJS_PUBLIC_KEY = "paste_your_public_key_here";
const EMAILJS_SERVICE_ID = "paste_your_service_id_here";
const EMAILJS_TEMPLATE_ID = "paste_your_template_id_here";
```

And update the receiving email:
```typescript
to_email: "support@nuon.app", // Change to your actual email
```

---

### Step 7: Rebuild and Deploy

```bash
npm run build
```

Upload the new files to your HostGator server.

---

## 📊 Template Variables Reference

These variables are automatically passed from the form:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | User's full name | "Priya Sharma" |
| `{{from_email}}` | User's email address | "priya@example.com" |
| `{{phone_number}}` | User's phone with country code | "+91 9876543210" |
| `{{hospital}}` | Hospital/clinic name | "Apollo Hospital" |
| `{{specialization}}` | Nursing specialization | "Critical Care" |
| `{{experience}}` | Years of experience | "3-5 years" |
| `{{interests}}` | Comma-separated interests | "Courses & Learning, Mentorship" |
| `{{to_email}}` | Your receiving email | "support@nuon.app" |

---

## ✅ Testing Your Email Setup

1. Fill out the form on your website
2. Submit it
3. Check:
   - Did you receive the admin notification email?
   - Does it contain all the form data?
   - Is the formatting correct?

4. If using user confirmation:
   - Did the user receive a confirmation email?
   - Check spam folder if not received

---

## 🚨 Troubleshooting

### Emails not being received?

1. **Check spam folder** - EmailJS emails sometimes land in spam initially
2. **Verify Service ID and Template ID** - Make sure they match exactly
3. **Check Public Key** - Ensure it's correct
4. **Test in EmailJS dashboard** - Use the "Test it" feature in template editor
5. **Check email quota** - Free plan has 100 emails/month limit
6. **Verify email template is published** - Look for "Published" status

### Form submits but shows error?

1. Check browser console for error messages
2. Verify all EmailJS credentials are updated in code
3. Make sure you rebuilt the project after updating credentials
4. Check if EmailJS service is properly authorized

---

## 💡 Pro Tips

1. **Test thoroughly** before going live
2. **Set up email forwarding** to multiple team members
3. **Monitor your EmailJS dashboard** for delivery status
4. **Keep track of submissions** - consider adding to a spreadsheet or database
5. **Respond quickly** to early signups - they're your most engaged users!

---

## 📈 Upgrading EmailJS

Free plan limits:
- 100 emails/month
- 2 email templates
- 1 email service

If you expect more signups, consider upgrading:
- **Personal Plan:** $7/month - 1,000 emails
- **Professional Plan:** $15/month - 10,000 emails

---

## 🎯 Alternative: Using Google Forms + Zapier

If you prefer a no-code solution:

1. Create a Google Form with the same fields
2. Use Zapier to trigger emails when form is submitted
3. Connect Zapier to your email service
4. Update the form action to submit to Google Forms

This is easier but less customizable than EmailJS.

---

Good luck with your NUON launch! 🚀
