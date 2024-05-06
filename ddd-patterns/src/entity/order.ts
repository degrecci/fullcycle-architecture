import OrderItem from "./order_item";

export default class Order {
  _id: string;
  _customer: string;
  _items: OrderItem[];

  constructor(id: string, customer: string, items: OrderItem[]) {
    this._id = id;
    this._customer = customer;
    this._items = items;
  }
}
