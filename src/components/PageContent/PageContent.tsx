import React from "react";
import { theme } from "../../styles/colourPalette";

export const PageContent = (props: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<div style={{ color: theme.body.text }} className="page-content">
			{props.children}
		</div>
	);
};
