import { useEffect, useState } from "react";
import { calcTotal } from "../../utils/calcTotal";

export default function useCartContextProvider() {
	const [count, setCount] = useState(0);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const incrementCount = (quantity = 1) => {
		setCount((count) => count + quantity);
	};

	const decrementCount = (quantity = 1) => {
		setCount((count) => count - quantity);
	};


	useEffect(() => {
		const totalPrice = calcTotal(cartItems);
		setTotalPrice(totalPrice);
	}, [cartItems]);

	return {
		count,
		setCount,
		incrementCount,
		decrementCount,
		isCartOpen,
		setIsCartOpen,
		cartItems,
		setCartItems,
		totalPrice,
	};
}
