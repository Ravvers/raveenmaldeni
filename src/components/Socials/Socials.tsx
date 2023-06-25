import React from "react";
import { SocialLink } from "./SocialLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { externalLinks } from "../../navigation/router";
import { css } from "glamor";
import { fontSizeEm, theme } from "../../styles/colourPalette";

const getIconStyles = (onHoverColour: {
	color: string;
	background: string;
}) => {
	return css({
		color: theme.footer.icon.color,
		":hover": {
			color: onHoverColour.color,
			backgroundColor: onHoverColour.background,
			borderRadius: "20px",
			transition: "0.5s"
		}
	});
};

export const Socials = () => {
	return (
		<div className="socials">
			<SocialLink
				SocialIcon={GitHubIcon}
				link={externalLinks.github}
				iconStyle={getIconStyles(theme.footer.icon.onHover.github)}
				iconSize={fontSizeEm.footer.socialIcon}
			/>
			<SocialLink
				SocialIcon={LinkedInIcon}
				link={externalLinks.linkedIn}
				iconStyle={getIconStyles(theme.footer.icon.onHover.linkedIn)}
				iconSize={fontSizeEm.footer.socialIcon}
			/>
		</div>
	);
};
