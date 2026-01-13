## console.log

`console.log()` prints values to the console (terminal or browser DevTools). 
It’s the fastest way to see what your code is doing at runtime.

~~~js
console.log("Hello");
console.log(123);
console.log(true);
~~~

You can log multiple values in one call:

~~~js
const name = "Selman";
console.log("Name:", name);
~~~

JavaScript prints the items in order, separated by spaces.

## Comments

Comments are ignored by JavaScript. They are used to explain intent or temporarily disable code while debugging.

### Single-line comments

Use `//` for one line.

~~~js
// console.log("This will not run");
~~~

### Multi-line comments

Use `/* ... */` for a block.

~~~js
/*
  Everything inside this block
  is ignored by JavaScript.
*/
~~~

## Variables (Java-friendly mental model)

Prefer `const` by default. Use `let` only when reassignment is required.

~~~js
const name = "Selman";
let age = 31;
age = age + 1;
~~~

## Why this matters for testers

- Quick debugging in Cypress: print extracted text, request payloads, or computed values.
- Debugging Cucumber step definitions: verify inputs and transformations.
- Faster root-cause analysis for flaky tests: log state right before assertions.
- Better failure context: log “expected vs actual” before validating.

## Common mistakes / gotchas

- Using logs instead of assertions (logs don’t validate behavior).
- Leaving too many logs in committed tests (noisy CI output).
- Confusing `+` with numbers vs strings (`"Age: " + 31` concatenates).
- Using `let` when `const` is enough (reduces readability and safety).
- Logging huge objects without formatting (hard to scan).
