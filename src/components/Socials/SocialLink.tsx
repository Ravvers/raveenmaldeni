import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { StyleAttribute } from "glamor";
import React from "react";
import { Link } from "react-router-dom";

type SocialIcon = OverridableComponent<
	SvgIconTypeMap<Record<string, any>, "svg">
> & {
	muiName: string;
};

type SocialLinkProps = {
	SocialIcon: SocialIcon;
	link: string;
	iconSize?: string | number;
	iconStyle?: StyleAttribute;
};

export const SocialLink = (props: SocialLinkProps) => {
	return (
		<Link to={props.link} rel="noopener noreferrer" target="_blank">
			<props.SocialIcon
				sx={{
					fontSize: props.iconSize
				}}
				{...props.iconStyle}
			/>
		</Link>
	);
};
