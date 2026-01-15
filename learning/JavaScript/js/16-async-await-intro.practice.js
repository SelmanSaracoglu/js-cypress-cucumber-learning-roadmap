// 16 - Async/Await Intro (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// ------------------------------------------------------------
// Exercise 1: Convert Promise.resolve to async/await
// TODO:
// 1) Write function getData() that returns Promise.resolve("Data received successfully").
// 2) Write async function runExample1() that logs:
//    "=== Example 1 ==="
//    then awaits getData() and logs the result.
// 3) Call runExample1().
// Expected output:
// === Example 1 ===
// Data received successfully

// ------------------------------------------------------------
// Exercise 2: Await a timeout-based Promise
// TODO:
// 1) Write function delayMessage() that returns a Promise.
// 2) Inside it, setTimeout 1000ms then resolve("Done waiting (1 second)").
// 3) Write async function runExample2() that logs:
//    "=== Example 2 ==="
//    "Start"
//    awaits delayMessage()
//    logs the resolved message
//    "End"
// 4) Call runExample2().
// Expected output (order):
// === Example 2 ===
// Start
// Done waiting (1 second)
// End

// ------------------------------------------------------------
// Exercise 3: Fake API call that returns a Promise
// TODO:
// 1) Write function fakeApiCall(endpoint) returning a Promise.
// 2) After 1200ms, resolve("Response OK from " + endpoint).
// 3) Write async function runApiTests() that logs:
//    "=== Example 3 (QA scenario) ==="
//    then awaits these in order and logs each response line:
//    /login, /users, /dashboard
//    then logs: "All API calls completed"
// 4) Call runApiTests().
// Expected output (order):
// === Example 3 (QA scenario) ===
// Response OK from /login
// Response OK from /users
// Response OK from /dashboard
// All API calls completed

// ------------------------------------------------------------
// Exercise 4: Add another endpoint (harder)
// TODO:
// 1) In runApiTests(), add another awaited call for "/settings".
// 2) Log its response in order before "All API calls completed".
// Expected output (order):
// Response OK from /login
// Response OK from /users
// Response OK from /dashboard
// Response OK from /settings
// All API calls completed

// ------------------------------------------------------------
// Exercise 5: Error handling with try/catch (harder)
// TODO:
// 1) Write function fakeApiCallMayFail(endpoint) that returns a Promise.
// 2) If endpoint === "/fail", reject with "Server error" after 500ms.
//    Otherwise resolve("Response OK from " + endpoint) after 500ms.
// 3) Write async function runErrorExample() that:
//    - logs "=== Error Example ==="
//    - uses try/catch to await fakeApiCallMayFail("/fail")
//    - in catch, logs exactly: "Caught error: Server error"
// 4) Call runErrorExample().
// Expected output:
// === Error Example ===
// Caught error: Server error

// Mini QA scenario: Sequential API validation with status-like messages
// TODO:
// 1) Write function fakeApi(endpoint) that returns a Promise resolving an object:
//    { status: 200, endpoint: endpoint, message: "OK" } after 600ms.
// 2) Write async function validateFlow() that awaits endpoints in order:
//    "/login", "/users", "/dashboard"
// 3) For each response, log exactly:
//    "[API] <endpoint> status=200 message=OK"
// 4) After all, log: "[API] FLOW DONE"
// Expected output:
// [API] /login status=200 message=OK
// [API] /users status=200 message=OK
// [API] /dashboard status=200 message=OK
// [API] FLOW DONE
