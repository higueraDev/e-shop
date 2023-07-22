/**
 * This function calculates the total price of a given array of products
 * @param {Array} items Array of Items with Price
 * @returns {number} Total price
 */
export const calcTotal = (items) => {
	return items.reduce((acc, current) => acc + (current.price * current.quantity), 0).toFixed(2);
};
