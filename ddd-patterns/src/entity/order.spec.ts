import Order from "./order";
import OrderItem from "./order_item";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => new Order("", "customer", [])).toThrow("ID is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => new Order("123", "", [])).toThrow("CustomerId is required");
  });

  it("should throw error when item quantity is not greater than 0", () => {
    expect(() => new Order("123", "123", [])).toThrow("Items are required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "item 1", 10);
    const order = new Order("o1", "c1", [item]);

    expect(order.total()).toBe(10);

    const item2 = new OrderItem("i2", "item 2", 20);
    const order2 = new Order("o1", "c1", [item, item2]);

    expect(order2.total()).toBe(30);
  });
});
