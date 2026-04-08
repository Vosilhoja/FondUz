import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Exclude public files, API, and internal Next.js paths
  if (
    pathname.startsWith("/api") ||
    pathname.includes("_next") ||
    pathname.includes(".") // Matches static files like favicon.ico, images, etc.
  ) {
    return;
  }

  // 2. Protect admin routes
  // Checks if the path includes /admin (handles both /admin and /[locale]/admin)
  if (pathname.includes("/admin")) {
    const session = request.cookies.get("session")?.value;
    if (!session) {
      const locale = pathname.split("/")[1] || routing.defaultLocale;
      const loginUrl = new URL(`/${locale}/login`, request.url);
      return Response.redirect(loginUrl);
    }
  }

  // 3. Handle internationalization
  return intlMiddleware(request);
}

export const config = {
  // Use a matcher that covers all potential entry points
  matcher: ["/", "/(ru|uz)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
