export const colourPalette = {
	lightBlue: "#30BCED",
	gray: "#D9D9D9",
	black: "#000000",
	white: "#FFFAFF",
	darkGray: "#5E5E64",
	darkPurple: "#9E00FF"
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
		background: colourPalette.gray
	}
};

export const fontSizeEm = {
	header: {
		navigationLink: 1.5
	}
};
