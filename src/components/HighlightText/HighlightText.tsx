import React from "react";
import { theme } from "../../styles/colourPalette";

export const HighlightText = (props: { children: string }) => {
	return (
		<span style={{ color: theme.body.highlight }}>{props.children}</span>
	);
};
