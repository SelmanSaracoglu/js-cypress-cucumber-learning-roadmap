// 013 - destructuring-and-spread-rest.js
// =====================================================
// TOPIC: Destructuring + Spread & Rest
// FOCUS: How a TESTER (SDET) can use these in real tests
//
// CONTENTS:
// 1) Object destructuring
// 2) Array destructuring
// 3) Spread operator (...)
// 4) Rest operator (...)
// =====================================================


// -----------------------------------------------------
// SAMPLE OBJECT: User from an API response
// -----------------------------------------------------

const user = {
  id: 101,
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  role: "admin",
  isActive: true,
  address: {
    city: "Berlin",
    country: "Germany",
  },
};


// =====================================================
// 1) OBJECT DESTRUCTURING
// =====================================================
// Instead of:
//   const firstName = user.firstName;
//   const lastName  = user.lastName;
// we can do:
//   const { firstName, lastName } = user;
// =====================================================

const { firstName, lastName } = user;

console.log("First name:", firstName);
// First name: John

console.log("Last name:", lastName);
// Last name: Doe


// Destructuring with renaming
const { isActive: active } = user;

console.log("Is user active?:", active);
// Is user active?: true


// Destructuring nested objects
const {
  address: { city, country },
} = user;

console.log("City:", city);
// City: Berlin

console.log("Country:", country);
// Country: Germany


// Destructuring with default values
const {
  phoneNumber = "N/A",
} = user;

console.log("Phone:", phoneNumber);
// Phone: N/A


// TEST EXAMPLE: log user summary
function logUserSummary(apiUser) {
  const { firstName, lastName, role, isActive } = apiUser;

  console.log(
    "User summary:",
    `${firstName} ${lastName} | Role: ${role} | Active: ${isActive}`
  );
  // User summary: John Doe | Role: admin | Active: true
}

logUserSummary(user);


// -----------------------------------------------------
// SAMPLE ARRAY: Orders from an API response
// -----------------------------------------------------

const orders = [
  { orderId: 1, amount: 50 },
  { orderId: 2, amount: 120 },
  { orderId: 3, amount: 200 },
];


// =====================================================
// 2) ARRAY DESTRUCTURING
// =====================================================
// Example:
//   const [firstOrder, secondOrder] = orders;
// =====================================================

const [firstOrder, secondOrder] = orders;

console.log("First order:", firstOrder);
// First order: { orderId: 1, amount: 50 }

console.log("Second order:", secondOrder);
// Second order: { orderId: 2, amount: 120 }


// Skipping elements
const [, , thirdOrder] = orders;

console.log("Third order:", thirdOrder);
// Third order: { orderId: 3, amount: 200 }


// Destructuring with default values
const prices = [10, 20];
const [p1, p2, p3 = 0] = prices;

console.log("Prices:", p1, p2, p3);
// Prices: 10 20 0


// TEST EXAMPLE: assert first order exists
const [firstOrderFromApi] = orders;

if (firstOrderFromApi) {
  console.log("First order exists. ID:", firstOrderFromApi.orderId);
  // First order exists. ID: 1
} else {
  console.log("ERROR: No orders returned from API.");
  // ERROR: No orders returned from API.
}


// =====================================================
// 3) SPREAD OPERATOR (...)
// =====================================================
// Spread = expand an array or object
// Arrays: [...oldArray, newElement]
// Objects: { ...oldObject, newField: value }
// =====================================================


// --- Arrays with spread ---

const baseTags = ["smoke", "regression"];
const extraTags = ["ui", "critical"];

const allTags = [...baseTags, ...extraTags];

console.log("All tags:", allTags);
// All tags: [ 'smoke', 'regression', 'ui', 'critical' ]


// Copy an array (no mutation of original)
const originalIds = [1, 2, 3];
const copiedIds = [...originalIds];

copiedIds.push(4);

console.log("Original IDs:", originalIds);
// Original IDs: [ 1, 2, 3 ]

console.log("Copied IDs:", copiedIds);
// Copied IDs: [ 1, 2, 3, 4 ]


