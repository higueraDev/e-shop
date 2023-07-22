import { useState } from "react";

export default function useProductsContextProvider() {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	return {
		isDetailOpen,
		setIsDetailOpen,
		selectedProduct,
		setSelectedProduct,
		isLoading,
		setIsLoading,
	};
}
