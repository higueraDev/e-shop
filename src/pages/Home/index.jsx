import { useParams } from "react-router-dom";
import useAppContext from "../../hooks/useContext/useAppContext";
import HomeUI from "./HomeUI";
import { useState } from "react";
import useFetch from "../../hooks/fetch/useFetch";

const productsURL = new URL("https://fakestoreapi.com/products");

export default function Home() {
	const { isDetailOpen, isCartOpen } = useAppContext();
	const { isLoading } = useAppContext();
	const { category } = useParams();
	const [searchValue, setSearchValue] = useState("");
	const { data, error } = useFetch(productsURL);

	const onSearch = (e) => {
		const value = e.target.value;
		setSearchValue(value);
	};

	const filteredData = () => {
		if (!category || category === "all") return data;

		return data.filter((item) => {
			const categoryString = item.category
				.toLowerCase()
				.replace(" ", "-")
				.replace("'", "_");

			return categoryString === category.toLowerCase();
		});
	};

	const searchData = () => {
		return filteredData().filter((item) =>
			item.title.toLowerCase().includes(searchValue.toLowerCase())
		);
	};

	return (
		<HomeUI
			data={searchValue ? searchData() : filteredData()}
			error={error}
			isCartOpen={isCartOpen}
			isDetailOpen={isDetailOpen}
			onSearch={onSearch}
			searchValue={searchValue}
			isLoading={isLoading}
		/>
	);
}
