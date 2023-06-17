import React from "react";

export const CopyrightNotice = () => {
	const currentYear = new Date().getFullYear();
	return <p>© Raveen Maldeni {currentYear}. All rights reserved.</p>;
};
