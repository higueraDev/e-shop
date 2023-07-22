import Dots from "../../components/Dots/Dots";
import Products from "../../components/Products";

export default function HomeUI({
	data,
	error,
	onSearch,
	searchValue,
	isLoading,
}) {
	return (
		<>
			<div className="w-full max-w-screen-lg flex items-center justify-between mb-5">
				<h1 className="flex-none font-medium text-xl mr-2">
					Exclusive Products
				</h1>
				<input
					value={searchValue}
					onChange={onSearch}
					className="flex-grow max-w-sm rounded-md border border-black/30 px-3 py-1 hover:max-w-md focus:max-w-md transition-width duration-300"
					type="text"
					placeholder="Search"
				/>
			</div>

			{isLoading ? (
				<Dots />
			) : data.length ? (
				<Products data={data} error={error} />
			) : error ? (
				<p className="error-message">{error.message}</p>
			) : (
				<p>No items found</p>
			)}
		</>
	);
}
