# Asynchronous Programming

Asynchronous programming allows you to perform the work without blocking the main process(or thread).

In asynchronous operation, you can move to another task before the previous one finishes, and this way you can deal with multiple requests simultaneously.
In JavaScript, a good example of asynchronous programming is setTimeout function, let's see a quick example -

```
console.log('Before setTimeout');

setTimeout(() => {
    console.log('Inside setTimeout');
}, 0);

console.log('After setTimeout');
```

The output of the above code will be -

```
Before setTimeout
After setTimeout
Inside setTimeout
```

As you can see, the setTimeout function is executed after the main process is finished. This is the power of asynchronous programming. You can perform multiple tasks simultaneously without blocking the main process.

## Why we need Asynchronous programming?

In JavaScript, code is executed in a single thread. This means that only one task can be executed at a time. If a task is running, and another task is called, it will have to wait for the previous task to finish before it can be executed.

UI events, such as mouse clicks and key presses, are also queued up in the same queue. If a task is running, and a UI event is called, it will have to wait for the previous task to finish before it can be executed.

This is called blocking the main process(or thread). This can be a problem if the task takes a long time to complete. It will block the main process and make the application unresponsive.

What we need is a way for our program to:

- Start a long-running operation by calling a function.
- Have that function start the operation and return immediately, so that our program can still be responsive to other events.
- Notify us with the result of the operation when it eventually completes.

This is where asynchronous programming comes in.

## Callbacks

A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.

### Example

```
function doSomethingAsync(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

doSomethingAsync(arg, function(result) {
    // use the result
});
```

[Callbacks](/async-programming/callback/ReadMe.md)

[CallBack Hell](/async-programming/callback-hell/ReadMe.md)

## Promises

Modern JavaScript has introduced alternative approaches to handle asynchronous code, such as Promises. Promises provide a more structured way to handle asynchronous operations and avoid the `callback hell` problem.

### Example

```
function doSomethingAsync(arg) {
    return new Promise((resolve, reject) => {
        // do something with arg,
        // maybe async, then…
        if (true) {
            resolve(result);
        } else {
            reject(error);
        }
    });
}

doSomethingAsync(arg)
    .then(result => {
        // use the result
    })
    .catch(error => {
        // handle the error
    });
```

[Promises](/async-programming/promises/ReadMe.md)

## Async/Await

Async/Await is a syntactic sugar on top of `Promises``, offering an even more straightforward and readable way to write asynchronous code.

### Example

```
async function doSomethingAsync(arg) {
    // do something with arg,
    // maybe async, then…
    return result;
}

async function doSomething() {
    try {
        const result = await doSomethingAsync(arg);
        // use the result
    } catch (error) {
        // handle the error
    }
}
```

[Async/Await](/async-programming/async-await/ReadMe.md)

## Async/Await vs Promises

Async/Await is built on top of Promises. It uses the same underlying mechanism. Async/Await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.

```
// Promises
doSomethingAsync()
    .then(result => doSomething(result))
    .then(newResult => doSomethingElse(newResult))
    .then(finalResult => console.log(finalResult))
    .catch(error => console.log(error));

// Async/Await
async function doAsync() {
    try {
        const result = await doSomethingAsync();
        const newResult = await doSomething(result);
        const finalResult = await doSomethingElse(newResult);
        console.log(finalResult);
    } catch (error) {
        console.log(error);
    }
}
```

## Async/Await vs Callbacks

Async/Await makes it easier to handle errors. You can use the try/catch statement to handle errors.

```

// Callbacks
doSomethingAsync(arg, function(result) {
    doSomething(result, function(result) {
        doSomethingElse(result, function(result) {
            doSomethingElseAgain(result, function(result) {
                doSomethingElseAgainAndAgain(result, function(result) {
                    doSomethingElseAgainAndAgainAndAgain(result, function(result) {
                        doSomethingElseAgainAndAgainAndAgainAndAgain(result, function(result) {
                            // ...
                        });
                    });
                });
            });
        });
    });
});

// Async/Await

async function doAsync() {
    try {
        const result = await doSomethingAsync(arg);
        const newResult = await doSomething(result);
        const finalResult = await doSomethingElse(newResult);
        console.log(finalResult);
    } catch (error) {
        console.log(error);
    }
}
```
