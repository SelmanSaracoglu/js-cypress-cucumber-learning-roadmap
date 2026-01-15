// 13 - Destructuring + Spread & Rest (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// -------------------------------------------------------------------
// Shared objects/arrays for exercises (create these first)
// TODO: Create const user:
// {
//   id: 101,
//   firstName: "John",
//   lastName: "Doe",
//   email: "john.doe@example.com",
//   role: "admin",
//   isActive: true,
//   address: { city: "Berlin", country: "Germany" }
// }
//
// TODO: Create const orders:
// [
//   { orderId: 1, amount: 50 },
//   { orderId: 2, amount: 120 },
//   { orderId: 3, amount: 200 }
// ]
// -------------------------------------------------------------------

// Exercise 1: Object destructuring basics
// TODO: Destructure firstName and lastName from user.
// TODO: Log exactly:
// "First name: John"
// "Last name: Doe"
// Expected output:
// First name: John
// Last name: Doe

// Exercise 2: Object destructuring with renaming
// TODO: Destructure isActive but rename it to active.
// TODO: Log exactly: "Is user active?: true"
// Expected output:
// Is user active?: true

// Exercise 3: Nested destructuring
// TODO: Destructure city and country from user.address.
// TODO: Log exactly:
// "City: Berlin"
// "Country: Germany"
// Expected output:
// City: Berlin
// Country: Germany

// Exercise 4: Default value in destructuring
// TODO: Destructure phoneNumber from user with default "N/A".
// TODO: Log exactly: "Phone: N/A"
// Expected output:
// Phone: N/A

// Exercise 5: Function + destructuring (harder)
// TODO: Write function logUserSummary(apiUser) that destructures:
// firstName, lastName, role, isActive
// TODO: Log exactly one line:
// "User summary: John Doe | Role: admin | Active: true"
// Expected output:
// User summary: John Doe | Role: admin | Active: true

// Exercise 6: Array destructuring basics
// TODO: Destructure firstOrder and secondOrder from orders.
// TODO: Log exactly:
// "First order: 1"
// "Second order: 2"
// (log only orderId values)
// Expected output:
// First order: 1
// Second order: 2

// Exercise 7: Skipping elements
// TODO: Destructure only the third order into thirdOrder using skipping.
// TODO: Log exactly: "Third order: 3"
// Expected output:
// Third order: 3

// Exercise 8: Array destructuring with default values
// TODO: Create const prices = [10, 20].
// TODO: Destructure p1, p2, p3 with default 0.
// TODO: Log exactly: "Prices: 10 20 0"
// Expected output:
// Prices: 10 20 0

// Exercise 9: Spread with arrays (merge)
// TODO: Create const baseTags = ["smoke", "regression"] and const extraTags = ["ui", "critical"].
// TODO: Create const allTags using spread.
// TODO: Log exactly: "All tags: smoke,regression,ui,critical"
// (Join the array with commas for stable output formatting.)
// Expected output:
// All tags: smoke,regression,ui,critical

// Exercise 10: Spread with arrays (copy, no mutation of original) (harder)
// TODO:
// 1) Create const originalIds = [1, 2, 3].
// 2) Create const copiedIds as a copy using spread.
// 3) Push 4 into copiedIds.
// 4) Log exactly:
// "Original IDs: 1,2,3"
// "Copied IDs: 1,2,3,4"
// Expected output:
// Original IDs: 1,2,3
// Copied IDs: 1,2,3,4

// Exercise 11: Spread with objects (merge + override)
// TODO:
// 1) Create const baseRequestBody = { userId: 101, role: "user", isActive: true }.
// 2) Create const adminRequestBody that spreads baseRequestBody and overrides role="admin"
//    and adds permissions ["read","write","delete"].
// 3) Log exactly two lines using template strings:
// "[BODY] baseRole=user active=true"
// "[BODY] adminRole=admin permissions=3"
// Expected output:
// [BODY] baseRole=user active=true
// [BODY] adminRole=admin permissions=3

// Exercise 12: Rest in function parameters (harder)
// TODO:
// 1) Write function logAssertionResults(testName, ...messages).
// 2) It must log exactly:
// "Test name: <testName>"
// "Messages count: <number>"
// 3) Call it with:
// "User API validation", "Status code is 200", "Response time < 500ms", "User email is correct"
// Expected output:
// Test name: User API validation
// Messages count: 3

// Exercise 13: Rest in object destructuring (harder)
// TODO:
// 1) Create const response = { status: 200, time: 180, data: { id: 10, name: "Sample" }, meta: { version: 1 } }.
// 2) Destructure status, time, and collect the rest into otherProps.
// 3) Log exactly:
// "Status: 200"
// "Time: 180"
// "Other keys: data,meta"
// (Print Object.keys(otherProps).join(",") for stable output.)
// Expected output:
// Status: 200
// Time: 180
// Other keys: data,meta

// Exercise 14: Rest in array destructuring
// TODO:
// 1) Create const httpStatusCodes = [200, 201, 400, 401, 404, 500].
// 2) Destructure firstStatus, secondStatus, and collect the rest into errorStatuses.
// 3) Log exactly:
// "First status: 200"
// "Second status: 201"
// "Error statuses: 400,401,404,500"
// Expected output:
// First status: 200
// Second status: 201
// Error statuses: 400,401,404,500

// Mini QA scenario: Build payloads + validate create user response (no loops)
// TODO:
// 1) Create const baseUserPayload = {
//      firstName: "Jane",
//      lastName: "Doe",
//      email: "jane.doe@example.com",
//      role: "user",
//      isActive: true
//    }.
// 2) Create adminPayload using spread, role="admin".
// 3) Create apiCreateUserResponse = {
//      status: 201,
//      time: 220,
//      data: { id: 999, ...adminPayload }
//    }.
// 4) Destructure status as createStatus, time as createTime, and data as createdUserData.
// 5) Log exactly:
// "[CREATE] status=201 time=220"
// "[CREATE] role=admin active=true"
// "[CREATE] fullName=Jane Doe"
// Expected output:
// [CREATE] status=201 time=220
// [CREATE] role=admin active=true
// [CREATE] fullName=Jane Doe
