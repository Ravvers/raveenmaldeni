import React from "react";
import { Directory } from "../Directory/Directory";
import { fontSizeEm, theme } from "../../styles/colourPalette";
import { css } from "glamor";

const linkStyles = css({
	color: theme.header.text,
	fontSize: fontSizeEm.header.navigationLink,
	":hover": {
		color: theme.header.linkOnHover,
		transition: "0.5s"
	}
});

export const Header = () => {
	return (
		<div id="header">
			<Directory className="header-directory" linkStyle={linkStyles} />
		</div>
	);
};
