
// 04 - Comparison operators and if / else (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: == vs ===
// TODO: Create const a = 5 and const b = "5".
// TODO: Log the results with labels exactly:
// "a == b:" and the result
// "a === b:" and the result
// Expected output:
// a == b: true
// a === b: false

// Exercise 2: != vs !==
// TODO: Using the same a and b, log with labels exactly:
// "a != b:" and the result
// "a !== b:" and the result
// Expected output:
// a != b: false
// a !== b: true

// Exercise 3: Simple pass/fail
// TODO: Create const score = 75.
// TODO: If score > 60 log "Test Passed" else log "Test Failed".
// Expected output:
// Test Passed

// Exercise 4: Multiple branches (status code)
// TODO: Create const statusCode = 401.
// TODO: Use if/else if/else to print:
// - 200 => "Request successful"
// - 401 => "Unauthorized"
// - anything else => "Unexpected status code"
// Expected output:
// Unauthorized

// Exercise 5: Boolean condition (easy)
// TODO: Create const isLoggedIn = false.
// TODO: If isLoggedIn log "User is logged in" else log "User is not logged in".
// Expected output:
// User is not logged in

// Exercise 6: Empty cart check (easy)
// TODO: Create const cartItems = 0.
// TODO: If cartItems === 0 log "Cart is empty" else log "Cart has items".
// Expected output:
// Cart is empty

// Exercise 7: Strict checks for UI text (harder)
// TODO:
// 1) Create const uiCartCountText = "0" (string).
// 2) Compare it to number 0 using === and log:
//    "strict compare:" <result>
// 3) Compare it to number 0 using == and log:
//    "loose compare:" <result>
// Expected output:
// strict compare: false
// loose compare: true

// Exercise 8: Range classification (harder)
// TODO:
// 1) Create const responseTimeMs = 850.
// 2) Print exactly one of these based on ranges:
//    - <= 300 => "FAST"
//    - <= 800 => "OK"
//    - > 800  => "SLOW"
// Expected output:
// SLOW

// Mini QA scenario: Handle login API result
// TODO:
// 1) Create const loginResponse = { status: 401, message: "Invalid token" }.
// 2) Use strict comparisons on loginResponse.status.
// 3) Log exactly:
//    - 200 => "[LOGIN] success"
//    - 401 => "[LOGIN] unauthorized: Invalid token"
//    - otherwise => "[LOGIN] unexpected status: <status>"
// Expected output:
// [LOGIN] unauthorized: Invalid token
