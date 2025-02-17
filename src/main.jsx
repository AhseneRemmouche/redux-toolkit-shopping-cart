import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AppRouter from "./routers/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<AppRouter />
		{/* <Routes>
			<Route element={<App />}>
				<Route path="/products" element={<h2>Products Page</h2>} />
				<Route path="/cart" element={<h2>Cart Page</h2>} />
			</Route>
		</Routes> */}
	</BrowserRouter>
);
