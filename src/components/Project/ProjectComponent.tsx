import React from "react";
import { Project } from "../../models/Project";
import { fontSizeEm, theme } from "../../styles/colourPalette";
import { Tooltip } from "@mui/material";
import { SocialLink } from "../Socials/SocialLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import { css } from "glamor";

const getIconStyles = () => {
	return css({
		color: theme.body.project.social,
		":hover": {
			color: theme.body.project.socialOnHover,
			backgroundColor: theme.body.project.social,
			borderRadius: "20px",
			transition: "0.5s"
		}
	});
};

export const ProjectComponent = (props: { project: Project }) => {
	return (
		<div
			className="project-tile"
			{...css({
				[`:hover > #${props.project.name}-info`]: {
					display: "block"
				},
				[`:hover > #${props.project.name}-image`]: {
					filter: "brightness(15%)"
				}
			})}
		>
			<img
				className="project-tile-image"
				id={`${props.project.name}-image`}
				src={props.project.tileImageSrc}
				alt={props.project.name}
				{...css({ backgroundColor: props.project.tileBackgroundColor })}
			/>
			<div
				id={`${props.project.name}-info`}
				{...css({
					display: "none",
					position: "absolute",
					width: "300px",
					zIndex: 1
				})}
			>
				<h1 title={`${props.project.displayName}`}>
					{props.project.displayName}
				</h1>
				<p>{props.project.description}</p>
				<Tooltip
					title={props.project.status.description}
					enterTouchDelay={0}
					leaveTouchDelay={2500}
				>
					<p>{props.project.status.phase}</p>
				</Tooltip>
				{props.project.githubLink && (
					<SocialLink
						SocialIcon={GitHubIcon}
						link={props.project.githubLink}
						iconStyle={getIconStyles()}
						iconSize={fontSizeEm.footer.socialIcon}
					/>
				)}
			</div>
		</div>
	);
};
