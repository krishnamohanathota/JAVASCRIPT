## Modules

A JavaScript module is a file that allows you to export its code. This allows other JavaScript files to import and use the exported code as their dependencies.

Specifically, a module is simply a JavaScript file that allows you to share its code with other files within your project (or with the world through package managers like Yarn and NPM)

Modules provide a way to organize and structure code by encapsulating its functionality. 

- Compose software : Modules are small building blocks that we put together to build complex applications.
- Isolate components : Each module is a separate unit of code, and its only responsibility is to handle its own code.
- Abstract code : Implement low level code in modules and import those abstracted modules into other modules.
- Organize code : Modules naturally lead to a more organized codebase.
- Reuse code : Modules allow us to easily reuse the same code across multiple projects.

`ES6` introduced a standardized module format to JavaScript. Exactly one module per file.

Before `ES6`, JavaScript did not have a module system. Developers used libraries like `CommonJS` and `AMD` to implement modules in JavaScript.

| | ES6 Modules | Script |
| --- | --- | --- |
|Type-level varaibles | Scoped to module | Global |
|Default mode | Strict | Sloppy |
|Top level this | Undefined | Window |
|Imports and exports | Yes | No |
|HTML linking | script type="module" | script |
|File Download | Asynchronous (i.e. defer) | Synchronous |

- The type="module" attribute tells the browser to load the script as an ES module.
- JavaScript defers ES modules automatically. So, you do not need to use a defer attribute in your module's `script` element
- `CORS policy`: The browser will not load a module if it is not served with the correct CORS headers. This means that you cannot load a module from a `file://` URL 
- JavaScript hoists `import` statements. So, you can define them anywhere in your module.

## named export
```html
<script type="module" src="module-2.js"></script>
```

```js
// module-1.js
const test = "Export Constant test";

function multiply(x, y) {
  return x * y;
}

export { test, multiply };
```

```js
// module-1.js
export const test = "Export Constant test";

export function multiply(x, y) {
  return x * y;
}
```

```js
// module-2.js
import { test, multiply} from "./module-1.js";

console.log(test);
console.log(multiply(2, 3));
```

- Rename imports
    
```js
// module-2.js
import { test as a, multiply as mul } from "./module-1.js";

console.log(a);
console.log(mul(2, 3));
```

- How to Rename Multiple Exports

```js
// module-1.js
const test = "Export Constant test";

function multiply(x, y) {
  return x * y;
}

export { test as t, multiply as m };
```

- Import All Exportable Items from an ES Module in One Go

```js
// module-2.js
import * as features from "./module-1.js";

console.log(features.test);
console.log(features.multiply(3, 5));
```

## default export (anonymous export / namelessly export)

Default export is a technique developers use to export code anonymously (namelessly).

The code will get exported with the special name, default instead of its original name (if it had one)

```js
// module-1.js
export default function multiply(x, y) {
  return x * y;
}
```

```js
// module-2.js
import multiply from "./module-1.js";

console.log(multiply(2, 3));
```

`NOTE` : 
- You `cannot` prepend the export default keyword to a `var`, `let`, or `const` keyword.
- you can use the default export technique to share a function, variable, string, class, or object literal.

In other words, the snippet below will throw a `SyntaxError`.

```
export default const test = "Export Constant test";
```

```js
// module-1.js
export default "Test";
```

```js
// module-2.js
import { default as test } from "./module-1.js";

console.log(test);//Test
```

```js
// module-2.js
import test from "./module-1.js";

console.log(test);//Test
```

## Aggregator File

An aggregator file is a script used solely to import and re-export the items you've exported from other modules.

In other words, instead of congesting your top-level module with multiple import statements from various files, you can create a single parent script (the aggregator file).

The parent script's sole purpose will be to import and re-export items from other modules.

Then, in your top-level module, you can simply import any required code from the aggregator file alone—not from numerous other scripts.

By so doing, you will make your top-level module neater.

```js
// module-1.js
export const var1 = "var1";

export function multiply(x, y) {
  return x * y;
}
```

```js
// module-2.js
export const var2 = "var2";
```

```js
// module-3.js
export const var3 = "var3";
```

```js
// aggregator.js
import { var1 as x, multiply as fun1 } from "./module-1.js";
import { var2 as y } from "./module-2.js";
import { var3 as z } from "./module-3.js";

export { x, y, z, fun1 };
```

```js
// main.js
import { x, y, z, fun1 } from "./aggregator.js";

console.log(x);//var1
console.log(y);//var2
console.log(z);//var3
console.log(fun1(2, 3));//6
```

## Load a Module Dynamically

To load your module conditionally or on-demand, use the import() syntax like so:

```js
import("./module/relative-path.js").then(function (module) { });
```

- The import() function returns a promise that resolves to the module you want to import.
- The import() function is asynchronous. So, you must use the then() method to access the module.

So, since the import() syntax returns a promise, you can also use the await keyword with it.

```js
const module = await import("./module/relative-path.js");
```

```js
// main.js
console.log("Dynamic Import Started");

async function test() {
  const module = await import("./aggregator.js");
  console.log(module.x);
  console.log(module.y);
  console.log(module.z);
  console.log(module.fun1(4, 3));
}

// Call the asynchronous function and wait for it to complete
test().then(() => {
  console.log("Dynamic Import & exeution is completed");
});
```
