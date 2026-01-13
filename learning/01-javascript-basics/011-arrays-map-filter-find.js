
// TOPIC: Advanced Array Methods (map, filter, find)

// EXAMPLE DATA: Product list from an e-commerce app

const products = [
  { id: 1, name: "Laptop",   price: 1500, inStock: true },
  { id: 2, name: "Mouse",    price: 20,   inStock: false },
  { id: 3, name: "Keyboard", price: 50,   inStock: true },
  { id: 4, name: "Monitor",  price: 230,  inStock: true },
];


// 1) map() - transforms every element into something new
// =====================================================
// Use map() when you want to create a NEW array based on the values of an existing array.
// const newArray = oldArray.map((element, index, array) => { return ... })
//
// TEST USAGE EXAMPLES:
// - Extract only IDs from API response
// - Pull all product names from UI list
// - Convert objects to formatted text labels
// -----------------------------------------------------

// Example 1: Get all product names
const productNames = products.map(function (product) { 
  return product.name; //(product => product.name);
});

console.log("Product names (map):", productNames); // ["Laptop", "Mouse", "Keyboard", "Monitor"]

// Example 2: Convert into "id - name" labels
const productLabels = products.map(function (product) {
  return `${product.id} - ${product.name}`;
});

console.log("Product labels (map):", productLabels); // ["1 - Laptop", "2 - Mouse", ...]

// Example 3: Extract only prices
const productPrices = products.map(product => product.price);

console.log("Product prices (map):", productPrices); // [1500, 20, 50, 230]

// 2) filter() - returns only elements matching a condition
// =====================================================
// Use filter() when you want to **reduce the dataset** and keep only items meeting a requirement.
// const filtered = oldArray.filter((element) => { return true/false })
//
// TEST USAGE EXAMPLES:
// - Filter only active users
// - Filter results returned by API
// - Identify items that should NOT appear (negative testing)
// -----------------------------------------------------

// Example 1: Products costing more than 100
const expensiveProducts = products.filter(function (product) {
  return product.price > 100;
});
console.log("Expensive products (filter):", expensiveProducts); // Laptop, Monitor

// Example 2: In-stock products only
const inStockProducts = products.filter(product => product.inStock);
console.log("In-stock products (filter):", inStockProducts); // Laptop, Keyboard, Monitor

// Example 3: Negative testing sample
const outOfStockProducts = products.filter(product => !product.inStock);
if (outOfStockProducts.length > 0) {
  console.log("ERROR: Out-of-stock items found:", outOfStockProducts);
} else {
  console.log("PASS: All products in stock.");
}

// 3) find() - returns the FIRST element matching a condition
// =====================================================
// Use find() when you want **one specific object** instead of multiple.
// const item = oldArray.find((element) => true)
//
// TEST USAGE EXAMPLES:
// - Find one user by username/email
// - Pull a specific product from response
// - Validate existence of a particular item
// -----------------------------------------------------

// Example 1: Find product with id = 3
const productWithId3 = products.find(product => product.id === 3);
console.log("Product with id=3 (find):", productWithId3); // { id: 3, name: "Keyboard", ... }

// Example 2: Find product named "Mouse"
const mouseProduct = products.find(product => product.name === "Mouse");
console.log('Product named "Mouse" (find):', mouseProduct); // { id: 2, name: "Mouse", price: 20 }

// Example 3: Assert that Laptop exists
const laptopProduct = products.find(product => product.name === "Laptop");
if (laptopProduct) {
  console.log("PASS: Laptop found:", laptopProduct);
} else {
  console.log("ERROR: Laptop not found!");
}

// MINI COMBO: filter + map + includes
// =====================================================
// Scenario:
// From all products, select those costing >100,
// list only their names,
// check whether "Laptop" is listed.
// -----------------------------------------------------

const expensiveProductNames = products
  .filter(product => product.price > 100)
  .map(product => product.name);
console.log("Expensive product names:", expensiveProductNames); // ["Laptop", "Monitor"]

const hasLaptop = expensiveProductNames.includes("Laptop");
console.log("Is Laptop in the expensive list?", hasLaptop); // true

// In Cypress: // expect(hasLaptop).to.be.true
//
// In API testing: // assert data list contains expected item
// =====================================================
