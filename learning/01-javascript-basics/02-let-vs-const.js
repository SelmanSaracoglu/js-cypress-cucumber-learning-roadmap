// 02 - let vs const
// This file explains when to use let and when to use const.
// In Cypress projects, const is preferred by default.


// let: value CAN be reassigned
let attempts = 0;
console.log(attempts);

attempts = attempts + 1;
console.log(attempts);

// const: value CANNOT be reassigned
const baseUrl = "https://example.com";
console.log(baseUrl);

// const with objects
// The reference is constant, but object properties can change
const user = {
    name: "Ali",
    role: "tester"
};

// const user = { name: "Veli" }; ❌ SyntaxError

console.log(user);

// const with arrays
const users = [
  { name: "Ali", role: "tester" },
  { name: "Veli", role: "admin" },
  { name: "Ayşe", role: "user" },
  { name: "Fatma", role: "user" },
  { name: "Mehmet", role: "tester" }
];
console.log(users);

// users = []; // ❌

users[0].role = "admin"; // ✅
users.push({ name: "Selin", role:"developer"  });
console.log(users);



// Mini exercise outputs
const email ="test@test.com";
let loginCount = 0;

loginCount = loginCount + 1;

console.log(email);
console.log(loginCount);

