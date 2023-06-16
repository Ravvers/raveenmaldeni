import React from "react";
import { Directory } from "../Directory/Directory";
import { fontSizeEm, theme } from "../../styles/colourPalette";
import { css } from "glamor";

const styles = css({
	color: theme.header.text,
	fontSize: `${fontSizeEm.header.navigationLink}em`,
	":hover": {
		color: theme.header.linkOnHover
	}
});

export const Header = () => {
	return (
		<div id="header">
			<Directory isHeaderDirectory linkStyle={styles} />
		</div>
	);
};
