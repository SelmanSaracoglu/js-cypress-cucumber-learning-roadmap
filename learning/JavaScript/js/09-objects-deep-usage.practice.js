// 09 - Objects (deep usage) (Practice)

// Exercise 1: Basic object access
// TODO: Create const user = { id: 1, name: "Ali", active: true }.
// TODO: Log user.name and user.active on separate lines.
const user = { id: 1, name: "Ali", active: true };
console.log(user.name); // Ali
console.log(user.active); // true


// Exercise 2: Nested object access
// TODO: Create const userProfile with:
// id: 10
// personal: { firstName: "Ali", lastName: "Yilmaz" }
// account: { email: "ali@test.com", roles: ["user", "tester"] }
// TODO: Log firstName and email on separate lines.
const userProfile = { id: 10,  
    personal: { firstName: "Ali", lastName: "Yilmaz" }, 
    account: {  email: "ali@test.com", roles: ["user", "tester"] } 
};

console.log(userProfile.personal.firstName);    // Ali
console.log(userProfile.account.email);         // ali@test.com

// Exercise 3: Update nested value
// TODO: Update userProfile.account.email to "newmail@test.com" and log it.
userProfile.account.email = "newmail@test.com"; 
console.log(userProfile.account.email); // newmail@test.com

// Exercise 4: Check nested array includes (if/else)
// TODO: If userProfile.account.roles includes "admin" log "User is admin" else log "User is NOT admin".
if (userProfile.account.roles.includes("admin")) {
    console.log("User is admin");
} else {
    console.log("User is NOT admin"); // User is NOT admin
}

// Exercise 5: Add new property dynamically
// TODO: Add userProfile.account.lastLogin = "2025-01-01" and log userProfile.account.
userProfile.account.lastLogin = "2025-01-01";
console.log(userProfile.account); // { email: 'newmail@test.com', roles: [ 'user', 'tester' ], lastLogin: '2025-01-01' }


// Exercise 6: Object with methods (calculator)
// TODO: Create const calculator with methods add(a,b) and multiply(a,b) that return results.
// TODO: Log calculator.add(3, 4) and calculator.multiply(2, 5).
const calculator = {
    add:(a, b) => a+b,
    multiply:(a, b) => a*b
};

console.log(calculator.add(3,4)); // 7
console.log(calculator.multiply(2,5)); // 10

// Exercise 7: Deep condition check (harder)
// TODO: Create const product = {
//   name: "Laptop",
//   price: 1200,
//   stock: { available: true, count: 5 }
// }.
// TODO: If product.stock.available && product.stock.count > 0 log "Product can be purchased"
// else log "Product is out of stock".

const product = {
   name: "Laptop",
   price: 1200,
   stock: { available: true, count: 5 }
}

if (product.stock.available && product.stock.count > 0) {
    console.log("Product can be purchased");    // Product can be purchased
} else {
    console.log("Product is out of stock");
}

// Exercise 8: Bracket notation with dynamic key (harder)
// TODO:
// 1) Create const config = { baseUrl: "https://example.com", timeoutMs: 5000 }.
// 2) Create const key = "timeoutMs".
// 3) Log exactly: "value: 5000" by accessing config using the key variable.
const config = { baseUrl: "https://example.com", timeoutMs: 5000 };
const key = "timeoutMs";

console.log(`value: ${config[key]}`); // value: 5000

// Mini QA scenario: Validate a fake API response object
// TODO:
// 1) Create const response = {
//    status: 200,
//    body: {
//      user: { id: 10, email: "ali@test.com", roles: ["user", "tester"] },
//      meta: { requestId: "req-123" }
//    }
// }.
// 2) Rule: API is OK if status === 200 AND body.user.email includes "@" AND roles includes "tester".
// 3) If OK log "[API] OK", else log "[API] NOT OK".
// 4) Log request id in this format: "[API] requestId=req-123"
// Expected output:
// [API] OK
// [API] requestId=req-123
