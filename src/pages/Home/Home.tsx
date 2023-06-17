import React from "react";
import { fontSizeEm, theme } from "../../styles/colourPalette";

export const Home = () => {
	return (
		<div>
			<div
				id="home-title"
				style={{
					color: theme.body.text,
					fontSize: fontSizeEm.body.title
				}}
			>
				<h1>Raveen Maldeni</h1>
				<h1>I'm a developer</h1>
			</div>
		</div>
	);
};
