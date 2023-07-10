# ES6 classes

Classes in JavaScript are essentially syntactical sugar over JavaScript's existing prototype-based inheritance. These are introduced to make language is more accessible to programmers coming from other languages(Java, C++ etc).

Classes in JavaScript are a special syntax for `functions`. They are `not` a new object-oriented inheritance model but a new syntax for existing prototypes and inheritance.

The class syntax doesn't change the underlying prototypal nature of JavaScript, but it makes it easier and more intuitive to work with objects and inheritance.

## Syntax

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}
```

1. Class declarations are `not hoisted`. You need to declare a class before you can use it, just like any other variable.
2. Class declarations are `in strict mode` by default.
3. All methods inside the class are `non-enumerable`. So, you can't use `for...in` or `Object.keys()` to enumerate over the class methods. You can use `Object.getOwnPropertyNames()` to get an array of all methods.
4. The `constructor` method is a special method for creating and initializing an object created with a class. There can be only one special method with the name "constructor" in a class. A `SyntaxError` will be thrown if the class contains more than one occurrence of a constructor method.
5. Classes are first class citizens. This means that just like functions, classes can be passed as arguments to functions and can be returned from functions.

## Inheritance

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
```

Class Expression

```javascript
// unnamed
let Person = class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
};

// named
let Person = class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
};
```
