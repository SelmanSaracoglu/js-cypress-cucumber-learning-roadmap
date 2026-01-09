// 08 - Arrays: basics and common methods
// Arrays store ordered lists of values.
// In testing, arrays are used for test data sets.


const fruits = ["apple", "banana", "orange"];
console.log(fruits);

// Access by index
console.log(fruits[0]);
console.log(fruits[1]);

// length
console.log(fruits.length);

// push (add to end)
fruits.push("grape");
console.log(fruits);

// includes (check existence)
console.log(fruits.includes("banane"));
console.log(fruits.includes("pear"));

// Iterate over array (for loop)
for( let i = 0; i < fruits.length; i++) {
    console.log("Fruit ${i}: ${fruits[i]}");
}

// Mini exercise outputs
// 1) Create an empty array and push 3 roles into it
const roles = [];
roles.push("user");
roles.push("admin");
roles.push("tester");

console.log(roles);

// 2) Check if "admin" exists
if (roles.includes("admin")) {
    console.log("Admin role exists");
} else {
    console.log("Admin role does not exist");
}

// 3) Print the last element
console.log(roles[roles.length - 1]);