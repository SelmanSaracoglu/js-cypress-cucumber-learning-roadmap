
## Advanced Array Methods: map, filter, find

In modern JavaScript test code, `map()`, `filter()`, and `find()` are used constantly to transform and validate API/UI datasets. They create cleaner code than manual `for` loops.

Example dataset (array of objects):

~~~js
const products = [
  { id: 1, name: "Laptop",   price: 1500, inStock: true },
  { id: 2, name: "Mouse",    price: 20,   inStock: false },
  { id: 3, name: "Keyboard", price: 50,   inStock: true },
  { id: 4, name: "Monitor",  price: 230,  inStock: true },
];
~~~

## map() - transform each element into a new array

`map()` creates a **new array** by transforming every element.

~~~js
const productNames = products.map((product) => product.name);
console.log(productNames); // ["Laptop", "Mouse", "Keyboard", "Monitor"]
~~~

Common patterns:
- extract fields (ids, names, prices)
- create labels (`"id - name"`)
- convert data into a new shape

~~~js
const productLabels = products.map((p) => `${p.id} - ${p.name}`);
~~~

## filter() - keep only items that match a condition

`filter()` creates a **new array** containing only elements where the callback returns `true`.

~~~js
const expensiveProducts = products.filter((p) => p.price > 100);
~~~

Common patterns:
- active users only
- in-stock items only
- negative testing (find items that should not exist)

~~~js
const outOfStockProducts = products.filter((p) => !p.inStock);
~~~

## find() - return the FIRST item that matches

`find()` returns the **first matching element** (an object) or `undefined` if not found.

~~~js
const productWithId3 = products.find((p) => p.id === 3);
~~~

Use `find()` when you need a single record (e.g., “user with this email”).

## Chaining methods (filter + map + includes)

You can chain methods to build readable data pipelines.

~~~js
const expensiveProductNames = products
  .filter((p) => p.price > 100)
  .map((p) => p.name);

const hasLaptop = expensiveProductNames.includes("Laptop");
~~~

## Why this matters for testers

- API testing: extract fields from `response.body.data` and validate expected values.
- UI testing: transform lists of DOM text into arrays and compare expected vs actual.
- Cleaner assertions: filter down to the relevant subset before checking.
- Faster debugging: map data into readable labels for logs.

## Common mistakes / gotchas

- Forgetting that `map`/`filter` return **new arrays** (they do not modify the original array).
- Assuming `find()` returns an array:
  - It returns a single element or `undefined`.
- Not handling “not found”:
  - Accessing properties of `undefined` will crash: `found.name` when `found` is undefined.
- Returning the wrong thing in callbacks:
  - `filter()` must return boolean-like (`true/false`), not the element itself.
- Mutating objects inside `map()`:
  - `map` is best used for transformation, not side effects.
