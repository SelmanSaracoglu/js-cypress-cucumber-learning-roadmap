
## Array of objects

An array of objects is one of the most common data structures in testing. It mirrors real-world data such as user lists, product inventories, and API responses (JSON arrays).

## Create an array of objects

~~~js
const users = [
  { name: "Ali", role: "tester", active: true },
  { name: "Ayse", role: "admin", active: true },
  { name: "Mehmet", role: "user", active: false }
];

console.log(users);
~~~

## Access a single object in the array

Access the array item by index, then object property by dot notation.

~~~js
console.log(users[0].name);
console.log(users[1].role);
~~~

## Loop through the list

A typical pattern is iterating with a `for` loop.

~~~js
for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].name} is a ${users[i].role}`);
}
~~~

## Filter-like logic using a manual loop

You often need to print or validate only items that match a condition.

~~~js
for (let i = 0; i < users.length; i++) {
  if (users[i].active) {
    console.log(`${users[i].name} is active`);
  }
}
~~~

## Flag pattern (at least one match)

A common testing requirement: check if at least one item matches a rule (e.g., at least one admin exists).

~~~js
let adminFound = false;

for (let i = 0; i < users.length; i++) {
  if (users[i].role === "admin") {
    adminFound = true;
  }
}

if (adminFound) {
  console.log("Admin exists");
} else {
  console.log("No admin found");
}
~~~

## Why this matters for testers

- API response validation: many endpoints return arrays of objects (users, orders, products).
- Role/permission checks: confirm at least one admin exists, or no blocked users exist.
- Bulk assertions: verify every record meets requirements (e.g., all active users have emails).
- Test data generation: build realistic lists for parameterized tests.

## Common mistakes / gotchas

- Off-by-one errors:
  - Use `i < users.length`, not `i <= users.length`.
- Assuming all objects have the same shape:
  - Missing properties can cause `undefined` and break logic.
- Forgetting to reset flags between tests:
  - Reusing a `let adminFound` across scenarios can leak state.
- Mutating shared data:
  - Changing `users[i].role` can affect later validations if the same array is reused.
