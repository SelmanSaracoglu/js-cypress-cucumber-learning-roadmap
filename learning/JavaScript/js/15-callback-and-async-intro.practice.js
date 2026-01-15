
// 15 - Callback and Async Intro (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// ------------------------------------------------------------
// Exercise 1: Synchronous order
// TODO: Log these lines in order:
// "Step 1: Preparing test plan"
// "Step 2: Writing test case"
// "Step 3: Executing test"
// Expected output:
// Step 1: Preparing test plan
// Step 2: Writing test case
// Step 3: Executing test

// ------------------------------------------------------------
// Exercise 2: Basic callback (not async)
// TODO:
// 1) Create function sayHello(name) that logs: "Hello <name>"
// 2) Create function processUser(name, callback) that logs:
//    - "Processing user: <name>"
//    - then calls callback(name)
//    - then logs "Finished processing user: <name>"
// 3) Call processUser("Selman", sayHello)
// Expected output:
// Processing user: Selman
// Hello Selman
// Finished processing user: Selman

// ------------------------------------------------------------
// Exercise 3: Async callback with setTimeout (ordering)
// TODO:
// 1) Log: "1) Test started"
// 2) setTimeout after 2000ms to log: "2) Server response received (after 2 seconds)"
// 3) Log immediately: "3) Writing log information"
// Expected output (order matters):
// 1) Test started
// 3) Writing log information
// 2) Server response received (after 2 seconds)

// ------------------------------------------------------------
// Exercise 4: Fake API call with callback
// TODO:
// 1) Write function fakeApiCall(endpoint, callback)
//    - logs: "[<endpoint>] request sent..."
//    - after 1500ms creates fakeResponse:
//      { status: 200, data: { message: "OK", endpoint: endpoint } }
//    - calls callback(fakeResponse)
// 2) Write function handleApiResponse(response) that logs exactly:
//    "Response received. Status: 200"
//    "Message: OK"
//    "Endpoint: /login"
// 3) Call: fakeApiCall("/login", handleApiResponse)
// Expected output (order):
// [/login] request sent...
// Response received. Status: 200
// Message: OK
// Endpoint: /login

// ------------------------------------------------------------
// Exercise 5: Use an anonymous callback (harder)
// TODO:
// 1) Call fakeApiCall("/users", function(response) { ... })
// 2) Inside the callback log exactly:
//    "Users API status: 200"
//    "Users API endpoint: /users"
// Expected output:
// [/users] request sent...
// Users API status: 200
// Users API endpoint: /users

// ------------------------------------------------------------
// Exercise 6: Multiple async calls (harder)
// TODO:
// 1) Call fakeApiCall twice: "/login" and "/products"
// 2) Each callback must log exactly:
//    "[DONE] <endpoint> status=200"
// Expected output (order may vary due to timing, but both lines must appear):
// [/login] request sent...
// [/products] request sent...
// [DONE] /login status=200
// [DONE] /products status=200

// ------------------------------------------------------------
// Mini QA scenario: Validate fake API response rules
// TODO:
// 1) Reuse fakeApiCall
// 2) Call fakeApiCall("/inventory", callback)
// 3) In callback validate rules using if/else and log exactly one line:
//    - PASS if response.status === 200 AND response.data.message === "OK"
//    - else FAIL
// 4) Log exactly:
//    "[INV] PASS" OR "[INV] FAIL"
// Expected output:
// [/inventory] request sent...
// [INV] PASS
