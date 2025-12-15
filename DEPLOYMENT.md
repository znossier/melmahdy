# Deployment Guide

## Pre-Deployment Checklist ✅

All pre-deployment checks have been completed:
- ✅ Production build tested locally
- ✅ Linting passed with no errors
- ✅ All required images verified and present
- ✅ Git repository initialized and committed

## Next Steps: Deploy to Vercel

### 1. Push to Git Repository

First, you need to push your code to a Git hosting service (GitHub, GitLab, or Bitbucket):

```bash
# If you haven't already, add a remote repository
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. **Sign up/Login**: Go to [vercel.com](https://vercel.com) and sign in with your Git provider (GitHub, GitLab, or Bitbucket)

2. **Import Project**:
   - Click "Add New Project" in the Vercel dashboard
   - Select your repository (`moustafaelmahdy-website`)
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings** (should be auto-detected):
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

### 3. Post-Deployment Tasks

#### Update Metadata URL

After deployment, update the OpenGraph URL in `app/layout.tsx`:

1. Get your Vercel deployment URL (e.g., `https://moustafaelmahdy-website.vercel.app`)
2. Update line 20 in `app/layout.tsx`:
   ```typescript
   url: "https://your-actual-vercel-url.vercel.app", // or custom domain when configured
   ```
3. Commit and push the change

#### Verify Deployment

- [ ] Test all pages and navigation
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test all external links
- [ ] Verify contact information displays correctly
- [ ] Run Lighthouse audit for performance
- [ ] Check SEO meta tags

### 4. Custom Domain (Optional - Later)

When ready to add a custom domain:

1. In Vercel dashboard: Project Settings → Domains
2. Add your domain (e.g., `moustafaelmahdy.com`)
3. Follow Vercel's DNS configuration instructions
4. Update `app/layout.tsx` metadata URL to match custom domain
5. Wait for DNS propagation (can take up to 48 hours)

## Files Ready for Deployment

- ✅ `vercel.json` - Vercel configuration
- ✅ `next.config.js` - Next.js configuration
- ✅ `package.json` - Build scripts configured
- ✅ `.gitignore` - Properly configured
- ✅ All images present in `/public`

## Notes

- Vercel automatically handles:
  - HTTPS certificates
  - CDN distribution
  - Automatic deployments on git push
  - Preview deployments for pull requests
  - Image optimization

- No environment variables are currently needed

- The project uses Next.js 14 with App Router, fully supported by Vercel
