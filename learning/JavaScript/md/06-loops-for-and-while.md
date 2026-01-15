## Loops: for and while

Loops repeat actions. In test automation, loops are useful for processing lists (users, roles, responses), but they must be used carefully to avoid flaky behavior and infinite retries.

## for loop (known number of repetitions)

Use `for` when you know how many times to run, or when iterating by index.

~~~js
for (let i = 1; i <= 3; i++) {
  console.log(`for loop iteration: ${i}`);
}
~~~

## Iterating over an array with for

A common pattern is looping through an array using `i < array.length`.

~~~js
const roles = ["user", "admin", "tester"];

for (let i = 0; i < roles.length; i++) {
  console.log(`Role at index ${i}: ${roles[i]}`);
}
~~~

## while loop (repeat until condition becomes false)

Use `while` when the number of iterations depends on a condition. Always ensure the condition will eventually turn false.

~~~js
let attempts = 0;

while (attempts < 3) {
  attempts = attempts + 1;
  console.log(`while loop attempt: ${attempts}`);
}
~~~

## break (stop early)

`break` exits the loop immediately. Useful when you find what you are looking for.

~~~js
const numbers = [2, 4, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(`First odd number found: ${numbers[i]}`);
    break;
  }
}
~~~

## continue (skip current iteration)

`continue` skips the rest of the current iteration and moves to the next one.

~~~js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`Number (skipping 3): ${i}`);
}
~~~

## Why this matters for testers

- Data-driven checks: loop through arrays of users, roles, products, or validation rules.
- API response validations: verify each item meets conditions (e.g., all users have `id`, `email`, `isActive`).
- Debugging: quickly print each element to understand what the system returns.
- Safer test design: using `break` prevents unnecessary work once a condition is met.

## Common mistakes / gotchas

- Off-by-one errors:
  - Use `i < array.length`, not `i <= array.length`.
- Infinite loops in `while`:
  - Always update the variable that affects the condition.
- Using loops to “wait” in Cypress:
  - Avoid manual retry loops for UI waiting; Cypress already retries commands.
- Mutating loop counters incorrectly:
  - Reassigning `i` inside the loop often causes logic bugs.
- Forgetting `break`:
  - You keep looping even after finding the target item.
