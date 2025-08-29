# Vibe Engine Landing Page Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Components](#components)
5. [Styling](#styling)
6. [Features](#features)
7. [Customizations](#customizations)
8. [Installation & Setup](#installation--setup)
9. [Development](#development)
10. [Deployment](#deployment)

---

## Project Overview

**Vibe Engine** is a modern, responsive landing page built with Next.js 15 and Tailwind CSS. It features a dark theme with vibrant gradients, custom animations, and an interactive custom cursor with mixed-blend-mode effects.

### Key Features
- Dark modern design with gradient accents
- Custom cursor with mixed-blend-mode
- Typing animation effect
- Glassy-transparent navigation
- Fully responsive design
- Space Grotesk typography

---

## Technology Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **Font**: Space Grotesk (Google Fonts)
- **Package Manager**: npm
- **React**: 18.x

---

## Project Structure

```
landing-page/
├── app/
│   ├── globals.css         # Global styles and custom CSS
│   ├── layout.tsx          # Root layout with font configuration
│   └── page.tsx            # Main page component
├── components/
│   ├── CTA.tsx             # Call-to-action section
│   ├── CustomCursor.tsx    # Interactive cursor component
│   ├── Features.tsx        # Features showcase section
│   ├── Footer.tsx          # Footer with links and social
│   ├── Gallery.tsx         # Image gallery section
│   ├── Hero.tsx            # Hero section with typing animation
│   └── Navbar.tsx          # Navigation bar component
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## Components

### 1. **Navbar** (`components/Navbar.tsx`)
- **Features**:
  - Fixed position with glassy-transparent background
  - Oval-shaped navigation buttons
  - Mobile-responsive hamburger menu
  - Hover effects (white background, black text)
- **Styling**:
  - Background: `bg-white/5 backdrop-blur-xl`
  - Border: `border-white/10`
  - Buttons: `rounded-full` with hover state transitions

### 2. **Hero** (`components/Hero.tsx`)
- **Features**:
  - Typing animation for "Stunning Images" text
  - Animated gradient background
  - Floating orb animations
  - Input field with "Generate Now" button
  - Feature badges (Unlimited Generations, 4K Resolution, Multiple Styles)
- **Styling**:
  - Background gradient: `from-black via-gray-950 to-black`
  - Radial gradients with reduced opacity for subtle color accents
  - Grid pattern overlay

### 3. **Features** (`components/Features.tsx`)
- **Features**:
  - 6 feature cards with icons
  - Hover animations and glow effects
  - Gradient text for feature titles
  - Dark card backgrounds with transparency
- **Cards Include**:
  - Neural Style Transfer
  - Text to Image
  - Image Enhancement
  - Smart Editing
  - Real-time Generation
  - Custom Models

### 4. **Gallery** (`components/Gallery.tsx`)
- **Features**:
  - Image showcase grid
  - Sample generated images
  - Responsive layout

### 5. **CTA** (`components/CTA.tsx`)
- **Features**:
  - Call-to-action section
  - Statistics display (100K+ Users, 10M+ Images, 99% Satisfaction)
  - Dual button design (Start Free Trial, View Pricing)
  - Floating animation elements

### 6. **Footer** (`components/Footer.tsx`)
- **Features**:
  - 4-column layout (Company info, Product, Resources, Company links)
  - Social media icons
  - Copyright information
  - Dark background with gradient overlay

### 7. **CustomCursor** (`components/CustomCursor.tsx`)
- **Features**:
  - Three-layer cursor design
  - Center dot (6px, white)
  - Animated ring (24px, expands to 36px on hover)
  - Mixed-blend-mode circle (18px, grayscale filter)
  - Automatically hides on mobile devices
  - Scales on interactive elements

---

## Styling

### Global Styles (`app/globals.css`)

#### Base Styles
- **Body Background**: Pure black (`bg-black`)
- **Default Cursor**: Hidden (`cursor: none`)
- **Font**: Space Grotesk

#### Utility Classes
1. **`.gradient-text`**: Cyan to purple gradient for text
2. **`.gradient-border`**: Gradient border effect
3. **`.glow`**: Blue glow drop shadow
4. **`.text-glow`**: Text shadow effect
5. **`.hover-glow`**: Hover animation with glow
6. **`.pulse-glow`**: Pulsing animation
7. **`.floating`**: Floating animation for elements

#### Custom Cursor Styles
- `.custom-cursor-dot`: Center dot styling
- `.custom-cursor-ring`: Outer ring with hover states
- `.custom-cursor-blend`: Mixed-blend-mode circle
- Responsive: Hidden on screens < 1024px

---

## Customizations

### Recent Modifications
1. **Brand Name**: Changed from "AI Image" to "Vibe Engine"
2. **Typography**: Implemented Space Grotesk font family
3. **Background**: Darkened to pure black from slate-950
4. **Navbar**: Made glassy-transparent with oval buttons
5. **Cursor**: Added custom cursor with mixed-blend-mode
6. **Animations**: Added typing effect to Hero section

### Color Scheme
- **Primary**: Cyan (`#06b6d4`)
- **Secondary**: Blue (`#3b82f6`)
- **Accent**: Purple (`#8b5cf6`)
- **Background**: Black (`#000000`)
- **Text**: White/Gray variations

---

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd landing-page

# Install dependencies
npm install

# Run development server
npm run dev
```

### Environment Setup
No environment variables required for basic setup.

---

## Development

### Available Scripts
```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

### Development Server
- Local: http://localhost:3000 (or 3001/3002 if port is busy)
- Network: http://[your-ip]:3000

### Making Changes
1. Components are in `/components`
2. Global styles in `/app/globals.css`
3. Page structure in `/app/page.tsx`
4. Layout and fonts in `/app/layout.tsx`

---

## Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Use Railway CLI or GitHub integration
- **Docker**: Create Dockerfile with Node.js image

### Production Considerations
1. Optimize images in `/public`
2. Enable caching headers
3. Use CDN for static assets
4. Monitor Core Web Vitals

---

## Component API Reference

### Navbar Props
- None (uses internal state for mobile menu)

### Hero Props
- None (self-contained with typing animation)

### CustomCursor Props
- None (tracks mouse position globally)

### Features Props
- None (features array is internal)

---

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations
1. **Font Loading**: Using Next.js font optimization
2. **Images**: Lazy loading where applicable
3. **CSS**: Tailwind CSS purging unused styles
4. **React**: Using React 18 with automatic batching
5. **Animations**: GPU-accelerated transforms

---

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   - Solution: The dev server will automatically use next available port

2. **Custom Cursor Not Showing**
   - Check if you're on a touch device or screen width < 1024px
   - Cursor is intentionally hidden on mobile

3. **Font Not Loading**
   - Clear browser cache
   - Check internet connection (Google Fonts)

4. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check Node.js version (requires 18+)

---

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

---

## License
[Add your license information here]

---

## Contact & Support
[Add contact information here]

---

*Last Updated: 2025*