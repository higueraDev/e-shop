import { NavLink } from "react-router-dom";
import Icon from "../Icon";
import useAppContext from "../../hooks/useContext/useAppContext";
import useFetch from "../../hooks/fetch/useFetch";

const categoriesURL = new URL("https://fakestoreapi.com/products/categories");

export default function Navbar() {
	const { data: categories } = useFetch(categoriesURL);
	const { count, toggleCart } = useAppContext();

	const activeStyle = ({ isActive }) =>
		isActive ? "underline underline-offset-4" : "";

	const onCartClick = () => {
		toggleCart();
	};

	return (
		<nav className="w-full flex justify-between items-center fixed top-0 z-10 px-5 py-8 text-sm font-light bg-white">
			<ul className="flex gap-3 items-center">
				<li className="font-semibold text-lg">
					<NavLink className={activeStyle} to={"/"}>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyle} to={"/all"}>
						All
					</NavLink>
				</li>
				{categories.map((item, index) => {
					const categoryString = item
						.replace(" ", "-")
						.replace("'", "_");

					return (
						<li className="capitalize" key={index}>
							<NavLink
								className={activeStyle}
								to={`/${categoryString}`}
							>
								{item}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<ul className="flex gap-3 items-center">
				<li className="text-black/60">contact@higueradev.com</li>
				<li>
					<NavLink className={activeStyle} to={"/my-orders"}>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyle} to={"/my-account"}>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink className={activeStyle} to={"/sign-in"}>
						SignIn
					</NavLink>
				</li>
				<li className="flex items-center">
					<Icon
						onClick={onCartClick}
						className="icon-wrapper cursor-pointer"
						name="cart"
					/>
					<span>{count}</span>
				</li>
			</ul>
		</nav>
	);
}
