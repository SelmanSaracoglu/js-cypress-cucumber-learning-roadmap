// 09 - Objects (deep usage) (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: Basic object access
// TODO: Create const user = { id: 1, name: "Ali", active: true }.
// TODO: Log user.name and user.active on separate lines.
// Expected output:
// Ali
// true

// Exercise 2: Nested object access
// TODO: Create const userProfile with:
// id: 10
// personal: { firstName: "Ali", lastName: "Yilmaz" }
// account: { email: "ali@test.com", roles: ["user", "tester"] }
// TODO: Log firstName and email on separate lines.
// Expected output:
// Ali
// ali@test.com

// Exercise 3: Update nested value
// TODO: Update userProfile.account.email to "newmail@test.com" and log it.
// Expected output:
// newmail@test.com

// Exercise 4: Check nested array includes (if/else)
// TODO: If userProfile.account.roles includes "admin" log "User is admin" else log "User is NOT admin".
// Expected output:
// User is NOT admin

// Exercise 5: Add new property dynamically
// TODO: Add userProfile.account.lastLogin = "2025-01-01" and log userProfile.account.
// Expected output:
// { email: 'newmail@test.com', roles: [ 'user', 'tester' ], lastLogin: '2025-01-01' }

// Exercise 6: Object with methods (calculator)
// TODO: Create const calculator with methods add(a,b) and multiply(a,b) that return results.
// TODO: Log calculator.add(3, 4) and calculator.multiply(2, 5).
// Expected output:
// 7
// 10

// Exercise 7: Deep condition check (harder)
// TODO: Create const product = {
//   name: "Laptop",
//   price: 1200,
//   stock: { available: true, count: 5 }
// }.
// TODO: If product.stock.available && product.stock.count > 0 log "Product can be purchased"
// else log "Product is out of stock".
// Expected output:
// Product can be purchased

// Exercise 8: Bracket notation with dynamic key (harder)
// TODO:
// 1) Create const config = { baseUrl: "https://example.com", timeoutMs: 5000 }.
// 2) Create const key = "timeoutMs".
// 3) Log exactly: "value: 5000" by accessing config using the key variable.
// Expected output:
// value: 5000

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
