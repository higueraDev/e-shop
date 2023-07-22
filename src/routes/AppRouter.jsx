import { createBrowserRouter } from "react-router-dom";

// Components
import App from "../App";
import Home from "../pages/Home";
import MyAccount from "../pages/MyAccount";
import MyOrders from "../pages/MyOrders";
import MyOrder from "../pages/MyOrder";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";

export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: ":category",
				element: <Home />,
			},
			{
				path: "my-account",
				element: <MyAccount />,
			},
			{
				path: "my-orders",
				element: <MyOrders />,
			},
			{
				path: "my-orders/:id",
				element: <MyOrder />,
			},
			{
				path: "not-fount",
				element: <NotFound />,
			},
			{
				path: "sign-in",
				element: <SignIn />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);
