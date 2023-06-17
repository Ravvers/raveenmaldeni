import React from "react";
import { fontSizeEm, theme } from "../../styles/colourPalette";
import { Directory } from "../Directory/Directory";
import { CopyrightNotice } from "../CopyrightNotice/CopyrightNotice";
import { Socials } from "../Socials/Socials";
import { css } from "glamor";

const linkStyles = css({
	color: theme.footer.text,
	fontSize: fontSizeEm.footer.linkText
});

export const Footer = () => {
	return (
		<div
			id="footer"
			style={{
				backgroundColor: theme.footer.background,
				color: theme.footer.text
			}}
		>
			<Socials />
			<Directory className="footer-directory" linkStyle={linkStyles} />
			<CopyrightNotice />
		</div>
	);
};
