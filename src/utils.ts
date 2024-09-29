import autoModeIcon from "./assets/icons/hybrid-fill.svg?raw";
import darkModeIcon from "./assets/icons/moon-fill.svg?raw";
import lightModeIcon from "./assets/icons/sun-fill.svg?raw";

export type Appearance = "auto" | "dark" | "light";

export const autoModeContent = `${autoModeIcon}<span class="label">SYSTEM</span>`;
export const darkModeContent = `${darkModeIcon}<span class="label">DARK</span>`;
export const lightModeContent = `${lightModeIcon}<span class="label">LIGHT</span>`;

export const appearanceContentMap = {
	auto: autoModeContent,
	dark: darkModeContent,
	light: lightModeContent,
};

export const prefersDark = window.matchMedia(
	"(prefers-color-scheme: dark)"
).matches;

export const appearanceOrder: Appearance[] = prefersDark
	? ["auto", "light", "dark"]
	: ["auto", "dark", "light"];

export const getCurrentSeason = (date: Date) => {
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

export const getPreferences = () =>
	JSON.parse(window?.localStorage?.getItem("preferences") || "{}");

export const setPreferences = (prefs: Record<string, unknown>) => {
	window.localStorage.setItem(
		"preferences",
		JSON.stringify({
			...getPreferences(),
			...prefs,
		})
	);
};

export const initializeTheme = () => {
	const date = new Date();
	const currentSeason = getCurrentSeason(date);
	const prefs = getPreferences();

	const appearanceToggle = document.getElementById("appearance-toggle");
	const styleRoot = document.getElementById("global-theme-root");
	const themeSelect = document.getElementById("theme-select");

	const appearance: Appearance = prefs.appearance || "auto";
	const theme = prefs.theme || currentSeason;

	if (styleRoot)
		styleRoot.setAttribute("href", `/themes/${theme}-${appearance}.css`);
	if (appearanceToggle)
		appearanceToggle.innerHTML = appearanceContentMap[appearance];
	if (themeSelect) (themeSelect as HTMLSelectElement).value = theme;
};
