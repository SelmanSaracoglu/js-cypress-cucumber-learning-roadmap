// 12 - Advanced array methods (some, every, reduce) (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Shared dataset for exercises
// TODO: Create const products exactly as below:
/// [
//   { id: 1, name: "Laptop",   price: 1500, inStock: true },
//   { id: 2, name: "Mouse",    price: 20,   inStock: false },
//   { id: 3, name: "Keyboard", price: 50,   inStock: true },
//   { id: 4, name: "Monitor",  price: 230,  inStock: true },
// ]

// Exercise 1: some() - any product cheaper than 100?
// TODO: Create hasCheapProduct using some() where price < 100.
// TODO: Log exactly: "Any cheap product? (some):" <value>
// Expected output:
// Any cheap product? (some): true

// Exercise 2: some() - any out-of-stock item?
// TODO: Create hasOutOfStock using some() where inStock === false.
// TODO: Log exactly: "Any out-of-stock item? (some):" <value>
// Expected output:
// Any out-of-stock item? (some): true

// Exercise 3: Tester rule using some() (easy)
// TODO: If hasOutOfStock is true log:
// "ERROR: At least one product is not available."
// else log:
// "PASS: All products available."
// Expected output:
// ERROR: At least one product is not available.

// Exercise 4: every() - are all products in stock?
// TODO: Create allInStock using every() with condition inStock is true.
// TODO: Log exactly: "Are all products in stock? (every):" <value>
// Expected output:
// Are all products in stock? (every): false

// Exercise 5: every() - are all products priced > 10?
// TODO: Create allAbove10 using every() where price > 10.
// TODO: Log exactly: "Are all products > 10? (every):" <value>
// Expected output:
// Are all products > 10? (every): true

// Exercise 6: Tester rule using every() (easy)
// TODO: If NOT allInStock log "FAIL: Some items are not available."
// else log "PASS: Inventory validated."
// Expected output:
// FAIL: Some items are not available.

// Exercise 7: reduce() - sum all product prices
// TODO: Create totalCost using reduce() to sum price values (start from 0).
// TODO: Log exactly: "Total cost (reduce):" <value>
// Expected output:
// Total cost (reduce): 1800

// Exercise 8: reduce() - count in-stock products
// TODO: Create stockCount using reduce() to count products where inStock is true (start from 0).
// TODO: Log exactly: "In-stock product count (reduce):" <value>
// Expected output:
// In-stock product count (reduce): 3

// Exercise 9: Tester rule using reduce result (harder)
// TODO: If totalCost < 1000 log "ERROR: Inventory value too low!"
// else log "PASS: Inventory meets expected pricing."
// Expected output:
// PASS: Inventory meets expected pricing.

// Exercise 10: Combined validation (harder)
// TODO:
// 1) Create validPrices = every product price > 0
// 2) Create hasPremium = some product price > 1000
// 3) Create sumPrices = reduce sum of all prices
// 4) Log exactly these lines:
// "Prices valid for ALL products?:" <value>
// "At least one premium product?:" <value>
// "Total price of all items:" <value>
// Expected output:
// Prices valid for ALL products?: true
// At least one premium product?: true
// Total price of all items: 1800

// Mini QA scenario: Validate API inventory business rules (no loops)
// TODO:
// 1) Create const apiResponse = { status: 200, data: products }.
// 2) Validate all rules (use some/every/reduce):
//    - status === 200
//    - every product has price > 0
//    - some product is premium (price > 1000)
//    - total price (sum) is >= 1500
// 3) Log exactly one line: "[API] PASS" or "[API] FAIL".
// Expected output:
// [API] PASS
