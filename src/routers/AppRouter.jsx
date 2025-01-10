import { Route, Routes } from "react-router";
import App from "../App";
function AppRouter() {
	return (
		<Routes>
			<Route element={<App />}>
				<Route path="/" element={<h2>Home Page</h2>} />
				<Route path="/products" element={<h2>Products Page</h2>} />
				<Route path="/cart" element={<h2>Cart Page</h2>} />
			</Route>
		</Routes>
	);
}

export default AppRouter;
