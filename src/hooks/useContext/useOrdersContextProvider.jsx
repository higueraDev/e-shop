import { useState } from "react";

export default function useOrdersContextProvider() {
	const [orders, setOrders] = useState([]);

	return {
		orders,
		setOrders,
	};
}
