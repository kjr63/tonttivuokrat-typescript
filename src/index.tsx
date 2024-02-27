import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,	
	},
	{
		path: "contacts/:contactId",
		element: <Contact />,
	},  
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
