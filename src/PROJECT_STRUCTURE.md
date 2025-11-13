# NUON Project Structure

## 📁 Complete File Organization

```
nuon-website/
│
├── 📄 App.tsx                              # Main app component (entry point)
├── 📄 README.md                            # Project overview & quick start
├── 📄 HOSTGATOR_DEPLOYMENT_GUIDE.md        # Deployment instructions
├── 📄 EMAIL_TEMPLATE_GUIDE.md              # Email setup walkthrough
├── 📄 QUICK_START_CHECKLIST.md             # Pre-launch checklist
├── 📄 PROJECT_STRUCTURE.md                 # This file
├── 📄 Attributions.md                      # Image attributions
│
├── 📁 assets/                              # ⭐ All static assets organized here
│   ├── 📁 images/
│   │   └── 📄 index.ts                     # Centralized image exports
│   │       - NUON logo
│   │       - Indian nurse hero image
│   │       - Problem section images (3)
│   │       - Ozone Hospital logo
│   │
│   └── 📁 icons/
│       └── 📄 README.md                    # Icon usage guide
│           (Custom SVG icons go here)
│
├── 📁 components/                          # React components
│   │
│   ├── 📁 figma/                          # System components (protected)
│   │   └── 📄 ImageWithFallback.tsx       # Image component with fallback
│   │
│   ├── 📁 ui/                             # Shadcn UI components
│   │   ├── 📄 accordion.tsx               # FAQ accordion
│   │   ├── 📄 button.tsx                  # Buttons
│   │   ├── 📄 checkbox.tsx                # Form checkboxes
│   │   ├── 📄 input.tsx                   # Form inputs
│   │   ├── 📄 label.tsx                   # Form labels
│   │   ├── 📄 select.tsx                  # Dropdowns
│   │   └── ... (other UI components)
│   │
│   ├── 📄 header.tsx                      # Navigation header
│   ├── 📄 hero-section.tsx                # Hero section (Section 1)
│   ├── 📄 problem-section.tsx             # Problem statement (Section 2)
│   ├── 📄 solution-section.tsx            # Solution overview (Section 3)
│   ├── 📄 how-it-works-section.tsx        # How it works (Section 4)
│   ├── 📄 social-proof-section.tsx        # Testimonials & partners (Section 5)
│   ├── 📄 pre-registration-form.tsx       # Waitlist form (Section 6) ⭐
│   ├── 📄 faq-section.tsx                 # FAQ accordion (Section 7)
│   ├── 📄 final-cta-section.tsx           # Final CTA (Section 8)
│   ├── 📄 contact-section.tsx             # Contact info (Section 9)
│   └── 📄 footer.tsx                      # Footer
│
├── 📁 utils/                              # Utility functions
│   └── 📄 emailService.ts                 # Email submission logic ⭐
│
├── 📁 styles/                             # Global styles
│   └── 📄 globals.css                     # Design system & typography
│
└── 📁 guidelines/                         # Project guidelines
    └── 📄 Guidelines.md                   # Development guidelines
```

---

## 🎯 Key Files to Know

### Essential Configuration Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `utils/emailService.ts` | Email sending configuration | Before deployment - add your EmailJS credentials |
| `assets/images/index.ts` | Image imports | When adding new images |
| `styles/globals.css` | Design tokens & typography | When changing colors/fonts |
| `components/contact-section.tsx` | Contact information | Update with your actual contact details |
| `components/footer.tsx` | Footer content & copyright | Update social links, copyright year |

### Section Components (In Order)

1. **header.tsx** - Sticky navigation bar with logo and menu
2. **hero-section.tsx** - First thing users see with main CTA
3. **problem-section.tsx** - Three challenges nurses face
4. **solution-section.tsx** - NUON's value propositions
5. **how-it-works-section.tsx** - Three-step process
6. **social-proof-section.tsx** - Partners, stats, testimonials
7. **pre-registration-form.tsx** - Main conversion point (waitlist signup)
8. **faq-section.tsx** - Frequently asked questions
9. **final-cta-section.tsx** - Last chance to join
10. **contact-section.tsx** - Contact details and image
11. **footer.tsx** - Links, social media, copyright

---

## 🔄 Data Flow

### Form Submission Flow:
```
User fills form
    ↓
pre-registration-form.tsx validates data
    ↓
Calls emailService.ts
    ↓
emailService.ts sends to EmailJS
    ↓
EmailJS sends email to your inbox
    ↓
User sees success message
    ↓
Form resets
```

### Image Loading Flow:
```
Component imports from assets/images/index.ts
    ↓
index.ts references figma:asset/[hash].png
    ↓
Build system bundles image
    ↓
Image displayed on page
```

---

## 📦 Build Process

### Development:
```
npm run dev
    ↓
Vite starts dev server
    ↓
Site available at localhost:5173
    ↓
Hot reload on file changes
```

