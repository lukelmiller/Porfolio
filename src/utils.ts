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
