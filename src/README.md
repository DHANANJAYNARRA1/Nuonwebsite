# NUON Pre-Launch Website

**Nurses United Opportunities Nourished** - A modern pre-launch website for early access waitlist signups.

## 🎯 Overview

This is a complete pre-launch website built for NUON, targeting nurses, nursing students, and healthcare administrators. The site features:

- Modern purple-pink-cyan gradient design system
- Glassmorphism UI effects
- Fully responsive (mobile-first)
- Animated sections with fade-in-on-scroll
- Functional waitlist registration form
- Email integration for form submissions

## 📁 Project Structure

```
├── App.tsx                          # Main application component
├── assets/
│   └── images/                      # Centralized image imports
│       └── index.ts                 # Image exports
├── components/
│   ├── header.tsx                   # Navigation header
│   ├── hero-section.tsx             # Hero section
│   ├── problem-section.tsx          # Problem statement section
│   ├── solution-section.tsx         # Solution overview
│   ├── how-it-works-section.tsx     # How it works section
│   ├── social-proof-section.tsx     # Social proof & partnerships
│   ├── pre-registration-form.tsx    # Waitlist signup form
│   ├── faq-section.tsx              # FAQ accordion
│   ├── final-cta-section.tsx        # Final call-to-action
│   ├── contact-section.tsx          # Contact information
│   ├── footer.tsx                   # Footer
│   └── ui/                          # Shadcn UI components
├── utils/
│   └── emailService.ts              # Email submission service
├── styles/
│   └── globals.css                  # Global styles & design tokens
└── HOSTGATOR_DEPLOYMENT_GUIDE.md    # Detailed deployment guide
```

## 🚀 Quick Start

### 1. Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 2. Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

The production files will be in the `dist/` folder.

## 📧 Email Configuration

The form uses EmailJS for sending submissions. To configure:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your credentials:
   - Public Key
   - Service ID
   - Template ID

5. Update `/utils/emailService.ts`:
   ```typescript
   const EMAILJS_PUBLIC_KEY = "your_public_key";
   const EMAILJS_SERVICE_ID = "your_service_id";
   const EMAILJS_TEMPLATE_ID = "your_template_id";
   ```

6. Update the receiving email:
   ```typescript
   to_email: "your_email@yourdomain.com"
   ```

**Detailed instructions:** See `/utils/emailService.ts` for complete setup guide.

## 🌐 Deployment to HostGator

Complete deployment instructions are available in:
**[HOSTGATOR_DEPLOYMENT_GUIDE.md](/HOSTGATOR_DEPLOYMENT_GUIDE.md)**

### Quick Deploy Steps:

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to `public_html` in cPanel
3. Create `.htaccess` file for React Router support
4. Enable SSL certificate in cPanel
5. Configure email service (EmailJS or custom backend)

## 🎨 Design System

### Colors
- **Primary Purple:** `#9333ea` to `#7c3aed`
- **Pink Accent:** `#ec4899` to `#db2777`
- **Cyan Accent:** `#06b6d4` to `#0891b2`
- **Blue Accent:** `#3b82f6` to `#2563eb`

### Typography
Typography is managed in `styles/globals.css` with responsive sizing built in.

### Glassmorphism
- Background: `bg-white/20` or `bg-white/60`
- Backdrop blur: `backdrop-blur-xl`
- Border: `border-white/40`

## 📱 Sections

1. **Hero** - Eye-catching intro with CTA
2. **Problem** - Three key challenges nurses face
3. **Solution** - NUON's value propositions
4. **How It Works** - Three-step process
5. **Social Proof** - Partner logos & testimonials
6. **Pre-Registration Form** - Waitlist signup (main conversion point)
7. **FAQ** - Common questions
8. **Final CTA** - Last chance to sign up
9. **Contact** - Contact information
10. **Footer** - Links and copyright

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Motion (Framer Motion)** - Animations
- **Shadcn UI** - Component library
- **React Hook Form** - Form management
- **EmailJS** - Email service
- **Lucide React** - Icons

## 📋 Form Data Collected

The waitlist form collects:
- Full Name
- Phone Number (with +91 prefix for India)
- Email Address
- Current Hospital/Clinic (optional)
- Nursing Specialization
- Years of Experience
- Interests (Courses, Mentorship, Wellness, Events)

## 🔒 Privacy & Security

- SSL/HTTPS required for production
- No sensitive data stored on frontend
- Form validation implemented
- Email submissions secured via EmailJS or backend API

## 📞 Support

For deployment or technical issues:
- **HostGator Support:** [hostgator.com/support](https://www.hostgator.com/support)
- **EmailJS Docs:** [emailjs.com/docs](https://www.emailjs.com/docs/)

## 📄 License

© 2026 Nuon (Nurses United Opportunities Nourished). All rights reserved.

---

**Launch Date:** Early 2026

**Contact:**
- Email: support@nuon.app
- Phone: +91 (800) 123-4567
- Location: Mumbai, Maharashtra, India
