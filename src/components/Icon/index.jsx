import {
	PlusIcon,
	ShoppingCartIcon,
	TrashIcon,
	XMarkIcon,
	CheckIcon,
	ChevronLeftIcon,
	CalendarDaysIcon,
	CurrencyDollarIcon,
	ChevronRightIcon,
} from "@heroicons/react/20/solid";

const icons = {
	close: <XMarkIcon />,
	plus: <PlusIcon />,
	cart: <ShoppingCartIcon />,
	trash: <TrashIcon />,
	check: <CheckIcon />,
	left: <ChevronLeftIcon/>,
	right: <ChevronRightIcon/>,
	calendar: <CalendarDaysIcon/>,
	money: <CurrencyDollarIcon/>
};

export default function Icon(props) {
	const { name, className, onClick } = props;
	return (
		<span onClick={onClick} className={className}>
			{icons[name]}
		</span>
	);
}
