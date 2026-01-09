// Step 11 - Callback and Async Intro
// Goal: Understand the difference between synchronous code,
//       callback functions, and asynchronous operations.

// --------------------------------------------------------------
// 1) Synchronous JavaScript
// --------------------------------------------------------------
// These lines run one by one in order - no waiting, no delay.
console.log("=== 1) Synchronous example ===");

console.log("Step 1: Preparing test plan");
console.log("Step 2: Writing test case");
console.log("Step 3: Executing test");


// --------------------------------------------------------------
// 2) Callback Function (NOT async yet)
// --------------------------------------------------------------
// A callback is a function passed as an argument to another function.
// It is executed ONLY when the main function decides to call it.

// This function will be used as a callback
function sayHello(name) {
  console.log("Hello " + name);
}

// This function accepts a callback as a parameter
function processUser(name, callback) {
  console.log("Processing user: " + name);

  // This is the moment the callback is executed
  // callback = sayHello, so callback(name) means sayHello(name)
  callback(name);

  console.log("Finished processing user: " + name);
}

// Pass the function WITHOUT parentheses
// processUser calls it later
console.log("\n=== 2) What is a callback? ===");
processUser("Selman", sayHello);


// --------------------------------------------------------------
// 3) Asynchronous callback (setTimeout)
// --------------------------------------------------------------
// setTimeout does NOT stop JavaScript.
// It schedules a function to run later, while the rest keeps going.

console.log("\n=== 3) Async + callback (setTimeout) ===");

console.log("1) Test started");

// After 2 seconds, the callback runs
setTimeout(function () {
  console.log("2) Server response received (after 2 seconds)");
}, 2000);

console.log("3) Writing log information");
// The "3)" log runs BEFORE the timeout callback


// --------------------------------------------------------------
// 4) Fake API simulation using callbacks
// --------------------------------------------------------------
// In real testing, APIs take time to respond.
// We simulate that delay using setTimeout.
// When the API "responds", we call the callback function.

console.log("\n=== 4) QA scenario: Fake API call + callback ===");

// Fake API request function
function fakeApiCall(endpoint, callback) {
  console.log("[" + endpoint + "] request sent...");

  setTimeout(function () {
    const fakeResponse = {
      status: 200,
      data: { message: "OK", endpoint: endpoint }
    };

    // Processing API response happens here
    callback(fakeResponse);
  }, 1500);
}

// Callback to handle the fake API response
function handleApiResponse(response) {
  console.log("Response received. Status:", response.status);
  console.log("Message:", response.data.message);
  console.log("Endpoint:", response.data.endpoint);
}

// Run the fake API call
fakeApiCall("/login", handleApiResponse);


// --------------------------------------------------------------
// 5) Mini challenge (your turn)
// --------------------------------------------------------------
// TODO for you:
// - Call fakeApiCall with another endpoint (ex: "/users")
// - Write a new callback OR use an anonymous function

console.log("\n=== 5) Mini challenge ===");
// Example starter:
// fakeApiCall("/users", function (response) {
//   console.log("Users API response:", response);
// });
