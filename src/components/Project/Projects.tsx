import React from "react";
import { projectData } from "./projectData";
import { ProjectComponent } from "./ProjectComponent";
import { theme } from "../../styles/colourPalette";
import { css } from "glamor";

export const Projects = () => {
	return (
		<div
			id="projects"
			{...css({
				color: theme.body.text
			})}
		>
			{projectData.map((project) => {
				return (
					<ProjectComponent key={project.name} project={project} />
				);
			})}
		</div>
	);
};
