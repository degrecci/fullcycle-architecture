import OrderItem from "./order_item";

export default class Order {
  private _id: string;
  private _customer: string;
  private _items: OrderItem[];
  private _total: number;

  constructor(id: string, customer: string, items: OrderItem[]) {
    this._id = id;
    this._customer = customer;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  validate(): boolean {
    if (!this._id) {
      throw new Error("ID is required");
    }

    if (!this._customer) {
      throw new Error("CustomerId is required");
    }

    if (this._items.length === 0) {
      throw new Error("Items are required");
    }

    if (this._items.some((item) => item.quantity <= 0)) {
      throw new Error("Item quantity must be greater than 0");
    }
    return true;
  }

  total(): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
  }
}
