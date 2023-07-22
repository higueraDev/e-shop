import Card from "../Card";

export default function Products({ data }) {
	return (
		<section className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
			{data.map((item) => (
				<Card key={item.id} data={item} />
			))}
		</section>
	);
}
