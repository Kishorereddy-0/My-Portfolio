# Premium Portfolio Website

A world-class, futuristic portfolio website with Antigravity/Awwwards-level design quality, featuring advanced animations and premium UI/UX.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✨ Features

- **Custom Cursor** with blend-mode effects
- **Magnetic Buttons** with spring-based attraction
- **Smooth Scrolling** using Lenis
- **GSAP Animations** with ScrollTrigger
- **Glassmorphism UI** with backdrop blur
- **Parallax Effects** on scroll
- **Responsive Design** for all devices
- **SEO Optimized** with meta tags

## 🎨 Design System

- **Background:** Deep graphite (#0B0D10)
- **Primary:** Electric blue (#5B7CFF)
- **Secondary:** Violet (#9B5CFF)
- **Text:** Off-white (#EDEDED)

## 🛠️ Tech Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Framer Motion
- Lenis (Smooth Scroll)

## 📁 Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CustomCursor.tsx
│   ├── SmoothScroll.tsx
│   ├── MagneticButton.tsx
│   ├── GlassCard.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Certifications.tsx
│       └── Contact.tsx
└── package.json
```

## 🎯 Sections

1. **Hero** - Staggered text reveal with animated gradient
2. **About** - Line-by-line text reveals on scroll
3. **Skills** - Animated grid with hover effects
4. **Projects** - Case studies with parallax
5. **Certifications** - Premium minimal list
6. **Contact** - Magnetic CTAs for social links

## 🔧 Customization

### Update Contact Information

Edit `components/sections/Contact.tsx`:
- Email address
- LinkedIn URL
- GitHub URL

### Add Resume

1. Place resume PDF in `/public` folder
2. Update Hero CTA button href in `components/sections/Hero.tsx`

### Modify Colors

Edit `tailwind.config.ts` and `app/globals.css` to change the color scheme.

### Add Projects

Edit `components/sections/Projects.tsx` to add more projects to the array.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Optimized with Turbopack
- Font optimization with next/font
- Image optimization (AVIF, WebP)
- Code splitting ready
- Target Lighthouse score: 90+

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next folder
```

## 📄 License

MIT License - feel free to use for your own portfolio!

## 👤 Author

**Lakshmi Chaitanya Sai**
- Location: Chennai, India
- Specialties: UI/UX • Frontend • Python Backend • Cybersecurity

---

Built with precision and attention to detail. 🚀
