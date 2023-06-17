import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routeMap } from "../../navigation/router";
import { StyleAttribute, css } from "glamor";
import { theme } from "../../styles/colourPalette";

type DirectoryProps = {
	linkStyle?: StyleAttribute;
	className?: string;
};

export const Directory = (props: DirectoryProps) => {
	const LinkComponent =
		props.className === "header-directory" ? NavLink : Link;
	return (
		<div
			className={props.className}
			role="navigation"
			aria-label={props.className}
		>
			{Object.entries(routeMap).map((route) => {
				return (
					<LinkComponent
						key={route[0]}
						{...{
							...props.linkStyle,
							...css({
								".active": {
									color: theme.header.linkOnCurrentPage
								}
							})
						}}
						to={route[1].path}
					>
						{route[1].navigationDisplayName}
					</LinkComponent>
				);
			})}
		</div>
	);
};
