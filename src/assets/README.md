# NUON Assets - Developer Guide

This folder contains all the images and icons used throughout the NUON pre-launch website.

## Folder Structure

```
/assets
├── images/          # All website images (logos, photos, etc.)
│   └── index.ts    # Centralized image exports
├── icons/          # All SVG icons and icon files
│   └── README.md   # Icon documentation
└── README.md       # This file
```

## How to Use Images

All images are exported from `/assets/images/index.ts` for easy importing throughout the application.

### Importing Images

```tsx
// Import specific images
import { nuonLogo, ozoneHospitalLogo, indianNurseImage } from '../assets/images';

// Use in your component
<img src={nuonLogo} alt="NUON Logo" />
```

### Available Images

- **nuonLogo** - Main NUON application logo
- **ozoneHospitalLogo** - Partner hospital logo
- **indianNurseImage** - Hero section nurse image
- Additional images as added to the project

## How to Add New Images

1. **Add the image file** to the `/assets/images/` directory
2. **Update** `/assets/images/index.ts` to export the new image:

```tsx
// In /assets/images/index.ts
export const yourNewImage = "https://your-image-url.com/image.jpg";
```

3. **Import and use** in your components:

```tsx
import { yourNewImage } from '../assets/images';
```

## How to Use Icons

Icons are stored in the `/assets/icons/` directory. See `/assets/icons/README.md` for detailed documentation.

### Recommended Icon Libraries

The project uses **lucide-react** for icons:

```tsx
import { Users, Heart, Award } from 'lucide-react';

<Users className="w-6 h-6 text-purple-600" />
```

## Image Guidelines

- **Format**: Use WebP or JPG for photos, PNG for logos with transparency
- **Size**: Optimize images before adding (recommended max 500KB)
- **Naming**: Use camelCase for image variable names (e.g., `nurseProfileImage`)
- **Alt Text**: Always include descriptive alt text when using images

## Image Sources

- Hero images: Unsplash
- Logos: Client-provided assets
- Icons: lucide-react library

## Updating Images

To update an existing image:

1. Replace the image URL in `/assets/images/index.ts`
2. Clear your browser cache to see changes
3. Test the update across all pages where the image is used

## Performance Tips

- Use the `ImageWithFallback` component for dynamic images
- Always specify image dimensions when possible
- Consider lazy loading for images below the fold
- Optimize images using tools like TinyPNG or Squoosh

## Support

For questions about assets, refer to:
- `/assets/icons/README.md` for icon-specific documentation
- `/PROJECT_STRUCTURE.md` for overall project organization
