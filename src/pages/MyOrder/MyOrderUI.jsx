import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import CartItem from "../../components/CartItem";

export default function MyOrderUI({ items }) {
	return (
		<section className="w-full max-w-md flex flex-col items-start">
			<Link to="/my-orders" className="flex-none mb-5">
				<h1 className="flex items-center">
					<Icon className="w-6 h-6 mr-1" name="left" /> My Orders
				</h1>
			</Link>
			<ul className="w-full flex-grow mb-[20px] overflow-y-auto">
				{items &&
					items.map((item, index) => (
						<CartItem data={item} key={index} />
					))}
			</ul>
		</section>
	);
}
