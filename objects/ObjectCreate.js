const Person = {
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },

  calcAge() {
    return 2023 - this.birthYear;
  },
};

// prototype property is used to add properties and methods
// to "constructor functions" (not to object literals like Person)

/*
Person.prototype.calcAge1 = function () {
  return 2023 - this.birthYear;
};
*/

const kmObj = Object.create(Person);
kmObj.init("KM", 1979);
console.log(kmObj.calcAge());

const madhuObj = Object.create(Person);
madhuObj.name = "Madhu";
madhuObj.birthYear = 1980;
madhuObj.spouse = "KM";
console.log(madhuObj.calcAge());

console.log(kmObj);
console.log(madhuObj);
