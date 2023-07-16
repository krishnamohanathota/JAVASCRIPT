## Async/Await

Async/Await is a new way to write asynchronous code. It is built on top of Promises and uses the same underlying mechanism. Async/Await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.

### Example

```
async function doSomethingAsync() {
    // do something async and return a promise
}

async function doSomething() {
    // await the promise to be resolved
    // and assign the result to a variable
    const result = await doSomethingAsync();
    // use the result
}
```

### Async Functions

Async functions are functions that return a Promise. They are created by putting the async keyword in front of a function declaration or expression.

```
async function doSomething() {
    // ...
}
```

```
const doSomething = async function() {
    // ...
}
```

```
const doSomething = async () => {
    // ...
}
```

### Await

The await operator is used to wait for a Promise. It can only be used inside an async function. The keyword await makes JavaScript wait until the promise returns a result. It has to be noted that it only makes the async function block wait and not the whole program execution.

```
async function doSomething() {
    // await the promise to be resolved
    // and assign the result to a variable
    const result = await doSomethingAsync();
    // use the result
}
```

### Error Handling

Async/Await makes it easier to handle errors. You can use the try/catch statement to handle errors.

```
async function doSomething() {
    try {
        // await the promise to be resolved
        // and assign the result to a variable
        const result = await doSomethingAsync();
        // use the result
    } catch (error) {
        // handle the error
    }
}
```
