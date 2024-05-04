class Customer {
  _id: string;
  _name: string = "";
  _address: string = "";
  _active: boolean = true;

  constructor(id: string) {
    this._id = id;
  }

  set name(name: string) {
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

let customer = new Customer("123");
