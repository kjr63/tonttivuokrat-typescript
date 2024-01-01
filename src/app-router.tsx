import * as React from 'react';
import {
	BrowserRouter, Routes, Route, Link, Outlet, useParams, NavLink,
	useSearchParams, useLocation, useNavigate
} from 'react-router-dom';
//import Hello from './hello';
import OlMap from './components/olmap';

const latestYear : number = new Date().getFullYear()-1;

function NothingHere (): React.JSX.Element {
	return (
		<main className="warning" >
			<div>There's nothing here!</div>
		</main>
	);
}

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
}

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join("!");
}

export interface AppProps {}

function AppRouter ( {}:AppProps ) : React.JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<OlMap year={latestYear.toString()}/>} />			
				<Route path="2022" element={<OlMap year="2022"/>} />
				<Route path="hello" element={<Hello name="Bill" enthusiasmLevel = {2} />} />
				<Route path="*" element={<NothingHere />} />
			</Routes>			
		</BrowserRouter>
	);
}

export default AppRouter;
