// Step 13 - Async/Await Intro
// Goal: Use async/await to simplify Promise-based code.

// --------------------------------------------------------------
// 1) Converting a Promise into async/await
// --------------------------------------------------------------

function getData() {
  return Promise.resolve("Data received successfully");
}

async function runExample1() {
  console.log("=== Example 1 ===");
  const result = await getData();
  console.log(result);
}

runExample1();


// --------------------------------------------------------------
// 2) Async operation with setTimeout
// --------------------------------------------------------------

function delayMessage() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Done waiting (1 second)");
    }, 1000);
  });
}

async function runExample2() {
  console.log("\n=== Example 2 ===");
  console.log("Start");
  const msg = await delayMessage();
  console.log(msg);
  console.log("End");
}

runExample2();


// --------------------------------------------------------------
// 3) QA scenario: Fake API calls that must run in order
// --------------------------------------------------------------

function fakeApiCall(endpoint) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Response OK from " + endpoint);
    }, 1200);
  });
}

async function runApiTests() {
  console.log("\n=== Example 3 (QA scenario) ===");

  const login = await fakeApiCall("/login");
  console.log(login);

  const users = await fakeApiCall("/users");
  console.log(users);

  const dashboard = await fakeApiCall("/dashboard");
  console.log(dashboard);

  console.log("All API calls completed");
}

runApiTests();


// --------------------------------------------------------------
// 4) Mini challenge for you
// --------------------------------------------------------------
// TODO:
// - Add another endpoint (ex: /settings)
// - OR test error handling using try/catch
