

// Use const by default. Use let only when reassignment is needed.

// Exercise 1: Basic console.log
// TODO: Print "Hello" (string), 123 (number), and true (boolean) on separate lines.
console.log("Hello"); // Hello
console.log(123); // 123
console.log(true); // true


// Exercise 2: Single-line comment
// TODO: Write a console.log that prints "This should NOT run", then comment it out using //.
// console.log("This should NOT run") // (no output from the commented line)


// Exercise 3: Multi-line comment
// TODO: Create a multi-line comment that contains 2 lines of text (any text).
/*
 (no output from the comment)
 (no output from the comment)
*/

// Exercise 4: Logging multiple values
// TODO: Create const firstName = "Selman" and log: "Name:" and firstName in one console.log.
const firstName = "Selman"
console.log("Name:", firstName) // Name: Selman

// Exercise 5: Numbers and + operator
// TODO: Create let age = 31 and log: "Age next year:" and (age + 1).
let age = 31;
console.log("Age next year:", age + 1); // Age next year: 32

// Exercise 6: Update a let variable
// TODO: Increase age by 1 using reassignment, then log: "Updated age:" and age.
age = age + 1;
console.log("Updated Age:", age); // Updated age: 32

// Exercise 7: Build a single-line summary
// TODO: Create const country = "Germany" and log exactly this format: "I live in Germany."
const country = "Germany";
console.log("I live in", country); // I live in Germany.

// Exercise 8: Format like a test debug log (easy)
// TODO: Create const testName = "Login - valid user" and log: // "[TEST] Login - valid user"
const testName = "Login - valid user"
console.log("[TEST]", testName); // [TEST] Login - valid user

// Exercise 9: Format like a test debug log (harder)
// TODO: Create const statusCode = 200 and log in this exact format: // "[API] Status: 200"
const statusCode = 200;
console.log("[API] Status:", statusCode); // [API] Status: 200

// Exercise 10: Log “expected vs actual” (harder)
// TODO: Create const expectedTitle = "Dashboard" and const actualTitle = "Dashbord".
// TODO: Log in this exact format: // "Expected: Dashboard | Actual: Dashbord"
const expectedTitle = "Dashboard";
console.log("Expected:", expectedTitle + " | " + "Actual:", expectedTitle); // Expected: Dashboard | Actual: Dashbord

// Mini QA scenario: Validate a fake API response (logging only)
// TODO:
// 1) Create an object `response` with:
//    - status: 200
//    - users: an array with 3 user objects
//      Each user object must have: id (number), name (string), isActive (boolean)
// 2) Log the following lines in this exact format:
//    "[API] status=200"
//    "[API] totalUsers=3"
//    "[API] activeUsers=<number>"
//    "[API] inactiveUsers=<number>"
// 3) Do NOT use any test framework. Only console.log.
// Expected output:
// [API] status=200
// [API] totalUsers=3
// [API] activeUsers=2
// [API] inactiveUsers=1
