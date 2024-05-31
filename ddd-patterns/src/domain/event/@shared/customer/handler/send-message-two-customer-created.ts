import CustomerCreatedEvent from "../customer-created.event";
import EventHandlerInterface from "../../event-handler.interface";

export default class SendMessageTwoCustomerCreated
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
