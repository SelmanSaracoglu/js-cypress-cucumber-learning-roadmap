
## Common JavaScript data types

In Cypress + Cucumber projects, you will constantly handle strings (selectors, URLs, titles), numbers (counts, status codes), booleans (flags), objects (API responses), and `undefined` (missing values).

### string --> Text values.
~~~js
const username = "testUser";
console.log(username);
~~~

### number --> JavaScript has one number type for integers and decimals.
~~~js
const loginAttempts = 2;
console.log(loginAttempts);
~~~

### boolean --> True/false flags.
~~~js
const isLoggedIn = true;
console.log(isLoggedIn);
~~~

### undefined --> A variable declared with `let` but not assigned has the value `undefined`.
~~~js
let lastLoginTime;
console.log(lastLoginTime); // undefined
~~~

### object --> Objects store structured data (like JSON from APIs).
~~~js
const user = { name: "Ali", age: 30, active: true };
console.log(user);
~~~

## typeof operator --> `typeof` returns a string describing the type.
~~~js
console.log(typeof "abc");      // "string"
console.log(typeof 123);        // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof { a: 1 });   // "object"
~~~

Important gotcha: `typeof null` is `"object"` (historical JavaScript quirk).

## Template strings (template literals)
Use backticks `` ` ``, and `${...}` for interpolation. Prefer this over `+` concatenation because it’s cleaner and less error-prone.

~~~js
const pageName = "Login";
const statusCode = 200;

console.log(`Navigating to ${pageName} page`);
console.log(`Login finished with status code: ${statusCode}`);
~~~

Template strings also support multi-line strings easily.

## Why this matters for testers

- API testing: responses are objects (JSON). You need to inspect types before asserting.
- UI tests: selectors, titles, and error messages are strings; template strings make logs readable.
- Debugging flaky tests: `typeof` quickly reveals “why” something fails (string vs number vs undefined).
- Safer assertions: you can avoid false positives caused by type coercion.

## Common mistakes / gotchas

- Assuming uninitialized variables are empty strings; they are `undefined`.
- `typeof null` returns `"object"` (don’t use `typeof` alone to detect null).
- Logging objects and expecting a string; objects print as structures, not formatted messages.
- Using `+` for building messages and accidentally forcing string concatenation:
  - `"2" + 1` becomes `"21"`, not `3`.
- Forgetting backticks for template strings (using quotes breaks `${...}` interpolation).


