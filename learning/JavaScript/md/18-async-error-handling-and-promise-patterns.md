## Async Error Handling + Promise Patterns (Tester Edition)

This topic fills the real-world gaps testers hit when working with callbacks, Promises, and `async/await`:
- You must validate both **success** and **failure** paths.
- You need predictable error handling (`try/catch/finally`).
- You should avoid nested `.then()` by chaining with `return`.
- You should understand when to use `Promise.all` vs `Promise.allSettled`.

## 1) Reject path (negative scenario) must be executed

As a tester, you must actually run the reject branch, not just write it.

~~~js
function fakeApiCallWithToggle(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ status: 200, message: "Success" });
      } else {
        reject({ status: 500, message: "Server Error" });
      }
    }, 300);
  });
}

fakeApiCallWithToggle(false)
  .then((res) => console.log("Success response:", res))
  .catch((err) => console.log("Error response:", err));
~~~

## 2) Promise chaining with return (avoid nested then)

Bad pattern: nested `.then()` makes code hard to read and debug.

Good pattern: return the next Promise to keep a clean chain.

~~~js
fakeGetUser()
  .then((user) => {
    return fakeGetOrdersByUserId(user.id);
  })
  .then((orders) => {
    console.log(orders);
  })
  .catch((err) => {
    console.log("Chain error:", err);
  });
~~~

Key rule: **return the Promise** inside `.then()`.

## 3) async/await with try/catch/finally (most important)

In real automation, `try/catch/finally` makes failures predictable and cleanup consistent.

~~~js
async function runApiFlow(shouldSucceed) {
  try {
    const response = await fakeApiCallWithToggle(shouldSucceed);
    console.log("API response:", response);
  } catch (error) {
    console.log("Caught error in catch:", error);
  } finally {
    console.log("Finally block executed (cleanup).");
  }
}
~~~

- `try`: success path
- `catch`: failure path (rejects become “throws”)
- `finally`: always runs (cleanup point)

## 4) finally() for Promise chains

In `.then()` chains, `.finally()` runs whether success or failure happened.

~~~js
fakeGetUser()
  .then((user) => fakeGetOrdersByUserId(user.id))
  .then((orders) => console.log(orders))
  .catch((err) => console.log(err))
  .finally(() => console.log("Chain finished (cleanup point)."));
~~~

## 5) Promise.all vs Promise.allSettled

### Promise.all (fail fast)
- Resolves only if **all succeed**
- Rejects as soon as **one fails**

~~~js
Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.log("Rejected:", err));
~~~

### Promise.allSettled (full report)
- Never fails fast
- Returns an array describing each result:
  - `{ status: "fulfilled", value: ... }`
  - `{ status: "rejected", reason: ... }`

~~~js
Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
~~~

Tester mindset:
- Use `all()` when **any failure should fail the test immediately**
- Use `allSettled()` when you want to validate **partial failures** and produce a report

## Why this matters for testers

- Negative testing: validate error responses (401/403/500), not only success.
- Stability: `try/catch/finally` prevents random crashes and ensures cleanup runs.
- Readability: chaining with `return` avoids “callback hell” in Promise form.
- Multi-service validation: `all` vs `allSettled` matters when testing distributed systems.
- Better failure diagnostics: settled results can show exactly which service failed.

## Common mistakes / gotchas

- Writing reject logic but never executing it (false confidence in coverage).
- Forgetting `return` in `.then()`:
  - Chain continues too early and receives `undefined`.
- Assuming `.finally()` receives a result:
  - It does not get the resolved value; it’s for cleanup.
- Using `Promise.all` when partial failure reporting is required:
  - You lose the success results when one rejects.
- Cypress-specific:
  - Cypress commands are not normal Promises; don’t `await cy.get(...)`.
  - Use Cypress chaining for Cypress commands, and Promises/async-await for non-Cypress async helpers.
