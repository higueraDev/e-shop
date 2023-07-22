import useAppContext from "../../hooks/useContext/useAppContext";
import Icon from "../Icon";

export default function ProductDetail() {
	const { setIsDetailOpen, selectedProduct } = useAppContext();
	const { title, image, price, description } = selectedProduct;

	const closeDetail = () => {
		setIsDetailOpen(false);
	};

	return (
		<aside className="w-[360px] h-[calc(100vh-92px-20px)] flex flex-col fixed right-0 bottom-5 bg-white border border-black rounded-lg">
			<div className="flex-none flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Detail</h2>
				<Icon
					onClick={closeDetail}
					className="icon-wrapper cursor-pointer"
					name="close"
				/>
			</div>
			<div className="flex-grow overflow-y-auto">
				<figure className="px-6">
					<img src={image} alt={title} />
				</figure>
				<p className="flex flex-col p-6">
					<span className="font-medium text-2xl mb-2">${price}</span>
					<span className="font-medium text-lg">{title}</span>
					<span className="font-light text-sm">{description}</span>
				</p>
			</div>
		</aside>
	);
}
