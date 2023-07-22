import useAppContext from "../../hooks/useContext/useAppContext";
import Cart from "../Cart";
import ProductDetail from "../ProductDetail";

export default function Layout(props) {
	const { children } = props;
	const { isCartOpen, isDetailOpen } = useAppContext();
	return (
		<>
			<main className="flex flex-col items-center mt-[92px]">
				{children}
			</main>
			{isDetailOpen && <ProductDetail />}
			{isCartOpen && <Cart />}
		</>
	);
}
