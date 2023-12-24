## map vs forEach

Both map and forEach are array methods that are used to iterate over an array.

Both methods takes a callback function as an argument. The callback function is invoked for every item in the array.

The main difference between map and forEach is that

- map returns a `new array` based on the result of the callback function.
- forEach returns `undefined`. It is just used to iterate over an array.

```js
const numbers = [1, 2, 3, 4, 5];

const numbersTimesTwo = numbers.map((number) => number * 2);

console.log(numbersTimesTwo); // [2, 4, 6, 8, 10]
```

```js
const numbers = [1, 2, 3, 4, 5];

const numbersTimesTwo = numbers.forEach((number) => number * 2);

console.log(numbersTimesTwo); // undefined
```

The other difference between these two methods is based on chaining. Since map returns a new array, you can chain other array methods after it. forEach returns undefined, so you can't chain other array methods after it.

```js
const numbers = [1, 2, 3, 4, 5];

const numbersTimesTwo = numbers
  .map((number) => number * 2)
  .filter((number) => number > 5);

console.log(numbersTimesTwo); // [6, 8, 10]
```

```js
const numbersTimesTwo = numbers
  .forEach((number) => number * 2)
  .filter((number) => number > 5);

console.log(numbersTimesTwo); // Uncaught TypeError: Cannot read property 'filter' of undefined
```

## Pro JavaScript Tips

### Use Ternary Operators

```js
let thirsty = false;
let drink = thirsty ? "Drink Water" : "Drink Soda";
console.log(drink); // Drink Soda
```

### Use Short-Circuit Evaluation

```js
let thirsty = false;
let drink = thirsty && "Drink Water";
console.log(drink); // false
```

### Use Destructuring Assignment

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, lastName, age } = person;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(age); // 30
```

### Use the Spread Operator

```js
const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); // 1 2 3 4 5
```

### Use the Rest Parameter

```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Use the Spread Operator to Concatenate Arrays

```js
const numbers = [1, 2, 3, 4, 5];

const moreNumbers = [6, 7, 8, 9, 10];

const allNumbers = [...numbers, ...moreNumbers];

console.log(allNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Use the Rest Parameter to Collect Elements into an Array

```js
function sum(...numbers) {
  // The reduce method is used on the numbers array to reduce it to a single value.
  // acc is the accumulator (the running total), and curr is the current value being processed
  return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

Without using the `reduce` method, you can use the rest parameter to collect all the arguments passed into the sum function into an array.

```js
function sum(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
```

### Use the Spread Operator to Copy Arrays

```js
const numbers = [1, 2, 3, 4, 5];

const numbersCopy = [...numbers];

console.log(numbersCopy); // [1, 2, 3, 4, 5]
```

### Use the Spread Operator to Copy Objects

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const personCopy = { ...person };

console.log(personCopy); // {firstName: "John", lastName: "Doe", age: 30}
```

### Populating an array

The `Array.from` method is used to create a new array from an iterable or array-like object. In below code, the iterable is an object with a length property set to 10. This means we want to create an array of length 10.

```js
let filledArray = Array.from({ length: 10 }, () => "hello");

console.log(filledArray); // ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"]
```

The second argument of Array.from is a mapping function that is applied to each element of the new array. In below example, it's an arrow function that takes two parameters: _ and index. The _ is a convention to indicate that the first parameter is not being used.

```js
let filledArray = Array.from({ length: 10 }, (_, index) => index + 1);

console.log(filledArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

```js
let filledArray = Array.from({ length: 10 }, (_, index) => index);

console.log(filledArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Filter Unique Values

The Set Object type was introduced in ES6, and along with the ... spread operator, it can be used to create a new array with unique values.

```js
const numbers = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Objects to Arrays

`Object.keys()` : This method gets all the keys of an object and returns them in an array.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const keys = Object.keys(person);

console.log(keys); // ["firstName", "lastName", "age"]
```

`Object.values()` : This method gets all the values of an object and returns them in an array.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const values = Object.values(person);

console.log(values); // ["John", "Doe", 30]
```

`Object.entries()` : This method gets all the keys and values of an object and returns them in an array.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const entries = Object.entries(person);

console.log(entries);

// [
//   ["firstName", "John"],
//   ["lastName", "Doe"],
//   ["age", 30],
// ];
```
