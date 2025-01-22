import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Create auth object
  const { userId } = await getAuth(request);

  // Define your public routes
  const publicRoutes = ["/", "/shop", "/product/(.*)", "/sign-in", "/sign-up"];
  const isPublicRoute = publicRoutes.some(route => 
    new RegExp(`^${route}$`).test(request.nextUrl.pathname)
  );

  // Allow access to public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect to sign-in if no user and trying to access protected route
  if (!userId) {
    const signInUrl = new URL('/sign-in', request.url);
    signInUrl.searchParams.set('redirect_url', request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};