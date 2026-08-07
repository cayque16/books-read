import { ref } from "vue";

const STORAGE_KEY = "theme-preference";
const DARK_COLOR_DARK = "#1b1926";
const DARK_COLOR_LIGHT = "#f5f5f5";

const isDark = ref(false);

function applyTheme(isDarkMode: boolean) {
  isDark.value = isDarkMode;
  const html = document.documentElement;
  if (isDarkMode) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      "content",
      isDarkMode ? DARK_COLOR_DARK : DARK_COLOR_LIGHT,
    );
  }
}

function init() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") {
    applyTheme(true);
  } else if (saved === "light") {
    applyTheme(false);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    applyTheme(prefersDark);
  }
}

function toggle() {
  const next = !isDark.value;
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
}

export function useDarkMode() {
  return {
    isDark,
    init,
    toggle,
  };
}
