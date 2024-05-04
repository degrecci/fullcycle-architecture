class Customer {
  _id: string;
  _name: string;
  _address: string;
  _active: boolean;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this._active = true;
  }

  set name(name: string) {\
    this._name = name;
  }

  changeName(name: string) {
    this.name = name;
  }

  activate() {
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}
