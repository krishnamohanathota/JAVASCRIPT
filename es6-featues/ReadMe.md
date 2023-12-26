## ES6 (ECMAScript 2015) Featues

### Arrow Functions

Arrow functions provide a concise syntax for writing functions, especially useful for short, one-line operations.

```js
//ES5 (ECMAScript 5)
function addition(a, b) {
  return a + b;
}

//ES6 arrow functions
const addition = (a, b) => a + b;
```

### Template literals

Template literals allow embedding expressions inside strings, providing a cleaner and more readable way to concatenate strings.

Template literals allow you to embed expressions inside string literals using the ${} syntax.

```js
const name = "KM";
const greeting = `Hello, ${name}!`;
```

### Destructuring assignment

Destructuring assignment simplifies the extraction of values from objects or arrays into individual variables

```js
const person = {
  name: "KM",
  age: 40,
  city: "Hyderabad, India",
};

//ES5 approach
var name = person.name;
var age = person.age;

// Use destructuring assignment to extract 'name' and 'age' properties from the 'person' object
const { name, age } = person;

console.log(`Name : ${name} , Age : ${age}`);
```

```js
// ES5 approach
const person = {
  name: "KM",
  age: 40,
  city: "Hyderabad, India",
};

var name = person.name;
var age = person.age;

console.log("Name :" + name + ", Age :" + age);
```

### Spread Operator

The spread operator allows for the `expansion of elements`, making it handy for creating new arrays or objects based on existing ones.

```js
const nums = [1, 2, 3];

//ES5 (ECMAScript 5) approach
var newNums1 = nums.concat([4, 5]);

//ES6 (ECMAScript 2015)
const newNums = [...nums, 4, 5];

console.log(newNums);
```

### Rest Operator

The rest parameter allows functions to accept an indefinite number of arguments as an array simplifying parameter handling.

```js
// sum function using an arrow function & the rest parameter (...nums)
// rest parameter (...nums), which allows it to accept any number of arguments and store them as an array called nums

const sum = (...nums) => {
  // the reduce method is used to iterate over the elements of the nums array, accumulating their sum. The initial value of the accumulator (acc) is set to 0.

  // You can omit the second argument of reduce (the initial value) if you're confident that the array nums will always have at least one element

  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

console.log(sum(1, 2, 3));
```

```js
//ES5 approach

function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function (acc, num) {
    return acc + num;
  }, 0);
}

console.log(sum(1, 2, 3, 4));
```

### Async/Await

Async/await is a syntax for handling asynchronous code more concisely, providing a cleaner alternative
to working with Promises.

[Async/Await](../async-programming/ReadMe.md#asyncawait)

[Async Await vs Promises](../async-programming/ReadMe.md#asyncawait-vs-promises)

### Map & Set

`Map` and `Set` are new data structures introduced in ES6. Map is an ordered collection of key-value pairs, and Set is a collection of unique values.

```js
// Creating a Map
let myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 25);

// Retrieving values from the Map
console.log(myMap.get("name")); // Output: John

// Checking if a key exists in the Map
console.log(myMap.has("age")); // Output: true

// Deleting a key-value pair
myMap.delete("age");

// Iterating through key-value pairs
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// Iterating using forEach
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

```js
// Creating a Set
let mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate entry, ignored

// Checking if a value exists in the Set
console.log(mySet.has(2)); // Output: true

// Deleting a value from the Set
mySet.delete(3);

// Iterating through values in the Set
for (let value of mySet) {
  console.log(value);
}

// Iterating through values in the Set using `forEach`
mySet.forEach((value) => console.log(value));
```

[map vs forEach](../examples/ReadMe.md#map-vs-foreach)

### map, filter & reduce methods

The `map` method in JavaScript is used to create a new array by applying a provided function to each element of an existing array.

[map vs forEach](../examples/ReadMe.md#map-vs-foreach)

The `filter` method is used to create a new array containing only the elements that satisfy a specified condition.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const newNumbers = numbers.filter((num) => num % 2 === 0);

// [2,4,6,8]
console.log(newNumbers);
```

The `reduce` method is used to accumulate the elements of an array into a single value

```js
const sum = (...nums) => {
  // the reduce method is used to iterate over the elements of the nums array, accumulating their sum. The initial value of the accumulator (acc) is set to 0.

  // You can omit the second argument of reduce (the initial value) if you're confident that the array nums will always have at least one element

  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

console.log(sum(1, 2, 3));
```

### Default Parameters

Default parameters provide values for function parameters if none are provided, improving flexibility and reducing the need for explicit checks.

```js
const greet = (name = "Guest") => console.log(`Hello ${name}`);

greet("KM");
greet();
```

### Modules

Modules provide a way to organize and structure code by encapsulating its functionality. The primary goal is to avoid the global namespace pollution and to allow better code organization and reusability

You can export variables, functions, or classes from a module using the export keyword. There are two main ways to export:

1. Named Exports:

- When you want to export multiple values from a module.
- When you want to have a clear and explicit import syntax.

```js
// module.js
export const variable1 = 42;
export function function1() {
  // function code
}
```

In another module, you import the named exports like this:

```js
// anotherModule.js
import { variable1, function1 } from "./module.js";
```

2. Default Export:

- Used when you want to export only one thing from a file. Module can have only one default export
  (i.e. When you want to export a single "main" value from a module)

- When you want to have a simpler import syntax and don't care about the specific name

```js
// module.js
const variable1 = 42;
export default variable1;
```

In another module, you import the default export like this:

```js
// anotherModule.js
import variable1 from "./module.js";
```

Combining Named and Default Exports:

You can also combine named and default exports in a single module:

```js
// module.js
const variable1 = 42;
export const variable2 = "Hello";

export { variable1 as default, variable1, variable2 };
```

In this example, variable1 is both the default export and a named export. You can import it as the default or by its name:

```js
// anotherModule.js
import myVariable, { variable1, variable2 } from "./module.js";

console.log(myVariable); // This is the default export
console.log(variable1); // This is a named export
console.log(variable2); // This is another named export
```
