import { Outlet } from "react-router";
import "./App.css";

function App() {
	return (
		<>
			<h1 className="text-3xl font-bold underline">Bismi Allah</h1>
			<nav>Nav Bar</nav>
			<main className="min-h-screen max-x-7xl mx-auto">
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	);
}

export default App;
