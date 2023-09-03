import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { theme } from "./styles/colourPalette";
import { Header } from "./components/Header/Header";
import { PageContent } from "./components/PageContent/PageContent";

function App() {
	return (
		<div
			style={{
				background: theme.body.background,
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Header />
			<PageContent>
				<Outlet />
			</PageContent>
			{/* Separation between PageContent and the Footer */}
			<div style={{ paddingBottom: "4em" }} />
			<Footer />
		</div>
	);
}

export default App;
