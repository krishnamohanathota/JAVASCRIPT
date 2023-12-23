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
