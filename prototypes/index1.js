let Person = function (name, yearOfBirth) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;

  this.printFun = function () {
    console.log(`Name : ${this.name} & Year of birth is ${this.yearOfBirth}`);
  };
};

Person.prototype.calculateAge = function () {
  const age = 2023 - this.yearOfBirth;
  console.log(`Age of ${this.name} is ${age}`);
};

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically return {}

const kmObj = new Person("KM", 1979);
const madhuObj = new Person("Madhu", 1980);

kmObj.calculateAge();
madhuObj.calculateAge();

console.log(kmObj.__proto__ == Person.prototype);
console.log(kmObj.__proto__ == madhuObj.__proto__);

console.log(Person.prototype.isPrototypeOf(kmObj)); //True

//It should be called as Prototype of linked objects instead of calling it as a Prototype of Person
// Most honest method name would be isPrototypeLinkedObjectOf
console.log(Person.prototype.isPrototypeOf(Person)); //False
