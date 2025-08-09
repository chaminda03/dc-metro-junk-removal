import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle www to non-www redirect
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')
  
  // If request comes from www subdomain, redirect to non-www
  if (hostname?.startsWith('www.')) {
    url.host = hostname.replace('www.', '')
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
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
}