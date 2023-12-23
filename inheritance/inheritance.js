//Inheritance : Constructor Function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

/*
This line makes the prototypes of Person and Student point to the exact same object, 
which means when you add a new method to Student.prototype, 
it will also be added to Person.prototype, and vice versa. 
This is not usually what you want when setting up inheritance.

Instead, you should create a new object that inherits from Person.prototype, 
and assign that to Student.prototype. This can be done with Object.create():

*/
// Student.prototype = Person.prototype;

/**
 *This line creates a new object that has Person.prototype as its prototype, 
 and assigns it to Student.prototype. 
 This means that Student.prototype now has all the methods from Person.prototype, 
 but any new methods added to Student.prototype won't affect Person.prototype.
 */
Student.prototype = Object.create(Person.prototype);

/**
  When you overwrite the prototype of a constructor function
  (as in Student.prototype = Object.create(Person.prototype);), 
  you're essentially giving it a new prototype object. 
  This new prototype object has a constructor property that points to Person, 
  because Object.create() creates a new object using the object passed to it as the prototype. 
  So after above line of code, Student.prototype.constructor points to Person, not Student.

  By adding below line, you're manually correcting the constructor property to ensure 
  it points to Student, which is the actual constructor function for Student objects. 
  This is generally recommended whenever you manually set a constructor function's prototype 
  to a new object.

  If we won't set it, when any Student Objects are created, its constructor proprty is pointed
  to Person constructor. 
 */
Student.prototype.constructor = Student;

/*
This function will fail if we won't update Student constructor property 
 */

function createAnotherStudent(student, firstName) {
  if (student.constructor !== Student) {
    throw new Error("The object provided is not a Student");
  }

  return new student.constructor(firstName, student.birthYear, student.course);
}

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and studying ${this.course}`);
};

const kmObj = new Student("KM", 1979, "MCA");
//kmObj.calcAge();
//kmObj.introduce();

console.dir(Student.prototype.constructor);
console.log(kmObj instanceof Student);
console.log(kmObj instanceof Person);

console.log(kmObj.constructor);

//This will return false if we won't update above constructor property
//console.log(kmObj.constructor === Student);

//const anotherKM = createAnotherStudent(kmObj, "Another KM");
//anotherKM.introduce();
