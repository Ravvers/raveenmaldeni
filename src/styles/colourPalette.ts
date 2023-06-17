export const colourPalette = {
	lightBlue: "#30BCED",
	gray: "#D9D9D9",
	black: "#000000",
	white: "#FFFAFF",
	darkGray: "#5E5E64",
	darkPurple: "#9E00FF",
	githubOnHover: "#f0f6fc",
	linkedInOnHover: "#0a66c2"
};

export const theme = {
	header: {
		text: colourPalette.white,
		background: colourPalette.lightBlue,
		linkOnHover: colourPalette.darkGray,
		linkOnCurrentPage: colourPalette.darkPurple
	},
	body: {
		background: colourPalette.lightBlue,
		text: colourPalette.white
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
		title: "2em"
	},
	footer: {
		socialIcon: "4em",
		linkText: "1.2em"
	}
};