// --- Objects with spread ---

const baseRequestBody = {
  userId: 101,
  role: "user",
  isActive: true,
};

const adminRequestBody = {
  ...baseRequestBody,
  role: "admin",
  permissions: ["read", "write", "delete"],
};

console.log("Base request body:", baseRequestBody);
// Base request body: { userId: 101, role: 'user', isActive: true }

console.log("Admin request body:", adminRequestBody);
// Admin request body: {
//   userId: 101,
//   role: 'admin',
//   isActive: true,
//   permissions: [ 'read', 'write', 'delete' ]
// }

const disabledUserRequestBody = {
  ...baseRequestBody,
  isActive: false,
};

console.log("Disabled user request body:", disabledUserRequestBody);
// Disabled user request body: { userId: 101, role: 'user', isActive: false }


// =====================================================
// 4) REST OPERATOR (...)
// =====================================================
// Rest = collect the remaining values
// - In function parameters
// - In object/array destructuring
// =====================================================


// Rest in function parameters
function logAssertionResults(testName, ...messages) {
  console.log("Test name:", testName);
  // Test name: User API validation

  console.log("Messages:", messages);
  // Messages: [
  //   'Status code is 200',
  //   'Response time < 500ms',
  //   'User email is correct'
  // ]
}

logAssertionResults(
  "User API validation",
  "Status code is 200",
  "Response time < 500ms",
  "User email is correct"
);


// Rest in object destructuring
const response = {
  status: 200,
  time: 180,
  data: { id: 10, name: "Sample" },
  meta: { version: 1 },
};

const { status, time, ...otherProps } = response;

console.log("Status:", status);
// Status: 200

console.log("Time:", time);
// Time: 180

console.log("Other props:", otherProps);
// Other props: { data: { id: 10, name: 'Sample' }, meta: { version: 1 } }


// Rest in array destructuring
const httpStatusCodes = [200, 201, 400, 401, 404, 500];

const [firstStatus, secondStatus, ...errorStatuses] = httpStatusCodes;

console.log("First status:", firstStatus);
// First status: 200

console.log("Second status:", secondStatus);
// Second status: 201

console.log("Error statuses:", errorStatuses);
// Error statuses: [ 400, 401, 404, 500 ]


// =====================================================
// COMBINED TEST SCENARIO EXAMPLE
// =====================================================

const baseUserPayload = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  role: "user",
  isActive: true,
};

const adminPayload = {
  ...baseUserPayload,
  role: "admin",
};

const guestPayload = {
  ...baseUserPayload,
  role: "guest",
  isActive: false,
};

console.log("Admin payload:", adminPayload);
// Admin payload: {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   email: 'jane.doe@example.com',
//   role: 'admin',
//   isActive: true
// }

console.log("Guest payload:", guestPayload);
// Guest payload: {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   email: 'jane.doe@example.com',
//   role: 'guest',
//   isActive: false
// }

const apiCreateUserResponse = {
  status: 201,
  time: 220,
  data: {
    id: 999,
    ...adminPayload,
  },
};

const {
  status: createStatus,
  time: createTime,
  data: createdUserData,
} = apiCreateUserResponse;

console.log("Create user status:", createStatus);
// Create user status: 201

console.log("Create user time:", createTime);
// Create user time: 220

console.log("Created user data:", createdUserData);
// Created user data: {
//   id: 999,
//   firstName: 'Jane',
//   lastName: 'Doe',
//   email: 'jane.doe@example.com',
//   role: 'admin',
//   isActive: true
// }


// =====================================================
// SUMMARY
// =====================================================
//
// OBJECT DESTRUCTURING:
//   const { field1, field2 } = object;
//
// ARRAY DESTRUCTURING:
//   const [first, second] = array;
//
// SPREAD (...):
//   - Expand arrays/objects
//   - Copy or merge data
//
// REST (...):
//   - Collect remaining args/properties
//
// As a TESTER, these help with:
// - Working with API responses
// - Creating reusable test data
// - Writing cleaner Cypress code
// =====================================================
