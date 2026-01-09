// 04 - Comparison operators and if / else
// This file explains how JavaScript compares values and how decisions are made using if / else.

// Equality operators
const a = 5;
const b = "5";

console.log(a==b);      // true  (value comparison)
console.log(a===b);     // false (value + type comparison)

// Inequality operators
console.log(a != b);   // false
console.log(a !== b);  // true

const score = 75;

if (score > 60) {
    console.log("Test Passed");
} else {
    console.log("Test Failed");
}

// Multiple conditions
const statusCode = 401;

if (statusCode === 200) {
  console.log("Request successful");
} else if (statusCode === 401) {
  console.log("Unauthorized");
} else {
  console.log("Unexpected status code");
}

// Boolean condition
const isLoggedIn = false;

if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}


// Mini exercise outputs
const cartItems = 0;

if (cartItems === 0) {
  console.log("Cart is empty");
} else {
  console.log("Cart has items");
}