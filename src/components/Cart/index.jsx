import Icon from "../Icon";
import CartItem from "../CartItem";
import { CreateOrder } from "../../utils/createOrder";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useContext/useAppContext";

export default function Cart() {
	const navigate = useNavigate();
	const {
		cartItems,
		setCartItems,
		setIsCartOpen,
		decrementCount,
		totalPrice,
		setOrders,
		count,
		setCount,
	} = useAppContext();

	const closeCart = () => {
		setIsCartOpen(false);
	};

	const onOrderDelete = (indexToDelete) => {
		const quantityToDelete = cartItems[indexToDelete].quantity;
		decrementCount(quantityToDelete);
		const removeOrder = (items) =>
			items.filter((_, i) => i !== indexToDelete);
		setCartItems(removeOrder);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const clearCount = () => {
		setCount(0);
	};

	const goToOrder = (id) => {
		navigate(`/my-orders/${id}`);
	};

	const handleCheckout = () => {
		const newOrder = new CreateOrder(cartItems, count, totalPrice);
		const addOrder = (items) => [...items, newOrder];
		setOrders(addOrder);
		clearCart();
		closeCart();
		clearCount();
		goToOrder(newOrder.id);
	};

	return (
		<aside className="w-[360px] h-[calc(100vh-92px-20px)] flex flex-col fixed right-0 bottom-5 bg-white border border-black rounded-lg">
			<div className="flex-none flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<Icon
					onClick={closeCart}
					className="icon-wrapper cursor-pointer"
					name="close"
				/>
			</div>
			<ul className="flex-grow px-6 pt-1 mb-[20px] overflow-y-auto">
				{cartItems.map((item, index) => (
					<CartItem
						data={item}
						onDelete={() => onOrderDelete(index)}
						key={index}
					/>
				))}
			</ul>
			<div className="flex-none p-6">
				<p className="flex justify-between items-end mb-2">
					<span className="font-light mr-5">Total: </span>
					<span className="font-medium text-2xl">${totalPrice}</span>
				</p>

				<button
					className={`${count > 0  ? 'bg-black' : 'bg-black/30 pointer-events-none'} text-white py-3 w-full rounded-md`}
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
		</aside>
	);
}
