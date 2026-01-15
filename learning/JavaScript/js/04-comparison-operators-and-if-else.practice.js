
// 04 - Comparison operators and if / else (Practice)

// Exercise 1: == vs ===
// TODO: Create const a = 5 and const b = "5".
// TODO: Log the results with labels exactly:
// "a == b:" and the result
// "a === b:" and the result
const a = 5;
const b = "5";
console.log("a == b:", a == b);     // a == b: true
console.log("a === b:", a === b);   // a === b: false

// Exercise 2: != vs !==
// TODO: Using the same a and b, log with labels exactly:
// "a != b:" and the result
// "a !== b:" and the result
console.log("a != b:", a != b);     // a == b: true
console.log("a !== b:", a !== b);   // a === b: false

// Exercise 3: Simple pass/fail
// TODO: Create const score = 75.
// TODO: If score > 60 log "Test Passed" else log "Test Failed".
const score = 75;
if(score > 60 ) {
    console.log("Test Passed"); // Test Passed
} else {
    console.log("Test Failed");
}

// Exercise 4: Multiple branches (status code)
// TODO: Create const statusCode = 401.
// TODO: Use if/else if/else to print:
// - 200 => "Request successful"
// - 401 => "Unauthorized"
// - anything else => "Unexpected status code"
const statusCode = 401
if( statusCode === 200) {
    console.log("Request successful");
} else if (statusCode === 401) {
    console.log("Unauthorized");    // Unauthorized
} else {
    console.log("Unexpected status code");
}

// Exercise 5: Boolean condition (easy)
// TODO: Create const isLoggedIn = false.
// TODO: If isLoggedIn log "User is logged in" else log "User is not logged in".
const isLoggedIn = false;
if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in") // User is not logged in

}

// Exercise 6: Empty cart check (easy)
// TODO: Create const cartItems = 0.
// TODO: If cartItems === 0 log "Cart is empty" else log "Cart has items".
const cartItems = 0
if (cartItems === 0) {
    console.log("Cart is empty");
} else {
    console.log("Cart has items"); // Cart is empty
}

// Exercise 7: Strict checks for UI text (harder)
// TODO:
// 1) Create const uiCartCountText = "0" (string).
// 2) Compare it to number 0 using === and log:
//    "strict compare:" <result>
// 3) Compare it to number 0 using == and log:
//    "loose compare:" <result>
const uiCartCountText = "0";
console.log("strict compare:", uiCartCountText === 0);  // strict compare: false
console.log("loose compare:", uiCartCountText == 0);    // loose compare: true

// Exercise 8: Range classification (harder)
// TODO:
// 1) Create const responseTimeMs = 850.
// 2) Print exactly one of these based on ranges:
//    - <= 300 => "FAST"
//    - <= 800 => "OK"
//    - > 800  => "SLOW"

const responseTimeMs = 850
if (responseTimeMs <= 300) {
    console.log("FAST");
} else if (responseTimeMs >= 300 && responseTimeMs <= 800) {
    console.log("OK");
} else if (responseTimeMs > 800 ) {
    console.log("SLOW"); // SLOW
}


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
