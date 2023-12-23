//INheritance in ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  set fullName(fullName) {
    console.log("Setter is called");
    this._fullName = fullName;
  }

  get fullName() {
    console.log("Getter is called");
    return this._fullName;
  }

  calcAge() {
    console.log("Age is :" + (2023 - this.birthYear));
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, subject) {
    super(fullName, birthYear);
    this.subject = subject;
  }

  introduce() {
    console.log(`${this._fullName} is studying ${this.subject}`);
  }
}

/*
const personObj = new PersonaCl("Krishna Mohan", 1979);
console.log(personObj.fullName);
personObj.name = "Madhavi Athota";
console.log(personObj.fullName);
*/

const studentObj = new StudentCl("Krishna Mohan", 1979, "MCA");
studentObj.calcAge();
console.log(studentObj instanceof StudentCl);
console.log(studentObj instanceof PersonCl);
console.log(studentObj);

studentObj.introduce();


class Person1Cl{
  constructor(fullName, birthYear){
    this._fullName = fullName;
    this.birthYear = birthYear;
  }

  set fullName(fullName){
    console.log("Setter is called");
    this._fullName = fullName;
  }

  get fullName(){
    console.log("Getter is called");
    return this._fullName;
  }

  calcAge(){
    console.log("Age is :" + (2023 - this.birthYear));
  }
}


class Student1Cl extends Person1Cl{

  constructor(fullName, birthYear, subject){
    super(fullName, birthYear);
    this.subject = subject;
  }

  introduce(){
    console.log(`${this._fullName} is studying ${this.subject}`);
  }

}

const testObj = new Student1Cl("Krishna Mohan", 1979, "MCA");
testObj.introduce();

console.log(testObj instanceof Student1Cl);

console.log(testObj instanceof Person1Cl);