// 05 - Logical operators: && (AND), || (OR), ! (NOT)
// These operators are used to combine conditions in tests.

const isLoggedIn = true;
const hasPremium = false;

// AND: both must be true
if (isLoggedIn && hasPremium) {
  console.log("User can access premium content");
} else {
  console.log("User cannot access premium content");
}

// OR: at least one must be true
const isAdmin = false;
const isEditor = true;

if (isAdmin || isEditor) {
  console.log("User can edit content");
} else {
  console.log("User cannot edit content");
}

// NOT: flips boolean value
const isBlocked = false;

if (!isBlocked) {
  console.log("User is allowed to proceed");
} else {
  console.log("User is blocked");
}

// Combined example (common in testing)
const statusCode = 201;
const responseTimeMs = 850;

// Rule: pass if status is 200/201 AND response time is under 1000ms
if ((statusCode === 200 || statusCode === 201) && responseTimeMs < 1000) {
  console.log("API check passed");
} else {
  console.log("API check failed");
}

// Mini exercise outputs
const email = "test@test.com";
const password = "123456";

// Rule: valid if email includes "@" AND password length >= 6
if (email.includes("@") && password.length >= 6) {
  console.log("Credentials look valid");
} else {
  console.log("Credentials look invalid");
}
