import { defineMiddleware } from "astro:middleware";

// Set your password here or use environment variable
const SITE_PASSWORD = import.meta.env.SITE_PASSWORD || "alfatimah2024";

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, redirect } = context;
  const url = new URL(request.url);

  // Skip authentication for static assets
  if (
    url.pathname.startsWith("/_astro/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/public/") ||
    url.pathname.endsWith(".ico") ||
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".webp")
  ) {
    return next();
  }

  // Check if user is authenticated
  const authToken = cookies.get("auth-token")?.value;

  // If not authenticated and not on login page, redirect to login
  if (!authToken && url.pathname !== "/auth/login") {
    return redirect("/auth/login");
  }

  // If authenticated, verify the token
  if (authToken && authToken !== SITE_PASSWORD) {
    // Invalid token, clear cookie and redirect to login
    cookies.delete("auth-token");
    return redirect("/auth/login");
  }

  // If on login page and already authenticated, redirect to home
  if (authToken && url.pathname === "/auth/login") {
    return redirect("/");
  }

  return next();
});
