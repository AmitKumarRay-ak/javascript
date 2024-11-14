class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }

  createdId() {
    return "12345";
  }

  //   static createdId() {
  //     return "12345";
  //   }
}

const Amit = new User("Amit");
console.log(Amit.createdId());
