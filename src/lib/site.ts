export const FALLBACK_SITE_URL = "http://localhost:3000";

const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1", "[::1]"]);

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

/**
 * Normalizes an env-provided URL into an absolute, protocol-qualified origin
 * (plus optional base path). Returns null for empty or unusable values so the
 * caller can fall through to the next source instead of crashing `metadataBase`.
 * Host names without a protocol (as Vercel exposes them) are assumed to be HTTPS.
 */
function toSiteUrl(value: string | undefined) {
  const candidate = value?.trim();
  if (!candidate) return null;

  const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`;

  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return stripTrailingSlash(url.toString());
  } catch {
    return null;
  }
}

function isLocalUrl(value: string) {
  try {
    return LOCAL_HOSTNAMES.has(new URL(value).hostname);
  } catch {
    return false;
  }
}

/**
 * Resolves the canonical origin used by metadata, `robots.txt`, and the sitemap.
 *
 * Metadata is baked in at build time, so a localhost value left in a hosting
 * provider's environment would be shipped verbatim as the Open Graph image URL.
 * In production builds we therefore ignore localhost and prefer the deployment's
 * public domain instead.
 */
export function getSiteUrl() {
  const explicit = toSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

  if (explicit && !(process.env.NODE_ENV === "production" && isLocalUrl(explicit))) {
    return explicit;
  }

  const vercelProduction = toSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  if (vercelProduction) return vercelProduction;

  const vercelDeployment = toSiteUrl(process.env.VERCEL_URL);
  if (vercelDeployment) return vercelDeployment;

  return FALLBACK_SITE_URL;
}
