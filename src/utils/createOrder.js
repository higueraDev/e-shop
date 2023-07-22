export class CreateOrder {
	constructor(items, count, totalPrice) {
		this.id = crypto.randomUUID();
		this.date = new Date();
		this.items = items;
		this.count = count;
		this.totalPrice = totalPrice;
	}
}
