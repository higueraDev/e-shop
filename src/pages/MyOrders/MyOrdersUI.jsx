import Order from "../../components/Order";

export default function MyOrdersUI({ orders }) {
	return (
		<section className="w-full max-w-md">
			<h1 className="mb-5">My Orders</h1>
			{orders.map((item, index) => (
				<Order data={item} key={index} />
			))}
		</section>
	);
}
