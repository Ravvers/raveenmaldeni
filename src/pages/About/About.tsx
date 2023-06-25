import React from "react";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { HighlightText } from "../../components/HighlightText/HighlightText";

export const About = () => {
	return (
		<>
			<PageTitle>
				<h1>Hi, I'm Raveen</h1>
				<h1>
					I like <HighlightText>software</HighlightText> and{" "}
					<HighlightText>milkshakes.</HighlightText>
				</h1>
			</PageTitle>
		</>
	);
};
