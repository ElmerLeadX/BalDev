import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Gender from "./Gender.jsx";
import Quiz from "./Quiz.jsx";
import Formpage from "./Formpage.jsx";
import Result from "./Result.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/gender",
		element: <Gender />,
	},
	{
		path: "/quiz",
		element: <Quiz />,
	},
	{
		path: "/form",
		element: <Formpage />,
	},
	{
		path: "/results",
		element: <Result />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
