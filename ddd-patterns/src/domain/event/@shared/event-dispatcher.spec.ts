import Address from "../../entity/address";
import AddressChangedHandler from "./customer/handler/address-changed.handler";
import Customer from "../../entity/customer";
import EventDispatcher from "./event-dispatcher";
import ProductCreatedEvent from "./product/product-created.event";
import SendEmailWhenProductIsCreatedHandler from "./product/handler/send-email-when-product-is-created.handler";
import SendMessageOneCustomerCreated from "./customer/handler/send-message-one-customer-created";
import SendMessageTwoCustomerCreated from "./customer/handler/send-message-two-customer-created";

describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeDefined();
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(
      1
    );
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);
  });

  it("should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
    expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(
      0
    );
  });

  it("should unregister all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    eventDispatcher.unregisterAll();

    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"]
    ).toBeUndefined();
  });

  it("should dispatch an event", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendEmailWhenProductIsCreatedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");
    const event = {
      name: "Product 1",
      description: "Product 1 description",
      price: 100,
    };

    eventDispatcher.register("ProductCreatedEvent", eventHandler);
    expect(
      eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]
    ).toMatchObject(eventHandler);

    const productCreatedEvent = new ProductCreatedEvent(event);
    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });

  it("should dispatch an CustomerCreated event", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendMessageOneCustomerCreated();
    const eventHandler2 = new SendMessageTwoCustomerCreated();

    eventDispatcher.register("CustomerCreatedEvent", eventHandler);
    eventDispatcher.register("CustomerCreatedEvent", eventHandler2);
    const spyEventHandler = jest.spyOn(eventHandler, "handle");
    const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

    new Customer("123", "Customer 1", eventDispatcher);

    expect(spyEventHandler).toHaveBeenCalled();
    expect(spyEventHandler2).toHaveBeenCalled();
  });

  it("should dispatch an AddressChanged event", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new AddressChangedHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("AddressChangedEvent", eventHandler);
    const customer = new Customer("123", "Customer 1", eventDispatcher);
    customer.changeAddress(new Address("Street 1", 123, "12345", "City"));

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
