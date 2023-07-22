import Icon from "../Icon";
export default function CartItem(props) {
	const { data, onDelete } = props;
	const { title, image, price, quantity } = data;
	return (
		<article className="flex mb-4 w-full border border-black/30 p-3 rounded-md">
			<div className="relative flex-none mr-5">
				<span className="absolute -left-1 -top-1 bg-red-500 w-6 h-6 flex justify-center items-center rounded-full text-white text-sm">
					{quantity}
				</span>
				<figure className="w-20 h-20">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover rounded-lg"
					/>
				</figure>
			</div>
			<div className="flex-grow max-w-[calc(100%-100px)]">
				<p className="text-lg font-light whitespace-nowrap text-ellipsis overflow-hidden">
					{title}
				</p>
				<div className="w-full flex justify-between items-center">
					<p className="text-lg font-medium">${price}</p>
					{onDelete && (
						<Icon
							onClick={onDelete}
							className="block w-5 h-5 cursor-pointer text-red-500"
							name="trash"
						/>
					)}
				</div>
			</div>
		</article>
	);
}
