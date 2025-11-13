# NUON Pre-Launch Website - HostGator Deployment Guide

## 📋 Prerequisites

Before you begin, make sure you have:
- A HostGator hosting account (Shared, VPS, or Dedicated)
- Access to cPanel
- Your domain name configured with HostGator
- Node.js knowledge (basic)

---

## 🔧 Part 1: Build Your Application Locally

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Production Version
```bash
npm run build
```

This will create a `dist` folder containing your optimized production files.

---

## 🌐 Part 2: Deploy to HostGator

### Method A: Using cPanel File Manager (Easiest for Beginners)

#### Step 1: Access cPanel
1. Log in to your HostGator account
2. Navigate to cPanel (usually at `yourdomain.com/cpanel`)

#### Step 2: Navigate to File Manager
1. In cPanel, find and click "File Manager"
2. Navigate to `public_html` folder (this is your website root)
3. If using a subdomain, navigate to the subdomain's folder

#### Step 3: Upload Your Files
1. Click "Upload" button in File Manager
2. Upload all files from your `dist` folder
3. Wait for upload to complete

#### Step 4: Extract (if you uploaded a ZIP)
- If you zipped your `dist` folder first:
  1. Right-click the ZIP file
  2. Select "Extract"
  3. Delete the ZIP file after extraction

#### Step 5: Configure `.htaccess` for React Router
Create a new file called `.htaccess` in your `public_html` folder with this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that React Router works correctly with direct URL access.

---

### Method B: Using FTP (Recommended for Larger Projects)

#### Step 1: Get FTP Credentials
1. In cPanel, go to "FTP Accounts"
2. Create a new FTP account or use existing credentials
3. Note down:
   - FTP Server/Host: `ftp.yourdomain.com`
   - Username: `your_username`
   - Password: `your_password`
   - Port: 21

#### Step 2: Connect via FTP Client
1. Download FileZilla (https://filezilla-project.org/) or use your preferred FTP client
2. Connect using your FTP credentials
3. Navigate to `public_html` on the remote server

#### Step 3: Upload Files
1. On your local computer, navigate to your `dist` folder
2. Select all files inside `dist`
3. Drag and drop to `public_html` on the server
4. Wait for upload to complete

#### Step 4: Set Up `.htaccess`
Same as Method A, Step 5

---

## 📧 Part 3: Configure Email Functionality

### Option 1: Using EmailJS (Recommended - No Backend Required)

#### Setup Instructions:
1. Go to https://www.emailjs.com/
2. Sign up for a free account (100 emails/month free)
3. Add an email service:
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the authorization steps
   - Note your Service ID

4. Create an email template:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these template variables in your email body:
     ```
     New Waitlist Signup!
     
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone_number}}
     Hospital: {{hospital}}
     Specialization: {{specialization}}
     Experience: {{experience}}
     Interests: {{interests}}
     ```
   - Note your Template ID

5. Get your Public Key:
   - Go to "Account" tab
   - Copy your Public Key

6. Update `/utils/emailService.ts`:
   ```typescript
   const EMAILJS_PUBLIC_KEY = "your_actual_public_key";
   const EMAILJS_SERVICE_ID = "your_service_id";
   const EMAILJS_TEMPLATE_ID = "your_template_id";
   ```

7. Update the receiving email:
   ```typescript
   to_email: "your_actual_email@yourdomain.com"
   ```

8. Rebuild and redeploy:
   ```bash
   npm run build
   ```
   Then upload the new `dist` folder files

---

### Option 2: Using Your Own Backend API

If you prefer to create your own backend:

#### Step 1: Create a Backend (Node.js + Express Example)

Create a simple API on HostGator or another service:

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: 'mail.yourdomain.com', // HostGator SMTP
  port: 465,
  secure: true,
  auth: {
    user: 'your_email@yourdomain.com',
    pass: 'your_email_password'
  }
});

