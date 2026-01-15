// 11 - Advanced Array Methods (map, filter, find) (Practice)
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

// Exercise 1: map() - extract names
// TODO: Create productNames using map() to extract name.
// TODO: console.log("Product names (map):", productNames)
// Expected output:
// Product names (map): [ 'Laptop', 'Mouse', 'Keyboard', 'Monitor' ]

// Exercise 2: map() - build "id - name" labels
// TODO: Create productLabels using map() => "1 - Laptop", ...
// TODO: console.log("Product labels (map):", productLabels)
// Expected output:
// Product labels (map): [ '1 - Laptop', '2 - Mouse', '3 - Keyboard', '4 - Monitor' ]

// Exercise 3: map() - extract prices
// TODO: Create productPrices using map() to extract price.
// TODO: console.log("Product prices (map):", productPrices)
// Expected output:
// Product prices (map): [ 1500, 20, 50, 230 ]

// Exercise 4: filter() - expensive products (> 100)
// TODO: Create expensiveProducts using filter() where price > 100.
// TODO: console.log("Expensive products (filter):", expensiveProducts)
// Expected output:
// Expensive products (filter): [
//   { id: 1, name: 'Laptop', price: 1500, inStock: true },
//   { id: 4, name: 'Monitor', price: 230, inStock: true }
// ]

// Exercise 5: filter() - in-stock products only
// TODO: Create inStockProducts using filter() where inStock is true.
// TODO: console.log("In-stock products (filter):", inStockProducts)
// Expected output:
// In-stock products (filter): [
//   { id: 1, name: 'Laptop', price: 1500, inStock: true },
//   { id: 3, name: 'Keyboard', price: 50, inStock: true },
//   { id: 4, name: 'Monitor', price: 230, inStock: true }
// ]

// Exercise 6: filter() - negative testing (out of stock)
// TODO: Create outOfStockProducts using filter() where inStock is false.
// TODO: If outOfStockProducts.length > 0 log:
// "ERROR: Out-of-stock items found:" and the array
// else log: "PASS: All products in stock."
// Expected output:
// ERROR: Out-of-stock items found: [ { id: 2, name: 'Mouse', price: 20, inStock: false } ]

// Exercise 7: find() - find product with id=3
// TODO: Create productWithId3 using find() id === 3.
// TODO: console.log("Product with id=3 (find):", productWithId3)
// Expected output:
// Product with id=3 (find): { id: 3, name: 'Keyboard', price: 50, inStock: true }

// Exercise 8: find() - find product named "Mouse"
// TODO: Create mouseProduct using find() name === "Mouse".
// TODO: console.log('Product named "Mouse" (find):', mouseProduct)
// Expected output:
// Product named "Mouse" (find): { id: 2, name: 'Mouse', price: 20, inStock: false }

// Exercise 9: find() - check existence safely (harder)
// TODO: Create laptopProduct using find() name === "Laptop".
// TODO: If laptopProduct exists log:
// "PASS: Laptop found:" and the object
// else log: "ERROR: Laptop not found!"
// Expected output:
// PASS: Laptop found: { id: 1, name: 'Laptop', price: 1500, inStock: true }

// Exercise 10: Chain filter + map + includes (harder)
// TODO:
// 1) Create expensiveProductNames = products.filter(price>100).map(name)
// 2) Log: "Expensive product names:" and the array
// 3) Create hasLaptop = expensiveProductNames.includes("Laptop")
// 4) Log: "Is Laptop in the expensive list?" and hasLaptop
// Expected output:
// Expensive product names: [ 'Laptop', 'Monitor' ]
// Is Laptop in the expensive list? true

// Mini QA scenario: Validate API inventory rules
// TODO:
// 1) Create const apiResponse = { status: 200, data: products }.
// 2) Rule: PASS if
//    - status === 200
//    - AND there are at least 3 in-stock products
//    - AND there are no in-stock products with price <= 0
// 3) Use filter/map/find/includes as needed (no for-loops).
// 4) Log exactly one line: "[INV] PASS" or "[INV] FAIL".
// Expected output:
// [INV] PASS
