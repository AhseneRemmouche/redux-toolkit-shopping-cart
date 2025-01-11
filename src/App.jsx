import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<main className="max-x-7xl mx-auto min-h-screen">
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	);
}

export default App;
