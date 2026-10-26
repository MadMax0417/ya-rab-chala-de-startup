export const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL).replace(/\/$/, "");
}
