import React from "react";
import { theme } from "../../styles/colourPalette";
import { Projects } from "../../components/Project/Projects";
import { css } from "glamor";

export const Home = () => {
	return (
		<>
			<div
				className="title"
				{...css({
					color: theme.body.text
				})}
			>
				<h1>Raveen Maldeni</h1>
				<h1>I'm a developer</h1>
			</div>
			<Projects />
		</>
	);
};
