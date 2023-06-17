import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import App from "../App";

export const routeMap = {
	home: { navigationDisplayName: "Home", path: "/" },
	about: { navigationDisplayName: "About", path: "/about" }
};

export const externalLinks = {
	github: "https://github.com/ravvers",
	linkedIn: "https://www.linkedin.com/in/raveen-maldeni/"
};

const homeRoute: RouteObject = { index: true, element: <Home /> };
const aboutRoute: RouteObject = {
	path: routeMap.about.path,
	element: <About />
};

export const router = createBrowserRouter([
	{
		path: routeMap.home.path,
		element: <App />,
		children: [homeRoute, aboutRoute]
	}
]);
