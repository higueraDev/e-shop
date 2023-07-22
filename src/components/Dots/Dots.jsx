export default function Dots() {
	const totalDots = 3;
	const dots = Array(totalDots)
		.fill(null)
		.map((_, i) => (
			<span
				className="block w-5 h-5 bg-green-500 mx-[5px] my-0 rounded-[50%] animate-bounce"
				key={i}
				style={{ animationDelay: `${(i + 1) * 0.2}s` }}
			></span>
		));

	return (
		<div className="fixed flex justify-center items-center w-full p-5 right-0 bottom-1/2 transform translate-y-1/2">
			{dots}
		</div>
	);
}
