import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hello from "./Hello";
import Root from "./Root";
import "./main.css";

// prepare your Router
const router = createBrowserRouter([
	// define all Routes here
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "hello", element: <Hello name="Mist" /> },
			{ path: "hello2", element: <Hello name="Yerzhan" /> },
		],
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
