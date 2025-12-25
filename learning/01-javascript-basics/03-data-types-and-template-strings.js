// 03 - Data types, typeof, and template strings
// This file covers the most common JavaScript data types
// and how to inspect and print them properly.

// String
const username = "testUser";
console.log(username);

// number
const loginAttempts = 2;
console.log(loginAttempts);

// boolean
const isLoggedIn = true;
console.log(isLoggedIn);

// undefined
let lastLoginTime;
console.log(lastLoginTime);

// object
const user = {
  name: "Ali",
  age: 30,
  active: true
};
console.log(user);

// typeof operator
console.log(typeof username);        // string
console.log(typeof loginAttempts);   // number
console.log(typeof isLoggedIn);      // boolean
console.log(typeof lastLoginTime);   // undefined
console.log(typeof user);            // object

// template strings (preferred over +)
const pageName = "Login";
const statusCode = 200;

console.log(`Navigating to ${pageName} page`);
console.log('Login finished with status code: ${statusCode}');

// Mini exercise outputs
const email = "test@test.com";
const attempts = 3;
const success = false;

console.log(
  `User ${email} tried ${attempts} times. Success: ${success}`
);
