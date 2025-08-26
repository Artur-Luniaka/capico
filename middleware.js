import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(request) {
  // Проверяем, есть ли уже локаль в URL
  const pathname = request.nextUrl.pathname;

  // Если это корневой путь, редиректим на английский
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Проверяем, что путь начинается с поддерживаемой локали
  const pathnameHasLocale = /^\/(?:en|ru|pl)(?:\/|$)/.test(pathname);

  if (!pathnameHasLocale) {
    // Если нет локали, редиректим на английский
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}
