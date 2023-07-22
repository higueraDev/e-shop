import { useParams } from "react-router-dom";
import useAppContext from "../../hooks/useContext/useAppContext";
import MyOrderUI from "./MyOrderUI";

export default function MyOrder() {
	const { orders } = useAppContext();
	const { id } = useParams();
	const order = orders.find((item) => id === item.id);
	const { items } = order || {};

	return <MyOrderUI items={items} />;
}
