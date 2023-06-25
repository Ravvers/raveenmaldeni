import React from "react";

export const PageContent = (props: { children: JSX.Element }) => {
	return <div className="page-content">{props.children}</div>;
};
