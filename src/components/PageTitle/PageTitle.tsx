import React from "react";

export const PageTitle = (props: { children: JSX.Element | JSX.Element[] }) => {
	return <div className="title">{props.children}</div>;
};
