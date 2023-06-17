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
	/** Exposing this separately from iconStyle as the icon's size needs to be provided via sx props. */
	iconSize?: string | number;
	/** Style for icon, does not allow icon size changes, use iconSize prop instead. */
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
