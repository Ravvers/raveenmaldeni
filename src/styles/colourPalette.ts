export const colourPalette = {
	brightBlue: "#30BCED",
	gray: "#D9D9D9",
	black: "#000000",
	white: "#FFFAFF",
	darkGray: "#5E5E64",
	darkPurple: "#9E00FF",
	githubOnHover: "#f0f6fc",
	linkedInOnHover: "#0a66c2",
	lightRed: "#FA5F5F",
	lightGreen: "#B2FF89",
	lightYellow: "#FFFF89",
	lightBlue: "#8AE6FF",
	lightPurple: "#D28AFF"
};

export const theme = {
	header: {
		text: colourPalette.white,
		background: colourPalette.brightBlue,
		linkOnHover: colourPalette.darkGray,
		linkOnCurrentPage: colourPalette.darkPurple
	},
	body: {
		background: colourPalette.brightBlue,
		text: colourPalette.white,
		project: {
			social: colourPalette.white,
			socialOnHover: colourPalette.black,
			status: {
				inactive: colourPalette.lightRed,
				active: colourPalette.lightGreen,
				planning: colourPalette.lightPurple,
				inDesign: colourPalette.lightBlue,
				inDevelopment: colourPalette.lightYellow
			}
		}
	},
	footer: {
		text: colourPalette.black,
		background: colourPalette.gray,
		icon: {
			color: colourPalette.black,
			onHover: {
				github: {
					color: colourPalette.githubOnHover,
					background: colourPalette.black
				},
				linkedIn: {
					color: colourPalette.linkedInOnHover,
					background: colourPalette.white
				}
			}
		}
	}
};

export const fontSizeEm = {
	header: {
		navigationLink: "1.5em"
	},
	body: {
		projects: {
			socialIcon: "3em"
		}
	},
	footer: {
		socialIcon: "4em",
		linkText: "1.2em"
	}
};
