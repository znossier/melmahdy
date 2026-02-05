import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Redirect from Framer website to this website
  if (hostname.includes('moustafaelmahdy.framer.website')) {
    // Determine the target domain based on environment
    // In production, use the Vercel deployment URL or custom domain
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const targetHost = process.env.VERCEL_URL 
      ? `${protocol}://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_SITE_URL || 'https://melmahdy.vercel.app';
    
    // Preserve the path and query parameters
    const path = url.pathname;
    const search = url.search;
    const redirectUrl = `${targetHost}${path}${search}`;
    
    // Use 301 (permanent redirect) for SEO benefits
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
