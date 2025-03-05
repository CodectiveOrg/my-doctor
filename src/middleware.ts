import { NextRequest } from "next/server";

import { isSignedIn } from "@/utils/api.utils";

const onlySignedInRoutes = ["/dashboard"];
const onlyNotSignedInRoutes = ["/auth/sign-up", "/auth/sign-in"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isOnlySignedInRoutes = onlySignedInRoutes.includes(path);
  const isOnlyNotSignedInRoutes = onlyNotSignedInRoutes.includes(path);

  if (await isSignedIn(request)) {
    if (isOnlyNotSignedInRoutes && !path.startsWith("/dashboard")) {
      return Response.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (isOnlySignedInRoutes && !path.startsWith("/auth/sign-in")) {
      return Response.redirect(new URL("/auth/sign-in", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
