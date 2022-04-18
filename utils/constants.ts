export const personalInfo = {
	NAME: "Luke Miller",
	DEGREE: "Computer Science",
	SCHOOL: "University of Arkansas",
};
export const navTitles = {
	HOME: personalInfo.NAME,
	PROJECTS: "Projects",
	GITHUB: "GitHub",
	ME: "Me",
};
export const pageTitles = {
	HOME: "WELCOME",
	CONTACT: "CONTACT ME",
	PROJECTS: "PROJECTS",
	GITHUB: "GITHUB",
	ME: "ABOUT ME",
};
export const externalLinks = {
	GITHUB: "https://github.com/lukelmiller/",
	LINKEDIN: "https://www.linkedin.com/in/lukelmiller/",
	TWITTER: "https://twitter.com/luckdiller",
	INSTAGRAM: "https://www.instagram.com/lukelmillr/",
};
export const contacts = {
	INSTAGRAM: "@lukelmillr",
	TWITTER: "@luckdiller",
	LINKEDIN: "@lukelmiller",
};
export const routes = {
	HOME: "/",
	PROJECTS: "/projects/",
	CONTACT: "/contact-me/",
	GITHUB: externalLinks.GITHUB,
	ME: "/me/",
};
export const welcomePage = {
	WELCOME_CARD: {
		TITLE: pageTitles.HOME,
		BODY: "Hello, I'm Luke. I studied computer science, and I'm working as a front end design engineer at Visa. I created this site to display my skills and show off some cool projects I'm currently working on. :)",
		ROUTE: routes.HOME,
	},
	PROJECT_CARD: {
		TITLE: pageTitles.PROJECTS,
		BODY: "Hello, I'm Luke. I studied computer science, and Im working as a front end design engineer at Visa. I created this site to display my skills and show off some cool projects I'm currently working on. :)",
		ROUTE: routes.PROJECTS,
	},
	GITHUB_CARD: {
		TITLE: pageTitles.GITHUB,
		BODY: "Hello, I'm Luke. I studied computer science, and Im working as a front end design engineer at Visa. I created this site to display my skills and show off some cool projects I'm currently working on. :)",
		ROUTE: routes.GITHUB,
	},
	PROFILE_CARD: {
		TITLE: pageTitles.ME,
		BODY: "Hello, I'm Luke. I studied computer science, and Im working as a front end design engineer at Visa. I created this site to display my skills and show off some cool projects I'm currently working on. :)",
		ROUTE: routes.ME,
	},
	CONTACT_CARD: {
		TITLE: pageTitles.CONTACT,
		BODY: "Hello, I'm Luke. I studied computer science, and Im working as a front end design engineer at Visa. I created this site to display my skills and show off some cool projects I'm currently working on. :)",
		ROUTE: routes.CONTACT,
	},
};
