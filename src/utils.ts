import autoModeIcon from "./assets/icons/hybrid-fill.svg?raw";
import darkModeIcon from "./assets/icons/moon-fill.svg?raw";
import lightModeIcon from "./assets/icons/sun-fill.svg?raw";

export type Appearance = "auto" | "dark" | "light";
export type Preferences = {
  appearance: Appearance;
  theme: Theme;
};
export type Theme = "auto" | "autumn" | "spring" | "summer" | "winter";

export const appearanceAriaLabelMap = {
  auto: "Switch to system appearance",
  dark: "Switch to dark appearance",
  light: "Switch to light appearance",
};

export const appearanceContentMap = {
  auto: autoModeIcon,
  dark: darkModeIcon,
  light: lightModeIcon,
};

export const appearanceTitleMap = {
  auto: "System appearance",
  dark: "Dark appearance",
  light: "Light appearance",
};

export const prefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

export const appearanceOrder: Appearance[] = ["auto", "light", "dark"];

export const getCurrentSeason = (date = new Date()): Omit<Theme, "auto"> => {
  const firstDayOfSpring = new Date(date.getFullYear(), 2, 22);
  const firstDayOfSummer = new Date(date.getFullYear(), 6, 22);
  const firstDayOfFall = new Date(date.getFullYear(), 8, 22);
  const firstDayOfWinter = new Date(date.getFullYear(), 11, 22);

  if (date >= firstDayOfWinter) return "winter";
  if (date >= firstDayOfFall) return "autumn";
  if (date >= firstDayOfSummer) return "summer";
  if (date >= firstDayOfSpring) return "spring";
  return "winter";
};

export const getPreferences = (): Preferences => {
  const preferencesRawValue = window?.localStorage?.getItem("preferences");
  if (!preferencesRawValue) return { appearance: "auto", theme: "auto" };
  return JSON.parse(preferencesRawValue);
};

/**
 * Get rendered theme from selected theme
 * @param selectedTheme
 * @returns
 */
export const getRenderedTheme = (selectedTheme: Theme): Omit<Theme, "auto"> =>
  selectedTheme === "auto" ? getCurrentSeason() : selectedTheme;

export const setPreferences = (prefs: Partial<Preferences>) => {
  window.localStorage.setItem(
    "preferences",
    JSON.stringify({
      ...getPreferences(),
      ...prefs,
    }),
  );
};

export const initializeTheme = () => {
  const prefs = getPreferences();

  const appearanceToggle = document.getElementById("appearance-toggle");
  ("global-appearance-root");
  const appearanceStyleRoot = document.getElementById("global-appearance-root");
  const themeStyleRoot = document.getElementById("global-theme-root");
  const themeSelect = document.getElementById("theme-select");

  const appearance: Appearance = prefs.appearance;
  const theme = prefs.theme;
  const renderedTheme = getRenderedTheme(prefs.theme);

  if (appearanceStyleRoot)
    appearanceStyleRoot.setAttribute("href", `/appearances/${appearance}.css`);
  if (themeStyleRoot)
    themeStyleRoot.setAttribute("href", `/themes/${renderedTheme}.css`);
  if (appearanceToggle)
    appearanceToggle.innerHTML = appearanceContentMap[appearance];
  if (themeSelect) (themeSelect as HTMLSelectElement).value = theme;
};
