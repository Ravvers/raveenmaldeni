import React from "react";

export const CopyrightNotice = () => {
	const currentYear = new Date().getFullYear();
	return (
		<p id="footer-copyright">
			© Raveen Maldeni {currentYear}. All rights reserved.
		</p>
	);
};
