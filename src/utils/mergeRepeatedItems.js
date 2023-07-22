export const mergeRepeatedItems = (items, newItem) => {
	const repeatedItem = items.find((item) => item.id === newItem.id);
	if (!repeatedItem) return [...items, { ...newItem, quantity: 1 }];
	repeatedItem.quantity++;
	const other = items.filter((item) => item.id !== newItem.id);

	return [...other, repeatedItem];
};
