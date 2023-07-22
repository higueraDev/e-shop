import { Link } from "react-router-dom";
import Icon from "../Icon";
export default function Order(props) {
	const { data } = props;
	const { totalPrice, count, date, id } = data;
	const dateString = date.toLocaleDateString();
	return (
		<Link className="w-full" to={`/my-orders/${id}`}>
			<article className="w-full flex justify-between items-center mb-3 border border-black/30 rounded-md p-4">
				<div>
					<p className="flex items-center mb-2">
						<Icon className="icon-wrapper" name="calendar" />
						{dateString}
					</p>
					<p className="flex items-center">
						<span className="bg-green-500 rounded-full text-white w-6 h-6 flex justify-center items-center mr-2">
							{count}
						</span>
						<span>product{count > 1 ? "s" : ""}</span>
					</p>
				</div>
				<p className="text-xl flex items-center">
					<Icon className="w-7 h-7 text-green-500" name="money" />
					{totalPrice}
				</p>
				<Icon className="w-7 h-7" name="right" />
			</article>
		</Link>
	);
}