app.post('/api/waitlist', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, hospital, specialization, experience, interests } = req.body;

    await transporter.sendMail({
      from: 'noreply@yourdomain.com',
      to: 'support@nuon.app',
      subject: 'New NUON Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> +91 ${phoneNumber}</p>
        <p><strong>Hospital:</strong> ${hospital}</p>
        <p><strong>Specialization:</strong> ${specialization}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Interests:</strong> ${interests.join(', ')}</p>
      `
    });

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(3001, () => console.log('API running on port 3001'));
```

#### Step 2: Deploy Backend to HostGator

HostGator supports Node.js on VPS and Dedicated plans:
1. SSH into your server
2. Upload your backend code
3. Install dependencies: `npm install`
4. Use PM2 to keep it running: `pm2 start server.js`

#### Step 3: Update Frontend
In `/utils/emailService.ts`, update the `sendToBackendAPI` function URL to your backend endpoint.

---

## 🔐 Part 4: SSL Certificate (HTTPS)

### Enable Free SSL in cPanel:
1. Log in to cPanel
2. Find "SSL/TLS Status" or "Let's Encrypt SSL"
3. Select your domain
4. Click "Run AutoSSL" or "Install"
5. Wait for certificate installation (usually instant)
6. Your site will now be accessible via HTTPS

---

## 🗄️ Part 5: Optional - Store Submissions in Database

### Using cPanel MySQL:

#### Step 1: Create Database
1. In cPanel, go to "MySQL Databases"
2. Create a new database (e.g., `nuon_waitlist`)
3. Create a database user
4. Add user to database with all privileges

#### Step 2: Create Table
Use phpMyAdmin (in cPanel) to create a table:

```sql
CREATE TABLE waitlist_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  hospital VARCHAR(255),
  specialization VARCHAR(100) NOT NULL,
  experience VARCHAR(50) NOT NULL,
  interests TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Step 3: Update Backend
Add database connection to your backend API (if using Option 2 above).

---

## 📱 Part 6: Testing Your Deployment

### Test Checklist:
- [ ] Visit your domain - does the site load?
- [ ] Check all pages/sections - do they display correctly?
- [ ] Test the waitlist form - does it submit?
- [ ] Check email - did you receive the submission?
- [ ] Test on mobile - is it responsive?
- [ ] Test different browsers (Chrome, Safari, Firefox)
- [ ] Check HTTPS - is the padlock showing?
- [ ] Test navigation menu - does scrolling work?
- [ ] Verify all images load correctly

---

## 🐛 Common Issues & Solutions

### Issue: "404 Not Found" on page refresh
**Solution:** Make sure `.htaccess` file is properly configured (see Part 2, Step 5)

### Issue: Images not loading
**Solution:** Check file paths are correct and files uploaded to correct directory

### Issue: Form submits but no email received
**Solution:** 
- Check EmailJS configuration (Service ID, Template ID, Public Key)
- Check spam folder
- Verify email template is published in EmailJS

### Issue: Site not loading at all
**Solution:**
- Verify files are in `public_html` directory
- Check that `index.html` exists in root
- Clear browser cache

### Issue: Styling looks broken
**Solution:**
- Check that all CSS files uploaded
- Verify `globals.css` is in correct location
- Clear browser cache

---

## 🚀 Going Live Checklist

Before announcing your site:

1. **Content Review:**
   - [ ] All text is proofread
   - [ ] Contact information is correct
   - [ ] Links work properly

2. **Functionality:**
   - [ ] Form submission works
   - [ ] Email notifications working
   - [ ] Mobile responsive
   - [ ] Cross-browser compatible

3. **SEO & Performance:**
   - [ ] Page title is set
   - [ ] Meta description added
   - [ ] Favicon uploaded
   - [ ] Google Analytics configured (optional)

4. **Legal:**
   - [ ] Privacy policy page (if collecting data)
   - [ ] Terms of service (if applicable)

5. **Security:**
   - [ ] SSL certificate active (HTTPS)
   - [ ] Email credentials secured
   - [ ] Database credentials secured (if applicable)

---

## 📞 Support Resources

- **HostGator Support:** https://www.hostgator.com/support
- **HostGator Knowledge Base:** https://www.hostgator.com/help
- **EmailJS Documentation:** https://www.emailjs.com/docs/

---

## 💡 Tips for Success

1. **Regular Backups:** Use cPanel's backup feature to backup your site regularly
2. **Monitor Submissions:** Check your email regularly for new waitlist signups
3. **Keep Source Code:** Save your original project files locally
4. **Update Dependencies:** Keep your packages updated for security
5. **Test Before Updates:** Always test changes locally before deploying

---

## 🎉 You're Done!

Your NUON pre-launch website is now live on HostGator! 

Make sure to monitor your waitlist submissions and respond to inquiries promptly. Good luck with your launch! 🚀
