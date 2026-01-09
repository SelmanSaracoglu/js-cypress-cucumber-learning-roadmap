
// 11 - Callbacks and async intro
// This file explains why JavaScript sometimes does NOT run code top-to-bottom in a simple way,
// and how callbacks are used to control "what happens after what".

// Normal (synchronous) execution
console.log("Sync 1: start");
console.log("Sync 2: middle");
console.log("Sync 3: end");

// Async example with setTimeout
console.log("Async example: start");

setTimeout(() => {
  console.log("Async example: inside setTimeout (runs later)");
}, 1000);

console.log("Async example: after setTimeout call");

// The expected console order:
// 1) Sync 1: start
// 2) Sync 2: middle
// 3) Sync 3: end
// 4) Async example: start
// 5) Async example: after setTimeout call
// 6) Async example: inside setTimeout (runs later)


// Callback function example
function doTask(taskName, callback) {
  console.log(`Starting task: ${taskName}`);
  // Simulate some async work with setTimeout
  setTimeout(() => {
    console.log(`Finished task: ${taskName}`);
    // after finishing, call the callback
    callback();
  }, 500);
}

function afterTask() {
  console.log("Running callback: afterTask");
}

doTask("Download data", afterTask);

// Inline callback version
doTask("Process data", () => {
  console.log("Running inline callback after processing");
});

// Mini exercise style example: "login" flow simulation
function fakeLogin(username, callback) {
  console.log(`Logging in user: ${username}`);

  setTimeout(() => {
    const success = true;
    console.log(`Login finished for ${username}, success: ${success}`);
    callback(success);
  }, 700);
}

fakeLogin("testUser", (success) => {
  if (success) {
    console.log("Redirecting to dashboard...");
  } else {
    console.log("Showing error message...");
  }
});
