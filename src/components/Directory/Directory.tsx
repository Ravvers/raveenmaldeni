import React from "react";
import { Link, NavLink } from "react-router-dom";
import { routeMap } from "../../navigation/router";
import { StyleAttribute, css } from "glamor";
import { theme } from "../../styles/colourPalette";

export type DirectoryProps = {
	linkStyle: StyleAttribute;
	isHeaderDirectory?: boolean;
};

export const Directory = (props: DirectoryProps) => {
	const LinkComponent = props.isHeaderDirectory ? NavLink : Link;
	return (
		<>
			{Object.entries(routeMap).map((route) => {
				return (
					<LinkComponent
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
		</>
	);
};
