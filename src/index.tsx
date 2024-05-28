import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import OlMap from './components/olmap';
import TotalStat from "./components/total-stat";
import ValuationReport from "./components/valuation-report";
import StatisticsPage from "./components/statistics-page";
import Root from "./routes/root";
import ErrorPage from "./components/error-page";
/*import Contact from "./routes/contact";

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
]); */
/* 
export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: HelloProps): React.JSX.Element {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="greeting">
      <div className="greeting-text">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
} */

/* function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join("!");
} */

const router = createBrowserRouter([
	{
		path: "/",
		element: <OlMap />,
		//element: <Root />,
		errorElement: <ErrorPage />,	
	},
	{
		path: "statistics",
		element: <StatisticsPage />,
	},	
	{
		path: "total",
		element: <TotalStat />,
	},	
	{
		path: "report",
		element: <ValuationReport />,
	},  
]);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
