import Icon from "../Icon";

export default function CardUI(props) {
	const { data, onCardClick, onIncrementClick, isSelected } = props;
	const { category, image, title, price } = data;

	return (
		<article
			onClick={onCardClick}
			className="bg-white cursor-pointer w-56 h-60"
		>
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
					{category}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={image}
					alt={title}
				/>

				<Icon
					onClick={onIncrementClick}
					name="plus"
					className={`icon-wrapper cursor-pointer absolute top-0 right-0 flex text-sm justify-center items-center rounded-full m-2 p-1 ${
						isSelected() ? "bg-red-500 text-white" : "bg-white"
					}`}
				/>
			</figure>
			<p className="flex justify-between">
				<span className="text-sm font-light">{title}</span>
				<span className="text-sm font-medium">${price}</span>
			</p>
		</article>
	);
}
