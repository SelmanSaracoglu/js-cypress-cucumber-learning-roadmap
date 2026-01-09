// Step 12 - Promises Intro
// Goal: Understand Promises and how they improve callback-based code.

// --------------------------------------------------------------
// 1) Simple Promise that resolves immediately
// --------------------------------------------------------------
console.log("=== 1) Basic Promise example ===");

const simplePromise = new Promise(function (resolve, reject) {
  // We immediately resolve this promise with a value
  resolve("Test data is ready");
  // If we wanted an error instead, we would call:
  // reject("Something went wrong");
});

simplePromise
  .then(function (result) {
    console.log("Then received:", result);
  })
  .catch(function (error) {
    console.log("Catch received:", error);
  });


// --------------------------------------------------------------
// 2) Promise with async behavior (using setTimeout)
// --------------------------------------------------------------
console.log("\n=== 2) Async Promise with setTimeout ===");

function delayedSuccess() {
  return new Promise(function (resolve, reject) {
    console.log("Starting async operation...");

    setTimeout(function () {
      // Simulate success after 1 second
      resolve("Async operation finished successfully");
      // Or to simulate error:
      // reject("Async operation failed");
    }, 1000);
  });
}

delayedSuccess()
  .then(function (message) {
    console.log("Then received:", message);
  })
  .catch(function (error) {
    console.log("Catch received:", error);
  });

console.log("This log runs BEFORE the async result (non-blocking)");


// --------------------------------------------------------------
// 3) QA scenario: Fake API call using a Promise
// --------------------------------------------------------------
console.log("\n=== 3) QA scenario: Fake API + Promise ===");

function fakeApiCallWithPromise(endpoint) {
  return new Promise(function (resolve, reject) {
    console.log("[" + endpoint + "] request sent...");

    setTimeout(function () {
      const success = true; // change to false to test reject branch

      if (success) {
        const fakeResponse = {
          status: 200,
          data: { message: "OK", endpoint: endpoint }
        };
        resolve(fakeResponse);
      } else {
        reject("Request to " + endpoint + " failed");
      }
    }, 1500);
  });
}

fakeApiCallWithPromise("/login")
  .then(function (response) {
    console.log("Response received. Status:", response.status);
    console.log("Message:", response.data.message);
    console.log("Endpoint:", response.data.endpoint);
  })
  .catch(function (error) {
    console.log("Error while calling API:", error);
  });


// --------------------------------------------------------------
// 4) Mini challenge
// --------------------------------------------------------------
// TODO:
// - Call fakeApiCallWithPromise("/users")
// - Handle success and error in then/catch
//
// Example idea:
//
// fakeApiCallWithPromise("/users")
//   .then(function (response) {
//     console.log("Users API status:", response.status);
//   })
//   .catch(function (error) {
//     console.log("Users API error:", error);
//   });
