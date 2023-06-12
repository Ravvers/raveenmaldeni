import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/router";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
			<Footer />
		</div>
	);
}

export default App;
