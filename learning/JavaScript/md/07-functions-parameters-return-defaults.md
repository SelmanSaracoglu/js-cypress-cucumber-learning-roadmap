## Functions: parameters, return values, default parameters

Functions help you reuse logic and keep code readable. 
In QA automation, functions are used to build test data, validate responses, format logs, 
and avoid repeating the same steps.

## Function with parameters

Parameters are inputs to a function.

~~~js
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Selman");
greet("Hanse");
~~~

## Return values

`return` sends a value back to the caller. This is critical for validations because you can use the returned value in conditions and assertions.

~~~js
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result);
~~~

## Why return matters (boolean functions)

A common pattern is returning `true`/`false` from validation functions.

~~~js
function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
~~~

You can usually simplify this pattern:

~~~js
function isAdult(age) {
  return age >= 18;
}
~~~

## Default parameters

Default parameters are used when an argument is missing or `undefined`.

~~~js
function login(username, password = "123456") {
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
}

login("test user");              // uses default password
login("adminUser", "adminPass"); // overrides default
~~~

## Arrow functions

Arrow functions are common in modern JavaScript codebases.

### Arrow function with block + return

~~~js
const multiply = (x, y) => {
  return x * y;
};
~~~

### Short arrow function (implicit return)

If there is a single expression, you can omit `{}` and `return`.

~~~js
const square = (n) => n * n;
~~~

## Why this matters for testers

- Reusable validations: e.g., `isValidEmail()`, `isStatusOk()`, `hasRequiredFields()`.
- Cleaner Cypress code: helper functions to generate data or format outputs for debugging.
- More readable step definitions: functions keep Given/When/Then steps short and focused.
- Consistent logic: a single function prevents “same check implemented 5 different ways”.

## Common mistakes / gotchas

- Forgetting to return:
  - If a function does not return, it returns `undefined` by default.
- Confusing “printing” with “returning”:
  - `console.log()` shows output; it does not give a value to the caller.
- Default parameters only apply when the argument is `undefined`:
  - Passing `""` (empty string) or `null` does not trigger the default.
- Arrow function syntax differences:
  - With `{}` you must write `return`.
  - Without `{}` the expression is returned automatically.
