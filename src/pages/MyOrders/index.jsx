import useAppContext from "../../hooks/useContext/useAppContext";
import MyOrdersUI from "./MyOrdersUI";

export default function MyOrders() {
	const { orders } = useAppContext();
	return <MyOrdersUI orders={orders} />;
}
