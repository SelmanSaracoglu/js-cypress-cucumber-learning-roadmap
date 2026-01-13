// 015 - async-error-handling-and-promise-patterns.js
// =====================================================
// TOPIC: Async Error Handling + Promise Patterns (Tester Edition)
// PURPOSE: Complement your existing files (callbacks / promises / async-await)
// NOTE: This file is ADDITIONAL. It does NOT replace your previous 3 files.
//
// WHAT THIS FILE COVERS (the missing pieces that matter in real QA work):
// 1) Proper error handling with try/catch/finally (async/await)
// 2) Reject path (negative scenario) — actually executed
// 3) Promise chaining with return (avoid nested then)
// 4) finally() for cleanup style
// 5) Promise.all vs Promise.allSettled (important difference)
// 6) Practical notes for testers (API + test stability mindset)
// =====================================================


// -----------------------------------------------------
// 1) REJECT PATH (NEGATIVE SCENARIO) - REAL EXECUTION
// -----------------------------------------------------
// Many people write promises but never truly execute the reject branch.
// As a tester, you MUST test both success and failure paths.

function fakeApiCallWithToggle(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ status: 200, message: "Success", data: { id: 10 } });
      } else {
        reject({ status: 500, message: "Server Error" });
      }
    }, 300);
  });
}

fakeApiCallWithToggle(true)
  .then((res) => {
    console.log("Success response:", res);
    // Success response: { status: 200, message: 'Success', data: { id: 10 } }
  })
  .catch((err) => {
    console.log("Error response:", err);
    // (won't run in this call)
  });

fakeApiCallWithToggle(false)
  .then((res) => {
    console.log("Success response:", res);
    // (won't run in this call)
  })
  .catch((err) => {
    console.log("Error response:", err);
    // Error response: { status: 500, message: 'Server Error' }
  });


// -----------------------------------------------------
// 2) PROMISE CHAINING WITH RETURN (NO NESTED .then)
// -----------------------------------------------------
// BAD pattern (nested then):
// promise.then(() => {
//   anotherPromise.then(() => { ... })
// })
//
// GOOD pattern (chain with return):
// promise.then(() => return anotherPromise).then(...)

function fakeGetUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "John" }), 200);
  });
}

function fakeGetOrdersByUserId(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ orderId: 101, userId }, { orderId: 102, userId }]), 200);
  });
}

// Promise chain (clean):
fakeGetUser()
  .then((user) => {
    console.log("User received:", user);
    // User received: { id: 1, name: 'John' }
    return fakeGetOrdersByUserId(user.id); // IMPORTANT: return the Promise
  })
  .then((orders) => {
    console.log("Orders received:", orders);
    // Orders received: [ { orderId: 101, userId: 1 }, { orderId: 102, userId: 1 } ]
  })
  .catch((err) => {
    console.log("Chain error:", err);
  })
  .finally(() => {
    console.log("Chain finished (cleanup point).");
    // Chain finished (cleanup point).
  });


// -----------------------------------------------------
// 3) ASYNC/AWAIT WITH try/catch/finally (MOST IMPORTANT)
// -----------------------------------------------------
// This is what you will use most in real automation work
// (especially when you need predictable error handling).

async function runApiFlow(shouldSucceed) {
  console.log("Starting runApiFlow, shouldSucceed:", shouldSucceed);
  // Starting runApiFlow, shouldSucceed: true/false

  try {
    const response = await fakeApiCallWithToggle(shouldSucceed);
    console.log("API response:", response);
    // When success:
    // API response: { status: 200, message: 'Success', data: { id: 10 } }

    // Example "tester style" checks:
    const statusOk = response.status === 200;
    console.log("Status is 200?:", statusOk);
    // Status is 200?: true

  } catch (error) {
    console.log("Caught error in catch:", error);
    // When fail:
    // Caught error in catch: { status: 500, message: 'Server Error' }

    // Example "tester style" checks:
    const isServerError = error.status === 500;
    console.log("Is server error (500)?:", isServerError);
    // Is server error (500)?: true

  } finally {
    // finally always runs, success or fail
    console.log("Finally block executed (cleanup).");
    // Finally block executed (cleanup).
  }
}

runApiFlow(true);
runApiFlow(false);


// -----------------------------------------------------
// 4) Promise.all vs Promise.allSettled
// -----------------------------------------------------
// Promise.all:
// - Fails FAST if ANY promise rejects
//
// Promise.allSettled:
// - Never fails fast
// - Gives you a full report of success/failure for each promise
//
// Tester mindset:
// - all() is good when ALL must succeed
// - allSettled() is good when you want to validate partial failures too

function fakeService(name, shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve({ service: name, status: "OK" });
      } else {
        reject({ service: name, status: "FAIL" });
      }
    }, 150);
  });
}

const serviceCalls = [
  fakeService("Auth", true),
  fakeService("Orders", false),
  fakeService("Payments", true),
];

// Promise.all example
Promise.all(serviceCalls)
  .then((results) => {
    console.log("Promise.all results:", results);
    // (won't run because Orders fails)
  })
  .catch((err) => {
    console.log("Promise.all rejected because one failed:", err);
    // Promise.all rejected because one failed: { service: 'Orders', status: 'FAIL' }
  });

// Promise.allSettled example
Promise.allSettled(serviceCalls)
  .then((results) => {
    console.log("Promise.allSettled results:", results);
    // Promise.allSettled results: [
    //   { status: 'fulfilled', value: { service: 'Auth', status: 'OK' } },
    //   { status: 'rejected', reason: { service: 'Orders', status: 'FAIL' } },
    //   { status: 'fulfilled', value: { service: 'Payments', status: 'OK' } }
    // ]
  });


// -----------------------------------------------------
// 5) Practical Tester Notes (VERY IMPORTANT FOR CYPRESS)
// -----------------------------------------------------
// - Cypress commands (cy.get, cy.click, cy.request, etc.) are NOT normal Promises.
// - You typically do NOT use: await cy.get(...)
// - Cypress has its own command queue and chaining mechanism.
//
// For API-like logic OUTSIDE Cypress commands, async/await is very useful.
// For Cypress commands, rely on Cypress chaining and assertions.
//
// Example (Cypress style - not runnable here):
// cy.request("/api/users").then((response) => {
//   expect(response.status).to.eq(200);
//   const email = response.body?.data?.email ?? "missing";
//   expect(email).to.not.eq("missing");
// });
//
// =====================================================
// END OF FILE
// =====================================================
