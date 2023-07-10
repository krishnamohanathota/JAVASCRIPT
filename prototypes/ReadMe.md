# Prototype

- In JavaScript, every object has an internal link to another object, called its `prototype`. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this `prototype chain`.

- Any Object always have access to the methods and properties from its prototype.

- All Objects in JavaScript are linked to a `prototype object`. When you go to access a property on an object, JavaScript will first look at the object itself to see if it has that property. If it doesn't, it will look at the prototype object and see if it has that property. If it doesn't, it will look at the prototype's prototype object and so on until it finds the property or reaches the end of the prototype chain. This is called the prototype chain.

- The prototype chain is how JavaScript implements inheritance.

- The `prototype chain` is a series of links between objects that allows JavaScript to implement inheritance and reuse code between objects.

- Prototype property is used to add properties and methods to constructor functions, and those properties or methods are then shared among all instances of that function.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

var person = new Person("John", 25);

person.greet(); // Hello, my name is John and I am 25 years old.
```

- It should be called as a prototype of a `linked object` instead of a `parent object`.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(
    "Hello, my name is " + this.name + " and I am " + this.age + " years old."
  );
};

var person = new Person("John", 25);

person.greet(); // Hello, my name is John and I am 25 years old.

console.log(person.__proto__ === Person.prototype); // true
console.log(person.__proto__.__proto__ === Object.prototype); // true

console.log(Person.prototype.isPrototypeOf(person)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false (Person is a function, not an instance)

# Most honest method name should be `isPrototypeLinkedObjectOf`

```
