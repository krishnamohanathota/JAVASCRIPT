class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(`Age is ${2023 - this.birthYear}`);
  }

  set name(fullName) {
    this.fullName = fullName;
  }

  get name() {
    return this.fullName;
  }

  static hey() {
    console.log("Static Method...");
  }
}

PersonCl.prototype.details = function () {
  console.log(`Person name (Using Getter) is ${this.name}`);
};

const personObj = new PersonCl("Krishna Mohan", 1979);
console.log(personObj);
personObj.calcAge();
personObj.details();

console.log(PersonCl.prototype.isPrototypeOf(personObj));
console.log(personObj.__proto__ === PersonCl.prototype);

//Setter
personObj.name = "New Krishna Mohan";

//Getter
console.log(personObj.name);

//Static Method
PersonCl.hey();
