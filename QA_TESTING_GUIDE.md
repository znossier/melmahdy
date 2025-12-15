# QA Testing Guide

This guide provides step-by-step instructions for conducting QA testing on the portfolio website.

## Prerequisites

1. Node.js and npm installed
2. Browser DevTools installed
3. Lighthouse (Chrome DevTools)
4. Screen reader (optional but recommended)

## Quick Start

### 1. Build and Start Production Server

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test the production build.

### 2. Run Automated Checks

```bash
# Lint check
npm run lint

# TypeScript check
npm run build
```

## Testing Checklist

### Functional Testing

#### Navigation Testing

1. **Desktop Sidebar Navigation**
   - Open site on desktop (>= 768px width)
   - Click each section link in sidebar
   - Verify smooth scroll to correct section
   - Scroll page manually and verify active section highlights
   - Test sidebar remains fixed during scroll

2. **Mobile Navigation**
   - Open site on mobile (< 768px width) or use DevTools responsive mode
   - Click floating menu button (bottom left)
   - Verify drawer opens smoothly
   - Click backdrop to close drawer
   - Click each navigation item and verify:
     - Smooth scroll to section
     - Drawer closes automatically
   - Scroll page and verify active section highlights in drawer

3. **Back to Top Button**
   - Scroll down past 300px
   - Verify button appears (bottom right)
   - Click button and verify smooth scroll to top
   - Verify button disappears when at top

#### Interactive Components

1. **Experience Cards**
   - Click on each experience card
   - Verify card expands/collapses smoothly
   - Press Tab to focus card, then Enter/Space to expand
   - Verify "More/Less" button works
   - Expand multiple cards and verify they work independently

2. **Education Cards**
   - Same as Experience cards
   - Verify cards with bullets expand
   - Verify cards without bullets don't show expand button

3. **Mobile Sidebar Header**
   - On mobile, click menu button in header
   - Verify content expands/collapses
   - Test contact links (phone, email)
   - Test CV download button
   - Test social media links (should open in new tabs)

### Visual Testing

#### Responsive Design

1. **Mobile (320px - 767px)**
   - Use DevTools responsive mode
   - Test widths: 320px, 375px, 414px, 768px
   - Verify:
     - Mobile navigation appears
     - Sidebar becomes mobile header
     - Content spacing appropriate
     - Text readable
     - Images scale correctly

2. **Tablet (768px - 1023px)**
   - Test widths: 768px, 1024px
   - Verify sidebar appears
   - Verify content layout adapts

3. **Desktop (1024px+)**
   - Test widths: 1024px, 1280px, 1440px, 1920px
   - Verify fixed sidebar
   - Verify content max-width constraints
   - Test hover states

#### Visual Consistency

1. **Typography**
   - Verify Inter font loads
   - Check text sizes are consistent
   - Test text wrapping on long content

2. **Images**
   - Verify all logos load
   - Test logo fallbacks (disable images to test)
   - Verify memoji displays
   - Check tech stack logos

3. **Animations**
   - Scroll page and verify smooth animations
   - Test on lower-end device if possible
   - Verify animations don't block interactions

### Accessibility Testing

#### Keyboard Navigation

1. Press Tab repeatedly
2. Verify focus order is logical
3. Verify focus indicators are visible
4. Test all interactive elements with keyboard:
   - Links
   - Buttons
   - Expandable cards

#### Screen Reader Testing

1. Enable screen reader (VoiceOver on Mac, NVDA on Windows)
2. Navigate through page
3. Verify:
   - All images have descriptive alt text
   - All buttons have aria-labels
   - Sections are announced correctly
   - Expandable cards announce state

#### Color Contrast

1. Use browser extension (axe DevTools, WAVE)
2. Or manually check:
   - Text on white backgrounds
   - Links on white backgrounds
   - Interactive elements

### Performance Testing

#### Lighthouse Audit

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Run audit on production build
5. Verify scores:
   - Performance > 90
   - Accessibility > 95
   - Best Practices > 90
   - SEO > 90

#### Manual Performance Checks

1. Open Network tab in DevTools
2. Reload page
3. Check:
   - Total load time
   - Bundle sizes
   - Image sizes
   - Font loading

### SEO Testing

#### Meta Tags

1. View page source
2. Verify:
   - `<title>` tag present
   - Meta description present
   - Open Graph tags present
   - Twitter Card tags present

#### Content Structure

1. Verify heading hierarchy (h1 → h2 → h3)
2. Check semantic HTML
3. Verify all images have alt text

### Security Testing

#### External Links

1. Check all external links:
   - GitHub link
   - LinkedIn link
   - Publication link
2. Verify all have `rel="noopener noreferrer"`
3. Verify links open in new tabs

### Cross-Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Chrome Mobile

For each browser, verify:
- All navigation works
- All animations render
- All images load
- Responsive design works
- No console errors

## Common Issues and Fixes

### Issue: Sidebar not highlighting active section
**Fix**: Check that sections have proper IDs matching navigation

### Issue: Mobile nav not appearing
**Fix**: Verify viewport width is < 768px

### Issue: Images not loading
**Fix**: Check image paths in `/public` directory

### Issue: Build errors
**Fix**: Run `npm install` and check TypeScript errors

## Reporting Issues

When reporting issues, include:
1. Browser and version
2. Device/viewport size
3. Steps to reproduce
4. Expected vs actual behavior
5. Screenshots if applicable
6. Console errors (if any)

## Performance Benchmarks

Target metrics:
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.8s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## Accessibility Benchmarks

Target scores:
- WCAG AA compliance
- Keyboard navigation: 100%
- Screen reader compatibility: 100%
- Color contrast: 100% (WCAG AA)

---

**Last Updated**: 2025-01-XX
**Version**: 1.0
