# Icons Directory - Developer Guide

This directory is for storing custom icon files if needed.

Currently, the NUON website uses **Lucide React** for all icons, which are imported directly from the `lucide-react` package.

> **Note**: For general website images and logos, see `/assets/images/` and `/assets/README.md`

## Icons Currently Used

All icons come from Lucide React:

### Navigation & UI
- `Menu` - Mobile menu hamburger icon
- `X` - Close button icon

### Social Media (Footer)
- `Linkedin` - LinkedIn social icon
- `Twitter` - Twitter/X social icon
- `Instagram` - Instagram social icon

### Contact Section
- `Mail` - Email icon
- `Phone` - Phone icon
- `MapPin` - Location icon

### Features & Content
- `BookOpen` - Learning/courses icon (How It Works)
- `Users` - Community/mentorship icon (How It Works, Social Proof)
- `Heart` - Wellness icon (How It Works)
- `Shield` - Security/trust icon
- `Award` - Achievement/certification icon
- `TrendingUp` - Growth/progress icon

### Accordion (FAQ)
- `ChevronDown` - Accordion expand/collapse

## Adding Custom Icons

If you need to add custom SVG icons:

1. **Save SVG files here** in this `/assets/icons/` folder
2. **Name them descriptively** (e.g., `nuon-badge.svg`)
3. **Import in your components:**
   ```typescript
   import NuonBadge from "../assets/icons/nuon-badge.svg";
   ```
4. **Use in JSX:**
   ```tsx
   <img src={NuonBadge} alt="NUON Badge" className="w-8 h-8" />
   ```

## Lucide React Documentation

Browse all available icons: https://lucide.dev/icons/

### How to Use Lucide Icons:

```typescript
import { IconName } from "lucide-react";

// In your component:
<IconName className="w-6 h-6 text-purple-600" />
```

### Common Icon Sizes:
- `w-4 h-4` - Small (16px)
- `w-5 h-5` - Medium-small (20px)
- `w-6 h-6` - Medium (24px)
- `w-8 h-8` - Large (32px)
- `w-12 h-12` - Extra large (48px)

## Logo Files

Logo files are stored in `/assets/images/index.ts`:
- NUON Logo
- Ozone Hospital Logo (partner)
- Other partner logos

These are Figma assets and should remain in the images folder.
