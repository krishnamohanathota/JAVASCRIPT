## Callback

In JavaScript, callbacks are functions that are passed as arguments to other functions and are executed at a later point in time, often after the completion of an asynchronous operation.

They are essential for handling asynchronous code and providing a way to respond to events, control flow, and data processing in a non-blocking manner.

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

[Callback Hell](/async-programming/callback-hell/ReadMe.md)
