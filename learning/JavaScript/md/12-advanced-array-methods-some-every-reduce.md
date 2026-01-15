## More advanced array methods: some, every, reduce

These methods are extremely useful for QA/SDET work because they express validations and aggregations cleanly without manual loops.

Sample dataset:

~~~js
const products = [
  { id: 1, name: "Laptop",   price: 1500, inStock: true },
  { id: 2, name: "Mouse",    price: 20,   inStock: false },
  { id: 3, name: "Keyboard", price: 50,   inStock: true },
  { id: 4, name: "Monitor",  price: 230,  inStock: true },
];
~~~

## some() - at least ONE matches

`some()` returns `true` if **any** element satisfies the condition.

~~~js
const hasCheapProduct = products.some((p) => p.price < 100);
const hasOutOfStock = products.some((p) => p.inStock === false);
~~~

Use cases in testing:
- any error item exists
- any product is out of stock
- any user has an invalid role

## every() - ALL must match

`every()` returns `true` only if **all** elements satisfy the condition.

~~~js
const allInStock = products.every((p) => p.inStock);
const allAbove10 = products.every((p) => p.price > 10);
~~~

Use cases in testing:
- every API item has required fields
- every price is > 0
- every UI row matches formatting rules

## reduce() - combine into one value

`reduce()` collapses an array into a single value (sum, count, object, etc.).

Signature:
- `acc` = running result (accumulator)
- `item` = current element
- `initialValue` = starting value for `acc`

~~~js
const totalCost = products.reduce((acc, p) => acc + p.price, 0);
~~~

Counting is also common:

~~~js
const stockCount = products.reduce((acc, p) => (p.inStock ? acc + 1 : acc), 0);
~~~

## Combined validation scenario

Typical QA rule set:
- every product price > 0 (`every`)
- at least one premium product > 1000 (`some`)
- total inventory value computed (`reduce`)

~~~js
const validPrices = products.every((p) => p.price > 0);
const hasPremium = products.some((p) => p.price > 1000);
const sumPrices = products.reduce((acc, p) => acc + p.price, 0);
~~~

## Why this matters for testers

- Expressive assertions: “any”, “all”, and “sum/count” are common test expectations.
- Less boilerplate than loops: fewer bugs, clearer intent for reviewers.
- Strong for API checks: validate lists of objects from responses in a readable way.
- Helpful for reporting: compute totals, counts, and summaries for debug logs.

## Common mistakes / gotchas

- Confusing `some` vs `every`:
  - `some` = at least one, `every` = all.
- Empty array behavior:
  - `some([])` returns false.
  - `every([])` returns true (vacuously true), which can surprise testers.
- Forgetting `initialValue` in `reduce()`:
  - Can cause unexpected results or errors (especially for empty arrays).
- Returning wrong types in reduce:
  - Ensure the accumulator stays consistent (number stays number, etc.).
- Using these methods with side effects:
  - Keep callbacks focused on returning booleans or accumulator updates.
