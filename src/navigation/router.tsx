import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import App from "../App";
import { Blog } from "../pages/Blog/Blog";

export const routeMap = {
	home: { navigationDisplayName: "Home", path: "/" },
	about: { navigationDisplayName: "About", path: "/about" },
	blog: { navigationDisplayName: "Blog", path: "/blog" }
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
const blogRoute: RouteObject = {
	path: routeMap.blog.path,
	element: <Blog />
};

export const router = createBrowserRouter([
	{
		path: routeMap.home.path,
		element: <App />,
		children: [homeRoute, aboutRoute, blogRoute]
	}
]);
