import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
	beforeEach(() => {
		render(<RouterProvider router={router}></RouterProvider>);
	});
	test("header renders", () => {
		const headerNavigation = screen.getByRole("navigation", {
			name: "header-directory"
		});
		expect(headerNavigation).toBeVisible();
	});
	test("footer renders", () => {
		const footerNavigation = screen.getByRole("navigation", {
			name: "footer-directory"
		});
		expect(footerNavigation).toBeVisible();
	});
});
