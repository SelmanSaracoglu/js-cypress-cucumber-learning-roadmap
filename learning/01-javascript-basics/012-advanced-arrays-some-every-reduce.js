
// TOPIC: more advanced array methods (some, every, reduce)

// These methods are extremely powerful when validating data, 
// performing aggregations, or checking business logic rules.

// SAMPLE DATA

const products = [
  { id: 1, name: "Laptop",   price: 1500, inStock: true },
  { id: 2, name: "Mouse",    price: 20,   inStock: false },
  { id: 3, name: "Keyboard", price: 50,   inStock: true },
  { id: 4, name: "Monitor",  price: 230,  inStock: true },
];

// 1) some() – Returns TRUE if at least ONE element matches
// =====================================================
// const result = array.some((element) => condition)
// TEST USAGE:
// - Check if any product is out of stock
// - Check if the response contains error items
// - Check if UI includes a required element
// -----------------------------------------------------

// Example 1: Is there ANY product cheaper than 100?
const hasCheapProduct = products.some(product => product.price < 100);
console.log("Any cheap product? (some):", hasCheapProduct); // true (Mouse + Keyboard are < 100)

// Example 2: Does ANY item have inStock == false?
const hasOutOfStock = products.some(product => product.inStock === false);
console.log("Any out-of-stock item? (some):", hasOutOfStock); // true (Mouse)

// Example 3: Tester mindset
// "Fail if ANY out-of-stock product exists"
if (hasOutOfStock) {
  console.log("ERROR: At least one product is not available.");
} else {
  console.log("PASS: All products available.");
}

// 2) every() – Returns TRUE only if ALL match the condition
// =====================================================
// const result = array.every((element) => condition)
// TEST USAGE:
// - Verify every API item meets a required rule
// - Ensure all users have valid roles
// - Confirm every UI entry is formatted correctly
// -----------------------------------------------------

// Example 1: Are ALL products in stock?
const allInStock = products.every(product => product.inStock);
console.log("Are all products in stock? (every):", allInStock); // false

// Example 2: Do ALL products cost more than 10?
const allAbove10 = products.every(product => product.price > 10);
console.log("Are all products > 10? (every):", allAbove10); // true


// Example 3: Tester mindset
// "Only pass if EVERY product is available"
if (!allInStock) {
  console.log("FAIL: Some items are not available.");
} else {
  console.log("PASS: Inventory validated.");
}

// 3) reduce() – Combine all elements into a single value
// =====================================================
// const value = array.reduce((accumulator, element) => { ... }, initialValue)
// Terms:
// accumulator = running result
// element     = current array item
//
// TEST USAGE:
// - Sum response values (price, score, quantity)
// - Count matching elements
// - Flatten nested arrays (advanced use)
// -----------------------------------------------------

// Example 1: Sum all product prices
const totalCost = products.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log("Total cost (reduce):", totalCost); // 1500 + 20 + 50 + 230 = 1800

// Example 2: Count how many products are in stock
const stockCount = products.reduce((acc, product) => {
  if (product.inStock) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log("In-stock product count (reduce):", stockCount); // 3


// Example 3: Tester mindset
// "Fail if total price of inventory is below expected threshold"
if (totalCost < 1000) {
  console.log("ERROR: Inventory value too low!");
} else {
  console.log("PASS: Inventory meets expected pricing.");
}


// =====================================================
// DEMO: Combined Usage Scenario
// =====================================================
//
// Scenario:
// You receive an API response containing product objects.
// You must validate:
// - Every product has a price above 0        (every)
// - At least one product is over 1000       (some)
// - Sum of prices is printed                (reduce)
//
// -----------------------------------------------------

const validPrices = products.every(product => product.price > 0);
const hasPremium = products.some(product => product.price > 1000);
const sumPrices = products.reduce((acc, product) => acc + product.price, 0);

console.log("Prices valid for ALL products?:", validPrices);
// true
console.log("At least one premium product?:", hasPremium);
// true (Laptop)
console.log("Total price of all items:", sumPrices);
// 1800

// In Cypress or API tests:
// expect(validPrices).to.be.true
// expect(hasPremium).to.be.true
// expect(sumPrices).to.be.greaterThan(1000)
//
// =====================================================
