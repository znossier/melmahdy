# Moustafa El Mahdy - Portfolio Website

A modern portfolio website for Moustafa El Mahdy, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern, clean UI matching the Framer website aesthetic
- All sections from the original website:
  - Hero section with contact information
  - About section
  - Skills showcase
  - Work experience timeline
  - Education history
  - Publications
  - Recognition and awards
- Dark mode support
- SEO optimized

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage combining all sections
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Experience section
│   ├── Education.tsx   # Education section
│   ├── Publications.tsx # Publications section
│   ├── Recognition.tsx # Recognition section
│   └── Footer.tsx      # Footer component
├── data/
│   └── content.ts      # All content data
└── public/             # Static assets (CV, images, etc.)
```

## Customization

All content is stored in `data/content.ts`. Update this file to modify:
- Personal information
- Contact details
- Social media links
- Experience entries
- Education history
- Skills
- Publications
- Recognition

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- PostCSS
- Autoprefixer

## License

© Moustafa El Mahdy 2025

