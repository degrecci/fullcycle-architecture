import Customer from "../../customer/entity/customer";
import EventInterface from "../event/event.interface";

export default class AddressChangedEvent implements EventInterface {
  dateTimeOccurred: Date;
  eventData: Customer;

  constructor(eventData: Customer) {
    this.dateTimeOccurred = new Date();
    this.eventData = eventData;
  }
  dataTimeOccurred: Date;
}
