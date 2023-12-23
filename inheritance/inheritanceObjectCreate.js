//Inheritance : Using Object.create

const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(`Age of ${this.firstName} is ${2023 - this.birthYear}`);
  },
};

const kmObj = Object.create(PersonProto);
kmObj.init("KM", 1979);
kmObj.calcAge();

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`${this.firstName} is studying ${this.course}`);
};

const saiObj = Object.create(StudentProto);
saiObj.init("Sai", 2005, "B.Tech");

saiObj.calcAge();
saiObj.introduce();

console.log(saiObj);
