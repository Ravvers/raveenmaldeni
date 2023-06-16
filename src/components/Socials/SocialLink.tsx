import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import { Link } from "react-router-dom";

type SocialIcon = OverridableComponent<
	SvgIconTypeMap<Record<string, any>, "svg">
> & {
	muiName: string;
};

export const SocialLink = (props: { SocialIcon: SocialIcon; link: string }) => {
	return (
		<Link to={props.link} rel="noopener noreferrer" target="_blank">
			<props.SocialIcon />
		</Link>
	);
};
