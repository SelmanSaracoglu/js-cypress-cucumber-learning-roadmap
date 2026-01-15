## Arrays: basics and common methods

Arrays store ordered lists of values. In QA automation, arrays are often used for test data sets, lists of roles, lists of UI items, and API response collections.

## Create an array

~~~js
const fruits = ["apple", "banana", "orange"];
console.log(fruits);
~~~

## Access by index

Indexes start at `0`.

~~~js
console.log(fruits[0]); // first item
console.log(fruits[1]); // second item
~~~

## length

`length` tells how many items are in the array.

~~~js
console.log(fruits.length);
~~~

## push (add to the end)

`push()` adds a new item to the end of the array and changes the array.

~~~js
fruits.push("grape");
console.log(fruits);
~~~

## includes (check existence)

`includes()` returns `true` if the value exists in the array, otherwise `false`.

~~~js
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("pear"));   // false
~~~

## Iterate over an array (for loop)

Use `i < array.length` to avoid out-of-bounds errors.

~~~js
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i}: ${fruits[i]}`);
}
~~~

## Why this matters for testers

- Data-driven testing: loop over a list of roles/users/products to run similar checks.
- UI lists: validate that a page renders expected items (e.g., menu entries, table rows).
- API responses: validate every object in a returned list meets required rules.
- Cleaner test setup: build test data arrays (roles, permissions, fixture values) and reuse them.

## Common mistakes / gotchas

- Off-by-one loop bugs:
  - Use `i < arr.length`, not `i <= arr.length`.
- Mutating arrays declared with `const`:
  - Allowed (push, update indexes) because the reference stays the same.
- Confusing `includes()` behavior:
  - It checks exact values; case-sensitive for strings (`"Admin"` != `"admin"`).
- Accessing last element incorrectly:
  - Use `arr[arr.length - 1]`, not `arr[arr.length]` (that is `undefined`).
