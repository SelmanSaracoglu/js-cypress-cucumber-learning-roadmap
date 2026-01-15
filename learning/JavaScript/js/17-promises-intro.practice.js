// 17 - Promises Intro (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// ------------------------------------------------------------
// Exercise 1: Simple Promise that resolves immediately
// TODO:
// 1) Log: "=== 1) Basic Promise example ==="
// 2) Create const simplePromise = new Promise((resolve, reject) => { resolve("Test data is ready"); });
// 3) Use then/catch to log exactly:
// "Then received: Test data is ready"
// Expected output:
// === 1) Basic Promise example ===
// Then received: Test data is ready

// ------------------------------------------------------------
// Exercise 2: Promise with async behavior (setTimeout)
// TODO:
// 1) Log: "=== 2) Async Promise with setTimeout ==="
// 2) Write function delayedSuccess() that returns a Promise:
//    - logs "Starting async operation..."
//    - after 1000ms resolves "Async operation finished successfully"
// 3) Call delayedSuccess() and in then() log:
//    "Then received: Async operation finished successfully"
// 4) Log immediately after calling delayedSuccess():
//    "This log runs BEFORE the async result (non-blocking)"
// Expected output (order):
// === 2) Async Promise with setTimeout ===
// Starting async operation...
// This log runs BEFORE the async result (non-blocking)
// Then received: Async operation finished successfully

// ------------------------------------------------------------
// Exercise 3: Fake API call with Promise (success path)
// TODO:
// 1) Log: "=== 3) QA scenario: Fake API + Promise ==="
// 2) Write function fakeApiCallWithPromise(endpoint) that returns a Promise:
//    - logs "[<endpoint>] request sent..."
//    - after 1500ms, if success is true resolve:
//      { status: 200, data: { message: "OK", endpoint: endpoint } }
//    - else reject("Request to " + endpoint + " failed")
// 3) Call fakeApiCallWithPromise("/login") and in then() log exactly:
//    "Response received. Status: 200"
//    "Message: OK"
//    "Endpoint: /login"
// Expected output (order):
// === 3) QA scenario: Fake API + Promise ===
// [/login] request sent...
// Response received. Status: 200
// Message: OK
// Endpoint: /login

// ------------------------------------------------------------
// Exercise 4: Fake API call with Promise (error path) (harder)
// TODO:
// 1) Modify fakeApiCallWithPromise so you can force success=false for this exercise.
// 2) Call fakeApiCallWithPromise("/login") with success=false.
// 3) In catch() log exactly:
//    "Error while calling API: Request to /login failed"
// Expected output:
// [/login] request sent...
// Error while calling API: Request to /login failed

// ------------------------------------------------------------
// Exercise 5: Mini challenge - call "/users" (harder)
// TODO:
// 1) Call fakeApiCallWithPromise("/users").
// 2) In then() log exactly:
//    "Users API status: 200"
// 3) In catch() log exactly:
//    "Users API error: <error>"
// Expected output (success path):
// [/users] request sent...
// Users API status: 200

// Mini QA scenario: Validate response object in then()
// TODO:
// 1) Call fakeApiCallWithPromise("/inventory").
// 2) In then(), validate with if/else:
//    PASS if response.status === 200 AND response.data.message === "OK"
//    else FAIL
// 3) Log exactly one line: "[INV] PASS" or "[INV] FAIL"
// Expected output:
// [/inventory] request sent...
// [INV] PASS
