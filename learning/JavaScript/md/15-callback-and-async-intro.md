## Synchronous vs Callback vs Async (Intro)

This topic introduces:
- **Synchronous code** (runs top-to-bottom)
- **Callbacks** (a function passed into another function)
- **Asynchronous callbacks** (scheduled to run later, e.g., `setTimeout`)

## 1) Synchronous JavaScript

Synchronous code runs line by line in order.

~~~js
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
~~~

Output order is always: Step 1 → Step 2 → Step 3.

## 2) Callback functions (not async yet)

A callback is a function passed as an argument and executed later by another function.

~~~js
function sayHello(name) {
  console.log("Hello " + name);
}

function processUser(name, callback) {
  console.log("Processing user: " + name);
  callback(name);
  console.log("Finished processing user: " + name);
}

processUser("Selman", sayHello);
~~~

Here, `processUser()` decides **when** to call the callback.

## 3) Async callback with setTimeout

`setTimeout` schedules work for later. JavaScript continues running without waiting.

~~~js
console.log("1) Test started");

setTimeout(() => {
  console.log("2) Server response received");
}, 2000);

console.log("3) Writing log information");
~~~

Expected order:
1) Test started  
3) Writing log information  
(then later) 2) Server response received

## 4) Fake API simulation using callbacks

A common QA pattern: a function performs a request and calls a callback when it “finishes”.

~~~js
function fakeApiCall(endpoint, callback) {
  console.log("[" + endpoint + "] request sent...");

  setTimeout(() => {
    const fakeResponse = { status: 200, data: { message: "OK", endpoint } };
    callback(fakeResponse);
  }, 1500);
}
~~~

## Why this matters for testers

- **API testing is async**: responses arrive later, so you must handle timing correctly.
- **Cypress commands are async-like**: understanding ordering prevents flaky tests.
- **Callbacks are everywhere**: event handlers, intercept response handlers, custom helpers.
- Helps you reason about **what runs now vs later**, which is the root of many test bugs.

## Common mistakes / gotchas

- Assuming `setTimeout` “pauses” code (it does not).
- Expecting logs/assertions after `setTimeout` to run in sequence without planning.
- Forgetting to call the callback inside an async function (tests appear stuck).
- Using a variable set “later” immediately “now” (race conditions).
- Cypress-specific: mixing plain async code with Cypress command chains without understanding the execution order can cause flaky tests.
