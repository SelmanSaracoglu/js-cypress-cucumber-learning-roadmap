// 18 - Async Error Handling + Promise Patterns (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// ------------------------------------------------------------
// Exercise 1: Execute BOTH success and reject paths
// TODO:
// 1) Write function fakeApiCallWithToggle(shouldSucceed) returning a Promise.
//    - after 300ms:
//      if shouldSucceed true => resolve { status: 200, message: "Success", data: { id: 10 } }
//      else => reject { status: 500, message: "Server Error" }
// 2) Call fakeApiCallWithToggle(true) and log in then():
//    "Success response: 200 Success"
// 3) Call fakeApiCallWithToggle(false) and log in catch():
//    "Error response: 500 Server Error"
// Expected output (order may vary by timing, but both must appear):
// Success response: 200 Success
// Error response: 500 Server Error

// ------------------------------------------------------------
// Exercise 2: Promise chaining with return (no nested then)
// TODO:
// 1) Write fakeGetUser() => resolves { id: 1, name: "John" } after 200ms
// 2) Write fakeGetOrdersByUserId(userId) => resolves
//    [ { orderId: 101, userId }, { orderId: 102, userId } ] after 200ms
// 3) Chain:
//    fakeGetUser()
//      .then(user => { log "User received: John"; return fakeGetOrdersByUserId(user.id); })
//      .then(orders => { log "Orders count: 2"; })
//      .catch(err => log "Chain error: <err>")
//      .finally(() => log "Chain finished (cleanup point).")
// Expected output:
// User received: John
// Orders count: 2
// Chain finished (cleanup point).

// ------------------------------------------------------------
// Exercise 3: async/await + try/catch/finally (most important)
// TODO:
// 1) Write async function runApiFlow(shouldSucceed)
// 2) It must log first:
//    "Starting runApiFlow, shouldSucceed: <value>"
// 3) In try:
//    - await fakeApiCallWithToggle(shouldSucceed)
//    - log "API response status: 200" (only on success)
//    - log "Status is 200?: true"
// 4) In catch (when failed):
//    - log "Caught error status: 500"
//    - log "Is server error (500)?: true"
// 5) In finally always log:
//    "Finally block executed (cleanup)."
// 6) Call runApiFlow(true) and runApiFlow(false)
// Expected output (order may vary):
// Starting runApiFlow, shouldSucceed: true
// API response status: 200
// Status is 200?: true
// Finally block executed (cleanup).
// Starting runApiFlow, shouldSucceed: false
// Caught error status: 500
// Is server error (500)?: true
// Finally block executed (cleanup).

// ------------------------------------------------------------
// Exercise 4: Promise.all (fail fast) vs Promise.allSettled (full report)
// TODO:
// 1) Write function fakeService(name, shouldSucceed) returning a Promise:
//    - after 150ms:
//      if shouldSucceed => resolve { service: name, status: "OK" }
//      else => reject { service: name, status: "FAIL" }
// 2) Create const serviceCalls = [Auth true, Orders false, Payments true]
// 3) Use Promise.all(serviceCalls):
//    - in then(): log "ALL OK"
//    - in catch(): log exactly "Promise.all rejected because one failed: Orders"
// 4) Use Promise.allSettled(serviceCalls) and log exactly:
//    "Settled summary: fulfilled=2 rejected=1"
// (count fulfilled/rejected from the results array)
// Expected output:
// Promise.all rejected because one failed: Orders
// Settled summary: fulfilled=2 rejected=1

// Mini QA scenario: Multi-service health check report
// TODO:
// 1) Reuse fakeService
// 2) Call Promise.allSettled on services: Auth true, Orders false, Payments true, Search false
// 3) Build and log exactly 2 lines:
//    "[HEALTH] ok=2 fail=2"
//    "[HEALTH] failedServices=Orders,Search"
// Expected output:
// [HEALTH] ok=2 fail=2
// [HEALTH] failedServices=Orders,Search
