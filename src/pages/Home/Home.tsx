import React from "react";
import { Projects } from "../../components/Project/Projects";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const Home = () => {
	return (
		<>
			<PageTitle>
				<h1>Raveen Maldeni</h1>
				<h1>I'm a developer</h1>
			</PageTitle>

			<Projects />
		</>
	);
};
