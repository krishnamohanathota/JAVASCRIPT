## Inheritance

Different ways to implement inheritance in JavaScript

- Constructor Functions
- ES6 Classes
- Object.create() method (Prototype inheritance)

### Constructor Functions

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.sayGrade = function () {
  console.log(this.grade);
};

let john = new Student("John", 10);

john.sayName(); // John

john.sayGrade(); // 10
```

### ES6 Classes

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
  sayGrade() {
    console.log(this.grade);
  }
}

let john = new Student("John", 10);

john.sayName(); // John

john.sayGrade(); // 10
```

### Object.create() : Prototype inheritance

```javascript
let person = {
  name: "Default",
  sayName: function () {
    console.log(this.name);
  },
};

let john = Object.create(person);

john.name = "John";

john.sayName(); // John

let student = Object.create(person, {
  grade: {
    value: 10,
  },
});

student.sayName(); // Default

student.sayGrade(); // 10
```
