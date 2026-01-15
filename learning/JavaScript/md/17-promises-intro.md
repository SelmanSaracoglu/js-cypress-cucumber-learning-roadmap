
## Promises Intro

Promises represent a value that will be available **now, later, or never**. They help you manage asynchronous operations (like API calls) without deeply nested callbacks.

A Promise has three states:
- **pending** (still running)
- **fulfilled** (resolved successfully)
- **rejected** (failed)

## 1) Basic Promise (resolve / reject)

A Promise is created with an executor function that receives `resolve` and `reject`.

~~~js
const simplePromise = new Promise((resolve, reject) => {
  resolve("Test data is ready");
  // reject("Something went wrong");
});

simplePromise
  .then((result) => console.log("Then received:", result))
  .catch((error) => console.log("Catch received:", error));
~~~

## 2) Promise with async behavior (setTimeout)

Promises are often used to wrap delayed work.

~~~js
function delayedSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Async operation finished successfully"), 1000);
  });
}

delayedSuccess().then((message) => console.log(message));
console.log("This runs before the async result");
~~~

Key point: JavaScript continues executing while the async operation is pending.

## 3) QA scenario: Fake API call using a Promise

A common pattern: return a Promise and resolve with a response object.

~~~js
function fakeApiCallWithPromise(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ status: 200, data: { message: "OK", endpoint } });
      } else {
        reject("Request to " + endpoint + " failed");
      }
    }, 1500);
  });
}
~~~

Consume with `.then()` for success and `.catch()` for failure.

## Why this matters for testers

- API calls and async tasks are Promise-based in many tools and helpers.
- Promises reduce “callback hell” and make async flows easier to read.
- Better error handling: one `.catch()` can handle failures cleanly.
- Foundation for `async/await` (which is just nicer syntax over Promises).

## Common mistakes / gotchas

- Forgetting to `return` the Promise from a helper function (caller can’t wait for it).
- Not handling errors:
  - Without `.catch()`, failures may be unhandled and confusing.
- Assuming async code blocks the next line (it does not).
- Mixing callbacks and Promises incorrectly (double-calling resolve/reject, or calling both).
- Cypress note:
  - Cypress commands are not standard Promises; don’t `.then()` them like normal Promises. Use Cypress chaining for Cypress commands and Promises for non-Cypress async helpers.
