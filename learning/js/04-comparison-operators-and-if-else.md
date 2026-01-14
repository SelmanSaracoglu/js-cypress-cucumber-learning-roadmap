## Comparison operators

JavaScript compares values using equality/inequality and relational operators. In testing, comparisons drive branching logic (e.g., handling status codes, conditional UI states).

## == vs === (important)

- `==` (loose equality) compares values after type coercion.
- `===` (strict equality) compares value **and** type.

~~~js
const a = 5;
const b = "5";

console.log(a == b);   // true  (value comparison with coercion)
console.log(a === b);  // false (no coercion, types differ)
~~~

In test code, prefer `===` and `!==` to avoid surprises.

## != vs !==

- `!=` is loose inequality (with coercion).
- `!==` is strict inequality (no coercion).

~~~js
console.log(a != b);   // false
console.log(a !== b);  // true
~~~

## Relational operators

Common ones:
- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal

~~~js
const score = 75;

if (score > 60) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}
~~~

## if / else and else if

Use `if` to run code only when a condition is true.
Use `else if` for multiple branches.

~~~js
const statusCode = 401;

if (statusCode === 200) {
  console.log("Request successful");
} else if (statusCode === 401) {
  console.log("Unauthorized");
} else {
  console.log("Unexpected status code");
}
~~~

## Boolean conditions

If the condition is already a boolean, you can use it directly.

~~~js
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}
~~~

## Why this matters for testers

- API testing: branch by `statusCode` (200 vs 401 vs 500) and log the correct message.
- UI testing: handle conditional states (empty cart vs cart has items, element visible vs not).
- Prevent flaky logic: strict comparisons reduce hidden type conversions.
- Cleaner step definitions: readable decision logic in Cucumber steps.

## Common mistakes / gotchas

- Using `==` instead of `===` and accidentally passing comparisons due to coercion.
  - Example: `0 == false` is true (coercion), but `0 === false` is false.
- Comparing numbers and strings coming from UI text without converting:
  - `"75" > 60` can behave unexpectedly if you don’t control types.
- Forgetting that `if (value)` checks truthiness, not “equals true”.
  - `if ("")` is false, `if ("0")` is true, `if (0)` is false.
- Using too many nested `if` blocks instead of `else if` (harder to read/maintain).
