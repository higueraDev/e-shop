import useAppContext from "../../hooks/useContext/useAppContext";
import { mergeRepeatedItems } from "../../utils/mergeRepeatedItems";
import CardUI from "./CardUI";

export default function Card(props) {
	const { data } = props;
	const { id } = data;
	const {
		incrementCount,
		toggleDetail,
		setSelectedProduct,
		setCartItems,
		cartItems,
		setIsCartOpen,
		setIsDetailOpen,
	} = useAppContext();

	const onIncrementClick = (e) => {
		e.stopPropagation();
		const items = mergeRepeatedItems(cartItems, data);
		setCartItems(items);
		incrementCount();
		setIsCartOpen(true);
		setIsDetailOpen(false);
	};

	const onCardClick = () => {
		toggleDetail(id);
		setSelectedProduct(data);
	};

	const isSelected = () => {
		return cartItems.filter((item) => item.id === id).length > 0;
	};

	return (
		<CardUI
			data={data}
			onCardClick={onCardClick}
			onIncrementClick={onIncrementClick}
			isSelected={isSelected}
		></CardUI>
	);
}
