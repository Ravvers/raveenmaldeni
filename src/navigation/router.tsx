import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Header } from "../components/Header/Header";

const homeRoute: RouteObject = { index: true, element: <Home /> };

export const router = createBrowserRouter([
	{ path: "/", element: <Header />, children: [homeRoute] }
]);
