// 014 - truthy-falsy-optional-chaining-nullish.js
// =====================================================
// TOPIC: Truthy/Falsy + Optional Chaining (?.) + Nullish Coalescing (??)
// FOCUS: What a TESTER (SDET) needs for Cypress + API testing
//
// Why this matters in testing:
// - API responses often contain missing fields (undefined), null fields, empty strings, or zeros.
// - If you don't handle these correctly, tests can PASS incorrectly or FAIL randomly.
//
// CONTENTS:
// 1) Truthy / Falsy
// 2) Optional chaining (?.)
// 3) Nullish coalescing (??)
// 4) || vs ?? (very common source of bugs in tests)
// =====================================================


// -----------------------------------------------------
// 1) TRUTHY / FALSY
// -----------------------------------------------------
// In JavaScript, conditions don't require "true/false" only.
// Many values are automatically treated as true or false in if statements.
//
// FALSY values (IMPORTANT):
// - false
// - 0
// - -0
// - 0n (BigInt zero)
// - "" (empty string)
// - null
// - undefined
// - NaN
//
// Everything else is TRUTHY (including [], {}, "0", "false").
// -----------------------------------------------------

const valuesToTest = [false, 0, "", null, undefined, NaN, [], {}, "0", "false", 1];

valuesToTest.forEach((value) => {
  if (value) {
    console.log("Truthy value detected:", value);
    // Example outputs:
    // Truthy value detected: []
    // Truthy value detected: {}
    // Truthy value detected: 0
    // Truthy value detected: false
    // Truthy value detected: 1
  } else {
    console.log("Falsy value detected:", value);
    // Example outputs:
    // Falsy value detected: false
    // Falsy value detected: 0
    // Falsy value detected:
    // Falsy value detected: null
    // Falsy value detected: undefined
    // Falsy value detected: NaN
  }
});


// TESTER TIP:
// Many bugs happen when a test treats "" or 0 as "missing" even though it is a valid value.


// -----------------------------------------------------
// 2) OPTIONAL CHAINING (?.)
// -----------------------------------------------------
// Optional chaining prevents crashes when accessing nested properties.
// Instead of throwing an error, it returns undefined.
//
// Without optional chaining:
//   user.profile.email  -> throws error if profile is missing
//
// With optional chaining:
//   user.profile?.email -> returns undefined if profile is missing
// -----------------------------------------------------

const apiUserA = {
  id: 1,
  profile: {
    email: "a@example.com",
  },
};

const apiUserB = {
  id: 2,
  // profile is missing
};

// Safe access:
const emailA = apiUserA.profile?.email;
const emailB = apiUserB.profile?.email;

console.log("Email A:", emailA);
// Email A: a@example.com

console.log("Email B:", emailB);
// Email B: undefined


// Real test scenario:
// You want to check email only if profile exists (avoid test crash).
if (apiUserB.profile?.email) {
  console.log("Email exists:", apiUserB.profile.email);
  // (won't run for apiUserB)
} else {
  console.log("Email missing or profile missing.");
  // Email missing or profile missing.
}


// Optional chaining also works with arrays:
const apiResponse = {
  data: {
    users: [{ name: "John" }, { name: "Jane" }],
  },
};

const firstUserName = apiResponse.data?.users?.[0]?.name;
console.log("First user name:", firstUserName);
// First user name: John


// -----------------------------------------------------
// 3) NULLISH COALESCING (??)
// -----------------------------------------------------
// ?? uses the fallback only when the left side is null or undefined.
// It DOES NOT treat 0 or "" as missing.
//
// This is critical in tests where 0 or "" is valid.
// -----------------------------------------------------

const scoreFromApi = 0;
const nicknameFromApi = "";
const missingField = undefined;

const scoreWithDefaultOr = scoreFromApi || 999;
const scoreWithDefaultNullish = scoreFromApi ?? 999;

console.log("scoreFromApi:", scoreFromApi);
// scoreFromApi: 0

console.log("scoreWithDefaultOr (||):", scoreWithDefaultOr);
// scoreWithDefaultOr (||): 999  (WRONG if 0 is valid)

console.log("scoreWithDefaultNullish (??):", scoreWithDefaultNullish);
// scoreWithDefaultNullish (??): 0 (CORRECT)

const nicknameWithOr = nicknameFromApi || "NoNickname";
const nicknameWithNullish = nicknameFromApi ?? "NoNickname";

console.log("nicknameFromApi:", nicknameFromApi);
// nicknameFromApi:

console.log("nicknameWithOr (||):", nicknameWithOr);
// nicknameWithOr (||): NoNickname (may be WRONG if empty string is valid)

console.log("nicknameWithNullish (??):", nicknameWithNullish);
// nicknameWithNullish (??):  (keeps empty string)

const fieldWithNullishDefault = missingField ?? "DefaultValue";
console.log("missingField ?? DefaultValue:", fieldWithNullishDefault);
// missingField ?? DefaultValue: DefaultValue


// -----------------------------------------------------
// 4) || vs ?? (MOST IMPORTANT TESTER DIFFERENCE)
// -----------------------------------------------------
// || uses fallback when left side is falsy (includes 0, "", false)
// ?? uses fallback only when left side is null or undefined
//
// Use ?? when 0 or "" are valid data.
// Use || when ANY falsy value should trigger a default.
// -----------------------------------------------------

const quantity = 0;

// Wrong if quantity=0 is valid:
const quantityDisplayWrong = quantity || 1;

console.log("quantityDisplayWrong (||):", quantityDisplayWrong);
// quantityDisplayWrong (||): 1

// Correct if quantity=0 is valid:
const quantityDisplayCorrect = quantity ?? 1;

console.log("quantityDisplayCorrect (??):", quantityDisplayCorrect);
// quantityDisplayCorrect (??): 0


// -----------------------------------------------------
// COMBINED TEST EXAMPLE (API RESPONSE VALIDATION)
// -----------------------------------------------------
// Scenario:
// - You receive a user object
// - Some fields may be missing
// - You want safe access + correct defaults
// -----------------------------------------------------

const userResponse = {
  id: 10,
  account: {
    email: "user10@example.com",
    // phone is missing
  },
  preferences: null, // explicitly null
};

const safeEmail = userResponse.account?.email;
const safePhone = userResponse.account?.phone ?? "NoPhoneProvided";
const safeTheme = userResponse.preferences?.theme ?? "light";

console.log("safeEmail:", safeEmail);
// safeEmail: user10@example.com

console.log("safePhone:", safePhone);
// safePhone: NoPhoneProvided

console.log("safeTheme:", safeTheme);
// safeTheme: light


// Tester mindset checks:
if (!safeEmail) {
  console.log("ERROR: Email is missing!");
  // (won't run here)
} else {
  console.log("PASS: Email exists.");
  // PASS: Email exists.
}


// =====================================================
// SUMMARY
// =====================================================
//
// TRUTHY/FALSY:
// - Falsy: false, 0, "", null, undefined, NaN
// - Everything else is truthy (including [], {})
//
// OPTIONAL CHAINING (?.):
// - Prevents crashes when accessing nested properties
// - Returns undefined if the chain breaks
//
// NULLISH COALESCING (??):
// - Uses default only for null or undefined
// - Keeps valid values like 0 and ""
//
// || vs ?? (key testing difference):
// - || triggers default for ANY falsy value
// - ?? triggers default only for null/undefined
//
// Why testers care:
// - Avoid flaky tests (crashes on missing fields)
// - Avoid false positives (treating 0/"", as missing)
// =====================================================
