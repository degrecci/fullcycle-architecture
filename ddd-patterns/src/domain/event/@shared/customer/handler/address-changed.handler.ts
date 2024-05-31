import AddressChangedEvent from "../address-changed.event";
import EventHandlerInterface from "../../event-handler.interface";

export default class AddressChangedHandler
  implements EventHandlerInterface<AddressChangedEvent>
{
  handle(event: AddressChangedEvent): void {
    const { id, name, Address } = event.eventData;
    const { street, number, city, zip } = Address;
    console.log(
      `Endereço do cliente: ${id}, ${name} foi alterado para: ${street}, ${number}. ${city}. zip: ${zip}`
    );
  }
}
