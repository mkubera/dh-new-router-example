import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hello from "./Hello";
import "./main.css";

// prepare your Router
const router = createBrowserRouter([
	// define all Routes here
	{
		path: "/",
		element: <Hello name="Mist" />,
	},
	// every Route is an object:
	// path: String
	// element: JSX Component
]);

// use your Router
createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
