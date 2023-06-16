import React from "react";
import { SocialLink } from "./SocialLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { externalLinks } from "../../navigation/router";

export const Socials = () => {
	return (
		<div>
			<SocialLink SocialIcon={GitHubIcon} link={externalLinks.github} />
			<SocialLink
				SocialIcon={LinkedInIcon}
				link={externalLinks.linkedIn}
			/>
		</div>
	);
};
