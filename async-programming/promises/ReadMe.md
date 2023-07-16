## Promises

Promises are introduced in ES6. A promise is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more synchronous fashion.

Promises solve the problem of [callback hell](/async-programming/callback-hell/ReadMe.md). They allow you to chain multiple asynchronous operations without nesting callbacks.

```js
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved");
  }, 2000);
});

promiseA
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  })
  .finally(() => {
    console.log("Finally");
  });
```

fetch API returns a promise. You can use the then method to access the response.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
```

### Creating promises

Creating promises are useful when you want to wrap an asynchronous operation or potentially time-consuming operations into a Promise-based interface, m aking it easier to work with.

- **Wrapping a Callback-based API**: If you have a library or API that relies on traditional callbacks but you want to use Promises for better control flow and error handling, you can create a custom Promise to wrap the callback-based API.

```js
function fetchDataFromLegacyAPI(url) {
  return new Promise((resolve, reject) => {
    legacyAPICall(url, (data, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
```

- **Delaying Execution**: You might need to introduce a delay before resolving or rejecting a Promise. For example, simulating a server response delay or adding a delay between API calls.

```js
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

delay(2000).then(() => {
  console.log("2 seconds later...");
});
```

- **Parallel Execution**: Sometimes you want to perform multiple asynchronous tasks in parallel and resolve the Promise when all tasks are completed.

```js
function fetchMultipleData(urls) {
  const promises = urls.map((url) => fetch(url));
  return Promise.all(promises);
}

const urls = [
  "https://example.com/api1",
  "https://example.com/api2",
  "https://example.com/api3",
];
fetchMultipleData(urls)
  .then((responses) => {
    // Process all the responses here
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

- ### Async Await vs Promises

  [Async Await vs Promises](/async-programming/ReadMe.md#asyncawait-vs-promises)
