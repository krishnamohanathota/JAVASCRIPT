## CallBack Hell

[What is Callback?](/async-programming/callbacks/ReadMe.md)

Asynchronous operations that require multiple nested callbacks can lead to a phenomenon known as "callback hell" or "pyramid of doom." This occurs when the code structure becomes deeply nested and hard to read due to multiple levels of callbacks. This makes the code difficult to maintain, debug, and understand.

### Example

```
function doSomethingAsync(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

function doSomething(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

function doSomethingElse(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

function doSomethingElseAgain(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

function doSomethingElseAgainAndAgain(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

function doSomethingElseAgainAndAgainAndAgain(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

function doSomethingElseAgainAndAgainAndAgainAndAgain(arg, callback) {
    // do something with arg,
    // maybe async, then invoke callback:
    callback(result);
}

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
```