### Production:
```
npm run build
    ↓
TypeScript compiles
    ↓
Tailwind processes CSS
    ↓
Vite optimizes & bundles
    ↓
Creates dist/ folder
    ↓
Upload dist/ to HostGator
```

---

## 🎨 Styling System

### Tailwind Configuration:
- **Version:** 4.0 (latest)
- **Configuration file:** `styles/globals.css` (no config file needed)
- **Custom tokens:** Defined in globals.css

### Typography Hierarchy:
```css
/* Defined in globals.css */
h1 → 3rem (48px) on desktop, 2rem (32px) on mobile
h2 → 2.25rem (36px) on desktop, 1.75rem (28px) on mobile
h3 → 1.5rem (24px)
h4 → 1.25rem (20px)
p  → 1rem (16px)
```

### Color System:
- **Primary:** Purple gradient (#9333ea to #7c3aed)
- **Accent 1:** Pink (#ec4899 to #db2777)
- **Accent 2:** Cyan (#06b6d4 to #0891b2)
- **Accent 3:** Blue (#3b82f6 to #2563eb)

---

## 🔧 Component Architecture

### Shared Props Pattern:
```typescript
// Many section components use this pattern:
import { useRef } from "react";
import { useInView } from "motion/react";

const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.3 });

// Animate when section comes into view
```

### Form Pattern:
```typescript
// pre-registration-form.tsx uses:
import { useForm } from "react-hook-form@7.55.0";

const { register, handleSubmit, formState: { errors } } = useForm();
```

---

## 📱 Responsive Breakpoints

Tailwind breakpoints used throughout:

| Prefix | Min Width | Devices |
|--------|-----------|---------|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large mobile |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Large desktop |

### Usage Example:
```tsx
<div className="p-4 md:p-8 lg:p-12">
  {/* 
    Padding:
    - 1rem (16px) on mobile
    - 2rem (32px) on tablet
    - 3rem (48px) on desktop
  */}
</div>
```

---

## 🔒 Protected Files

**DO NOT EDIT:**
- `/components/figma/ImageWithFallback.tsx` - System component

**BE CAREFUL WITH:**
- `/components/ui/*` - Shadcn components (only modify if you know what you're doing)
- `/styles/globals.css` - Typography tokens (changes affect entire site)

---

## 🚀 Deployment Checklist Quick Reference

1. ✅ Update email credentials in `utils/emailService.ts`
2. ✅ Update contact info in `components/contact-section.tsx`
3. ✅ Run `npm run build`
4. ✅ Upload `dist/` contents to `public_html`
5. ✅ Create `.htaccess` for routing
6. ✅ Enable SSL in cPanel
7. ✅ Test form submission

**Full details:** See `/QUICK_START_CHECKLIST.md`

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview, quick start, tech stack |
| `HOSTGATOR_DEPLOYMENT_GUIDE.md` | Step-by-step HostGator deployment |
| `EMAIL_TEMPLATE_GUIDE.md` | EmailJS setup instructions |
| `QUICK_START_CHECKLIST.md` | Pre-launch verification checklist |
| `PROJECT_STRUCTURE.md` | This file - project organization |
| `assets/icons/README.md` | Icon usage guide |

---

## 🔍 Finding Things Quickly

### Need to change...

**Colors?** → `styles/globals.css`  
**Contact email?** → `components/contact-section.tsx` + `utils/emailService.ts`  
**Logo?** → `assets/images/index.ts`  
**Social links?** → `components/footer.tsx`  
**Form fields?** → `components/pre-registration-form.tsx`  
**FAQ questions?** → `components/faq-section.tsx`  
**Hero text?** → `components/hero-section.tsx`  
**Problem statements?** → `components/problem-section.tsx`  

---

## 💡 Development Tips

### Adding a New Section:
1. Create new file in `/components/` (e.g., `new-section.tsx`)
2. Import in `App.tsx`
3. Add to component tree in correct order
4. Use similar pattern as existing sections (useRef, useInView for animations)

### Adding a New Image:
1. Get figma:asset path from Figma or upload to project
2. Add export to `/assets/images/index.ts`
3. Import in component: `import { imageName } from "../assets/images"`
4. Use in JSX: `<img src={imageName} alt="..." />`

### Modifying Form Fields:
1. Update `FormData` interface in `pre-registration-form.tsx`
2. Add new form field JSX
3. Update email template in EmailJS to include new field
4. Update `emailService.ts` templateParams

---

## 🎓 Learning Resources

- **React:** https://react.dev/
- **TypeScript:** https://www.typescriptlang.org/
- **Tailwind CSS:** https://tailwindcss.com/
- **Motion (Framer Motion):** https://motion.dev/
- **Shadcn UI:** https://ui.shadcn.com/
- **Lucide Icons:** https://lucide.dev/
- **EmailJS:** https://www.emailjs.com/docs/

---

This structure is designed for:
✅ Easy navigation  
✅ Clear separation of concerns  
✅ Simple maintenance  
✅ Quick deployment  

Happy coding! 🚀
