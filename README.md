# Moustafa El Mahdy - Portfolio Website

A modern portfolio website for Moustafa El Mahdy, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern, clean UI matching the Framer website aesthetic
- All sections from the original website:
  - About section
  - Skills showcase
  - Tech stack display
  - Work experience timeline
  - Education history
  - Publications
  - Recognition and awards
- SEO optimized
- Smooth animations and interactions

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

## Project Structure (Designer-Friendly Guide)

Think of this project structure like organizing a Figma file - everything has its place and purpose:

```
moustafaelmahdy-website/
├── app/                          # Pages (like Figma pages/frames)
│   ├── api/                      # API routes (backend functionality)
│   │   └── cv/                   # CV download endpoint
│   ├── layout.tsx                # Root layout (like master frames)
│   ├── page.tsx                  # Homepage (main canvas - combines all sections)
│   └── globals.css               # Global styles (like Figma styles)
│
├── components/                   # All UI components (like Figma components)
│   ├── sections/                 # Page sections (full content blocks)
│   │   ├── About.tsx             # About me section
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── Education.tsx         # Education history
│   │   ├── Publications.tsx      # Research publications
│   │   ├── Recognition.tsx       # Awards and recognition
│   │   ├── Skills.tsx            # Skills showcase
│   │   └── TechStack.tsx         # Technology stack display
│   ├── navigation/               # Navigation components
│   │   ├── Sidebar.tsx           # Desktop sidebar navigation
│   │   ├── MobileNav.tsx         # Mobile navigation menu
│   │   └── BackToTop.tsx         # Scroll to top button
│   └── ui/                       # Reusable UI primitives (base components)
│       ├── Logo.tsx              # Company/institution logo component
│       ├── SectionHeader.tsx     # Section title with icon
│       ├── AnimatedSection.tsx   # Animation wrapper component
│       └── ExpandableCard.tsx    # Expandable content card
│
├── data/                         # Content (like CMS - all your copy/data)
│   └── content.ts                # All text, links, experience data
│
├── lib/                          # Utilities & design system (like design tokens)
│   ├── constants/
│   │   └── design.ts             # Design tokens (spacing, colors, animations)
│   └── utils/
│       └── logo.ts               # Logo helper functions
│
├── types/                        # TypeScript definitions (data shapes)
│   └── index.ts                  # Shared type definitions
│
├── public/                       # Static assets (images, files)
│   ├── logos/                    # Company/institution logos
│   ├── tech-stack/               # Technology stack icons
│   ├── memoji.png                # Profile image
│   └── favicon.png               # Site favicon
│
├── scripts/                      # Build/deployment scripts
│   └── setup-auto-push.sh       # Git auto-push setup script
│
├── docs/                         # Documentation
│   └── archive/                  # Historical/reference documentation
│
└── README.md                     # This file
```

### Understanding the Component Hierarchy

**UI Components** (`components/ui/`)
- Base building blocks that can be reused anywhere
- Like Figma primitives: buttons, headers, cards
- Examples: `Logo`, `SectionHeader`, `AnimatedSection`

**Section Components** (`components/sections/`)
- Full page sections with complete content
- Like Figma frames with all content inside
- Examples: `About`, `Experience`, `Education`

**Navigation Components** (`components/navigation/`)
- Site navigation and user interaction elements
- Like Figma navigation prototypes
- Examples: `Sidebar`, `MobileNav`, `BackToTop`

### Design System (`lib/constants/design.ts`)

Like Figma design tokens - a single source of truth for design values:
- **Spacing**: Consistent gaps, margins, padding
- **Colors**: Accent colors for borders, highlights
- **Animations**: Duration and easing functions
- **Border Radius**: Consistent rounded corners

Update values here to change the design globally.

### Content Management (`data/content.ts`)

Like a headless CMS - all your content in one place:
- Personal information (name, title, contact)
- Social media links
- Experience entries (companies, roles, dates)
- Education history
- Skills and tech stack
- Publications
- Recognition and awards

**To update content**: Just edit `data/content.ts` - no need to touch components!

### Asset Organization (`public/`)

Like Figma assets - organized by purpose:
- `logos/` - Company and institution logos
- `tech-stack/` - Technology icons
- Root level - Profile images, favicons, robots.txt

## Customization Guide

### Adding a New Section

1. Create a new component in `components/sections/YourSection.tsx`
2. Follow the pattern of existing sections:
   ```tsx
   import AnimatedSection from "@/components/ui/AnimatedSection";
   import SectionHeader from "@/components/ui/SectionHeader";
   
   export default function YourSection() {
     return (
       <section id="your-section" className="mb-12 md:mb-16 scroll-mt-24">
         <AnimatedSection>
           <SectionHeader icon={YourIcon} label="Your Section" />
         </AnimatedSection>
         {/* Your content here */}
       </section>
     );
   }
   ```
3. Add your section data to `data/content.ts`
4. Import and add to `app/page.tsx`
5. Add navigation link in `data/content.ts` → `sections` array

### Updating Content

All content lives in `data/content.ts`. To update:
- **Personal info**: Edit `personalInfo` object
- **About text**: Edit `about` string
- **Experience**: Add/edit objects in `experience` array
- **Skills**: Edit `skills` array or `skillCategories` object
- **Tech stack**: Edit `techStack` array
- **Education**: Edit `education` array
- **Publications**: Edit `publications` array
- **Recognition**: Edit `recognition` array

### Changing Design Tokens

Edit `lib/constants/design.ts` to update:
- Spacing values (gaps, margins, padding)
- Color schemes
- Animation timings
- Border radius values

### Adding New Assets

1. **Logos**: Add PNG files to `public/logos/` (lowercase filename)
2. **Tech icons**: Add PNG files to `public/tech-stack/` (lowercase filename)
3. **Images**: Add to `public/` root or create new subfolder

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14+** (App Router) - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run setup-auto-push` - Setup git auto-push (see `docs/archive/` for details)

## License

© Moustafa El Mahdy 2025
