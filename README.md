# ONE GO AI Agency - Landing Page

A high-converting, full-stack landing page for **ONE GO AI Agency** - a Spanish-based AI consulting agency that helps SMEs implement AI solutions.

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for scroll animations and interactions
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Performance Optimized**: Fast loading times, optimized images, lazy loading
- **Accessible**: WCAG 2.1 compliant

## Design System

### Brand Colors
- **Navy Blue**: `#2B4A6B` - Main brand color
- **Deep Navy**: `#1A2F47` - Darker accents
- **Light Blue Tint**: `#F0F4F8` - Section backgrounds
- **White**: `#FFFFFF` - Clean backgrounds

### Typography
- **Headlines**: Montserrat (Bold/Black)
- **Body**: Inter (Regular/Medium)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

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

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
/app
  /page.tsx           # Main landing page
  /layout.tsx         # Root layout with metadata
  /globals.css        # Global styles
/components
  /sections           # Landing page sections
    /hero-section.tsx
    /problem-solution.tsx
    /services.tsx
    /social-proof.tsx
    /why-choose.tsx
    /how-it-works.tsx
    /faq.tsx
    /final-cta.tsx
    /footer.tsx
  /ui                 # Reusable UI components (shadcn/ui)
/lib
  /utils.ts           # Utility functions
```

## Landing Page Sections

1. **Hero Section** - Above-the-fold conversion zone
2. **Problem-Solution** - Pain points and value proposition
3. **Services** - Three-column service offerings
4. **Social Proof** - Testimonials, stats, and case studies
5. **Why Choose ONE GO** - Competitive differentiators
6. **How It Works** - Three-step process
7. **FAQ** - Accordion-style frequently asked questions
8. **Final CTA** - Strong call-to-action
9. **Footer** - Navigation and legal information

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Performance Targets

- Lighthouse Score: 90+ across all metrics
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## License

© 2024 ONE GO AI Agency. All rights reserved.
