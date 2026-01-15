// 08 - Arrays: basics and common methods (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: Create and log an array
// TODO: Create const fruits = ["apple", "banana", "orange"] and log it.

const fruits = ["apple", "banana", "orange"]
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

// Exercise 2: Access by index
// TODO: Using the same fruits array, log the first two items on separate lines.

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana

// Exercise 3: length
// TODO: Log the length of fruits.

console.log(fruits.length); // 3

// Exercise 4: push
// TODO: Push "grape" into fruits and then log fruits.
// Expected output:
// [ 'apple', 'banana', 'orange', 'grape' ]

fruits.push("grape");
console.log(fruits);

// Exercise 5: includes
// TODO: Log whether fruits includes "banana" and whether it includes "pear".

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("pear")); // false


// Exercise 6: Iterate with for loop
// TODO: Loop over fruits and log exactly in this format:
// "Fruit 0: apple"
// "Fruit 1: banana"
// ...

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i}: ${fruits[i]}`);
}

// Exercise 7: Build roles array (easy)
// TODO: Create const roles = [] and push: "user", "admin", "tester".
// TODO: Log roles.

const roles = []
roles.push("user", "admin", "tester");
console.log(roles); // [ 'user', 'admin', 'tester' ]

// Exercise 8: Check existence with includes + if/else (harder)
// TODO: If roles includes "admin" log "Admin role exists" else log "Admin role does not exist".
if (roles.includes("admin")) {
    console.log("Admin role exists"); // Admin role exists
} else {
    console.log("Admin role does not exist");
}

// Exercise 9: Print the last element (harder)
// TODO: Log the last element of roles.
console.log(roles[roles.length-1]); // tester



// Mini QA scenario: Validate a fake UI menu items list
// TODO:
// 1) Create const menuItems = ["Home", "Products", "Cart", "Login"].
// 2) Check if "Cart" exists using includes.
// 3) If it exists, log "[UI] Cart menu present", else log "[UI] Cart menu missing".
// 4) Log the last menu item in this format: "[UI] last=<value>"
// Expected output:
// [UI] Cart menu present
// [UI] last=Login
