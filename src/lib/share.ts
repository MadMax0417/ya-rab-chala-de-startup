import { buildSurvivalShareText, type SurvivalReport } from "@/lib/survival";

export type ShareOutcome = "shared" | "copied" | "cancelled" | "manual";

export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path. Clipboard permissions are inconsistent.
    }
  }

  if (typeof document === "undefined") return false;

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}

function getShareUrl() {
  const url = new URL(window.location.href);
  url.hash = "survival";
  url.search = "";
  return url.toString();
}

export async function shareSurvivalReport(report: SurvivalReport): Promise<{
  outcome: ShareOutcome;
  shareText: string;
}> {
  const shareText = buildSurvivalShareText(report, getShareUrl());

  if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
    try {
      await navigator.share({
        title: "My Startup Survival Score",
        text: shareText,
      });
      return { outcome: "shared", shareText };
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return { outcome: "cancelled", shareText };
      }
    }
  }

  const copied = await copyTextToClipboard(shareText);
  return { outcome: copied ? "copied" : "manual", shareText };
}
