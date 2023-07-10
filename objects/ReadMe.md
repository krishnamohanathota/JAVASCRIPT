# How do we create objects in JavaScript?

There are 3 ways to create objects in JavaScript:

1. Constructor Functions

- Technique for creating objects that was used before ES6 classes were introduced.
- Constructor functions are just regular functions that are used to create objects.
- Constructor functions are named with a capital letter by convention.
- Constructor functions are called with the new keyword.
- Constructor functions use the this keyword to set properties on the new object.
- This is how built-in objects like Array, Map, Set, etc. are created.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let obj = new Person("John", 30);
```

- Arrow functions cannot be used as constructor functions because they do not have their own this keyword. They inherit the this keyword from the enclosing scope.

```javascript
let Person = (name, age) => {
  this.name = name;
  this.age = age;
};

let obj = new Person("John", 30); // TypeError: Person is not a constructor
```

- It is not recommended to add methods to the constructor function itself. Beacuse every object created with that constructor function will have a copy of that method. This is not memory efficient. Instead, we should add methods to the prototype object of the constructor function.

- Any Object always have access to the methods and properties of its prototype.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let obj = new Person("John", 30);

obj.greet(); // Output: Hello, my name is John
```

2. ES6 Classes

- Modern technique for creating objects.
- ES6 classes are just syntactic sugar over constructor functions.
- ES6 classes are named with a capital letter by convention.
- ES6 classes are called with the new keyword.
- ES6 classes use the this keyword to set properties on the new object.
- ES6 classes do NOT behave like classes in other languages. They are just a different way to create objects.
- Just a layer of abstraction over constructor functions.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let obj = new Person("John", 30);
```

3. Object.create()

```javascript
Object.create(proto, [propertiesObject]);
```

You can use Object.create() to implement prototypal inheritance. You can set the prototype of the new object to an existing object, allowing the new object to inherit properties and methods from the existing object.

```javascript
let animal = {
  eat: function () {
    console.log("Eating...");
  },
};

let dog = Object.create(animal);
dog.bark = function () {
  console.log("Barking...");
};

dog.eat(); // Output: Eating...
dog.bark(); // Output: Barking...
```

- Object.create() is the most straightforward way to create objects linked to a prototype object.
- Object.create() is a method on the Object constructor.
- Object.create() takes a prototype object as its first argument.
- Object.create() returns a new object linked to the prototype object passed in as the first argument.
- Object.create() is the only way to create objects that are not linked to Object.prototype. This is useful when you want to create objects that don't inherit from Object.prototype. For example, if you want to create an object that doesn't have any properties or methods on it, you can use Object.create(null).

### Creating Objects without a Prototype

- If you want to create an object that doesn't inherit any properties or methods (not even basic methods like toString()), you can use Object.create() with null as the argument. This can be useful when you want to use an object purely for data storage and don't want it to inherit any properties or methods.

```javascript
let dataStorage = Object.create(null);
dataStorage.data = "Some data";
console.log(dataStorage); // Output: { data: 'Some data' }
console.log(dataStorage.toString()); // Output: TypeError: dataStorage.toString is not a function
```

## What is the difference between Object.create() and the new keyword ?

- Object.create() is a method on the Object constructor that creates a new object linked to the prototype object passed in as the first argument.

- The new keyword (Constructor Function) is used to call a constructor function and create a new object. The new keyword does not create a new object linked to the prototype object passed in as the first argument.

  A constructor function is a good choice when:

        You want to create multiple similar objects with the same properties and methods, because constructor functions are typically used for creating multiple objects of the same "type".

        You want to take advantage of JavaScript's native prototypal inheritance. The prototype object of the constructor function is shared among all objects created with that constructor, which can save memory if the same methods are being used across multiple objects.

        You prefer more traditional class-like syntax. If you're coming from a language with classes, constructor functions may feel more familiar to you.

  Example:

  ```javascript
  function Person(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  Person.prototype.calcAge = function () {
    return 2023 - this.birthYear;
  };

  const john = new Person("John", 1990);
  const jane = new Person("Jane", 1995);

  console.log(john.calcAge()); // Output: 33
  console.log(jane.calcAge()); // Output: 28
  ```

Object.create() is a good choice when:

    You want to create a single object, not necessarily a series of similar objects.

    You want to create an object with a specific prototype. With Object.create(), you can create a new object and explicitly define the object's prototype.

    You want more control over the `properties` of the object. Object.create() allows you to define properties with descriptors for more granular control over the properties (like whether they are enumerable, writable, etc.).

Example:

```javascript
let animal = {
  eat: function () {
    console.log("Eating...");
  },
};

let dog = Object.create(animal);

dog.bark = function () {
  console.log("Barking...");
};

dog.eat(); // Output: Eating...
dog.bark(); // Output: Barking...
```

## What is the difference between Object.create() and Object.assign() ?

- Object.create() is a method on the Object constructor that creates a new object linked to the prototype object passed in as the first argument.

- Object.assign() is a method on the Object constructor that copies the values of all enumerable own properties from one or more source objects to a target object.

# Prototypal Inheritance / Delegation

- Prototypal Inheritance is a pattern of inheritance in JavaScript where we have objects linked to other objects.

- System of linking objects through their prototypes is what allows for prototypal inheritance in JavaScript.

```javascript
let animal = {
  eat: function () {
    console.log("Eating...");
  },
};

let dog = Object.create(animal);
dog.bark = function () {
  console.log("Barking...");
};

dog.eat(); // Output: Eating...
dog.bark(); // Output: Barking...
```

- In the above example, we have two objects: animal and dog. The dog object is linked to the animal object through its prototype. This means that the dog object has access to the eat method on the animal object.

- The dog object also has its own bark method, which is not shared with the animal object.

## Advantages with prototypal inheritance

- The main advantage of prototypal inheritance is that it allows us to reuse code between objects without having to use classes.

- Prototypes provide a memory-efficient way to implement inheritance. Instead of having to create a new copy of a method for each object, we can just link to the method on the prototype. This saves memory and allows us to reuse code between objects. This is especially useful when we have many objects that share the same methods.

## Array.prototype

```js
let arr = [1, 2, 3];
arr.proto === Array.prototype; // true
arr.map((x) => x * 2); // [2, 4, 6] - map is a method on Array.prototype
```

`arr` delegates map method to Array.prototype.

## Function.prototype

```js
function foo() {}

foo.proto === Function.prototype; // true
foo.bind({}); // returns a new function - bind is a method on Function.prototype
```

## Object.prototype

```js
let obj = {};
obj.proto === Object.prototype; // true
```

## String.prototype

```js
let str = "hello";
str.proto === String.prototype; // true
str.toUpperCase(); // "HELLO" - toUpperCase is a method on String.prototype
```

## Number.prototype

```js
let num = 5;
num.proto === Number.prototype; // true
num.toFixed(2); // "5.00" - toFixed is a method on Number.prototype
```

## Boolean.prototype

```js
let bool = true;
bool.proto === Boolean.prototype; // true
bool.toString(); // "true" - toString is a method on Boolean.prototype
```
