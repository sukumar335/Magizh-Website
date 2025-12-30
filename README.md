# Magizh Media Website

A modern, professional website for Magizh Media - a leading advertising agency in Chennai, Tamil Nadu.

## Features

- **6 Main Pages**: Home, About, Services, Portfolio, Reviews, Contact
- **SEO Optimized**: Meta tags, structured data (JSON-LD), semantic HTML
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Performance**: Optimized with Next.js 14+ App Router
- **5-Star Rating**: Highlights 5.0 rating with 57+ reviews
- **24/7 Availability**: Prominent display of "Open 24 Hours" badge
- **Google Maps Integration**: Embedded map on contact page

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── portfolio/         # Portfolio page
│   ├── reviews/            # Reviews page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, Testimonials
│   ├── ui/                 # Button, ContactForm
│   └── SEO/                # StructuredData component
├── lib/
│   ├── types.ts            # TypeScript types
│   └── data.ts             # Mock data (testimonials, services, portfolio)
└── public/                 # Static assets
```

## Business Information

- **Name**: Magizh Media
- **Industry**: Advertising Agency
- **Rating**: 5.0 (57+ reviews)
- **Location**: Maduravoyal, Chennai, Tamil Nadu 600116
- **Hours**: Open 24 Hours
- **Service Area**: Chennai & Tamil Nadu

## Customization

### Update Business Information

Edit the following files:
- `app/layout.tsx` - Update metadata
- `components/layout/Footer.tsx` - Update contact information
- `app/contact/page.tsx` - Update address and contact details
- `components/SEO/StructuredData.tsx` - Update structured data

### Add Real Images

Replace placeholder images in:
- `app/portfolio/page.tsx` - Portfolio images
- `public/` - Add logo and favicon

### Configure Contact Form

Update `components/ui/ContactForm.tsx` to integrate with your backend API or email service.

### Update Google Maps

Replace the Google Maps embed URL in `app/contact/page.tsx` with your actual location coordinates.

## SEO Features

- Meta tags for all pages
- Open Graph tags
- Structured data (JSON-LD) for Organization, LocalBusiness, and WebSite
- Semantic HTML structure
- Optimized images with Next.js Image component
- Fast loading times

## License

This project is proprietary and confidential.

