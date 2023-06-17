import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { theme } from "./styles/colourPalette";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<div
			style={{
				background: theme.body.background,
				minHeight: "100vh"
			}}
		>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
