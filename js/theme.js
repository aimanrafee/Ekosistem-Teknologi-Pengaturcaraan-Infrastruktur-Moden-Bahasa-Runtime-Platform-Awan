// theme.js — self-contained theme controller. No external state, no storage APIs
// (kept purely in-memory + DOM attribute so it works identically as a static file
// or inside sandboxed preview environments).

const THEMES = ["day", "night", "sepia"];
const STORAGE_KEY = "stackref-theme";

function getStoredTheme() {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(v) ? v : null;
  } catch (e) {
    return null; // localStorage unavailable (privacy mode, sandbox, etc.)
  }
}

function storeTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {
    /* silently ignore — theme still applies for this session */
  }
}

export function initTheme() {
  const preferred =
    getStoredTheme() ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "night"
      : "day");

  applyTheme(preferred);

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme-btn");
      applyTheme(theme);
      storeTheme(theme);
    });
  });
}

export function applyTheme(theme) {
  if (!THEMES.includes(theme)) return;
  document.documentElement.setAttribute("data-theme", theme);

  document.querySelectorAll("[data-theme-btn]").forEach((btn) => {
    const isActive = btn.getAttribute("data-theme-btn") === theme;
    btn.setAttribute("aria-pressed", String(isActive));
  });
}
