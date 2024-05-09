import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should get total off al orders", () => {
    const item1 = new OrderItem("i1", "Product 1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "Product 2", 200, "p2", 2);

    const order1 = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(500);
  });
});
