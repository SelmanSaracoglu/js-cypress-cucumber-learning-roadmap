## Async/Await Intro

`async/await` is syntax built on top of Promises. It lets you write asynchronous code that looks synchronous, which is easier to read and maintain in QA automation.

## 1) Awaiting a Promise result

If a function returns a Promise, you can `await` it inside an `async` function.

~~~js
function getData() {
  return Promise.resolve("Data received successfully");
}

async function runExample() {
  const result = await getData();
  console.log(result);
}
~~~

## 2) Converting setTimeout to a Promise + await

To `await` a timeout, you wrap it in a Promise and call `resolve()` later.

~~~js
function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done waiting (1 second)"), 1000);
  });
}

async function run() {
  console.log("Start");
  const msg = await delayMessage();
  console.log(msg);
  console.log("End");
}
~~~

Expected order: Start → (wait) → Done waiting → End

## 3) QA scenario: API calls that must run in order

When calls must run sequentially (login → users → dashboard), `await` keeps the order simple.

~~~js
function fakeApiCall(endpoint) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Response OK from " + endpoint), 1200);
  });
}

async function runApiTests() {
  const login = await fakeApiCall("/login");
  const users = await fakeApiCall("/users");
  const dashboard = await fakeApiCall("/dashboard");
  console.log("All API calls completed");
}
~~~

## Error handling with try/catch

If a Promise rejects, it throws inside `async` functions. Use `try/catch` to handle failures.

~~~js
async function run() {
  try {
    const result = await mightFail();
    console.log(result);
  } catch (err) {
    console.log("Request failed:", err);
  }
}
~~~

## Why this matters for testers

- Real API calls are async: `await` prevents “race conditions” and flaky ordering.
- Cleaner test helpers: build `fetchUser()`, `createOrder()`, `login()` helpers that return Promises.
- More readable debugging: logs appear in the intended sequence.
- Easier error handling: `try/catch` produces predictable failure messages.

## Common mistakes / gotchas

- Using `await` outside an `async` function (syntax error).
- Forgetting to return a Promise from helper functions (await won’t behave as expected).
- Running calls sequentially when parallel is acceptable (slower tests).
- Not handling errors:
  - A rejection without `try/catch` can crash the run unexpectedly.
- Cypress note:
  - Cypress commands are not standard Promises; do not `await cy.get(...)`. Use Cypress chaining for Cypress commands and `async/await` for non-Cypress Promise code (e.g., Node tasks, custom fetch in Node).
