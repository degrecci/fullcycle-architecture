import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Degrecci");
const address = new Address("Rua dois", "São Paulo", 123, "12345-678");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 100, "p1", 2);
const item2 = new OrderItem("2", "Item 2", 200, "p2", 2);

const order = new Order("1", customer.id, [item1, item2]);
