interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User {
  /*
  private name: string;
  protected email: string;
  public age: number;
  */

  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log("User created: " + this.name);
  }

  //private register() {
  register() {
    console.log(this.name + " is now registered");
  }
  payInvoice() {
    console.log(this.name + " paid invoice!");
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    //only use super for the stuff you are inheriting
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

//let john = new User("John Doe", "jd@hotmail.com", 55);
//console.log(john.age);
//john.register();

let bob: User = new Member(1, "Bob Jones", "bob@hotmail.com", 5);
bob.payInvoice();
