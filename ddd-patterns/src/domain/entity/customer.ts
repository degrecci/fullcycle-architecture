import Address from "./address";
import AddressChangedEvent from "../event/@shared/customer/address-changed.event";
import CustomerCreatedEvent from "../event/@shared/customer/customer-created.event";
import EventDispatcher from "../event/@shared/event-dispatcher";
import EventDispatcherInterface from "../event/@shared/event-dispatcher.interface";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = false;
  private _rewardPoints: number = 0;
  private _eventDispatcher: EventDispatcherInterface;

  constructor(
    id: string,
    name: string,
    eventDispatcher = new EventDispatcher()
  ) {
    this._id = id;
    this._name = name;
    this.validate();

    this._eventDispatcher = eventDispatcher;

    const customerCreatedEvent = new CustomerCreatedEvent(this);
    this._eventDispatcher.notify(customerCreatedEvent);
  }

  get name(): string {
    return this._name;
  }

  get id(): string {
    return this._id;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  get Address(): Address {
    return this._address;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("ID is required");
    }

    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changeAddress(address: Address) {
    this._address = address;

    const event = new AddressChangedEvent(this);
    this._eventDispatcher.notify(event);
  }

  isActive(): boolean {
    return this._active;
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  addRewardPoints(points: number) {
    this._rewardPoints += points;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
