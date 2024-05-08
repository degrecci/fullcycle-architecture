import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
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
    const item = new OrderItem("i1", "item 1", 10, "p1", 2);
    const order = new Order("o1", "c1", [item]);

    expect(order.total()).toBe(20);

    const item2 = new OrderItem("i2", "item 2", 20, "p2", 2);
    const order2 = new Order("o1", "c1", [item, item2]);

    expect(order2.total()).toBe(60);
  });

  it("should throw error if the item quantity is less or equal 0", () => {
    expect(() => {
      const item = new OrderItem("i1", "item 1", 10, "p1", 0);
      const order = new Order("o1", "c1", [item]);
    }).toThrow("Item quantity must be greater than 0");
  });
});
