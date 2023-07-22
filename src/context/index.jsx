import { createContext } from "react";
import useCartContextProvider from "../hooks/useContext/useCartContextProvider";
import useProductsContextProvider from "../hooks/useContext/useProductsContextProvider";
import useOrdersContextProvider from "../hooks/useContext/useOrdersContextProvider";

export const Context = createContext();

export default function ContextProvider({ children }) {
	const cart = useCartContextProvider();

	const orders = useOrdersContextProvider();

	const products = useProductsContextProvider();

	const toggleDetail = (productId) => {
		const { setIsDetailOpen, setSelectedProduct, selectedProduct } =
			products;
		const { setIsCartOpen } = cart;

		if (productId !== selectedProduct.id) {
			setIsDetailOpen(true);
			setIsCartOpen(false);
		} else {
			setIsDetailOpen((isOpen) => {
				const newValue = !isOpen;
				if (newValue) setIsCartOpen(false);
				else setSelectedProduct({});
				return newValue;
			});
		}
	};

	const toggleCart = () => {
		const { setSelectedProduct, setIsDetailOpen } = products;
		const { setIsCartOpen } = cart;

		setIsCartOpen((isOpen) => {
			const newValue = !isOpen;
			if (newValue) {
				setIsDetailOpen(false);
				setSelectedProduct({});
			}

			return newValue;
		});
	};

	const data = {
		...cart,
		...products,
		...orders,
		toggleDetail,
		toggleCart,
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
}
