import React from "react";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
	test("header and footer renders", () => {
		render(<RouterProvider router={router}></RouterProvider>);
		const headerNavigation = screen.getByRole("navigation", {
			name: "header-directory"
		});

		const footerNavigation = screen.getByRole("navigation", {
			name: "footer-directory"
		});

		expect(headerNavigation).toBeVisible();
		expect(footerNavigation).toBeVisible();
	});
});
