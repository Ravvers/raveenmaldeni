import React from "react";
import { theme } from "../../styles/colourPalette";
import { Directory } from "../Directory/Directory";
import { CopyrightNotice } from "../CopyrightNotice/CopyrightNotice";
import { Socials } from "../Socials/Socials";

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
			<Directory linkStyle={{}} />
			<CopyrightNotice />
		</div>
	);
};
