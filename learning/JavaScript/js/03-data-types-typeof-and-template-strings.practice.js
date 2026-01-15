

// Exercise 1: Create and log basic types
// TODO: Create const username = "testUser", const attempts = 2, const isLoggedIn = true.
// TODO: Log each on a separate line with labels: "username:", "attempts:", "isLoggedIn:".
const username = "testUser";
const attempts = 2;
const isLoggedIn = true;
console.log("username:", username);
console.log("attempts:", attempts);
console.log("isLoggedIn:", isLoggedIn);

// Exercise 2: undefined
// TODO: Declare let lastLoginTime; (do not assign).
// TODO: Log it with label "lastLoginTime:".
let lastLoginTime;
console.log("lastLoginTime:", lastLoginTime); // lastLoginTime: undefined

// Exercise 3: object
// TODO: Create const user = { name: "Ali", age: 30, active: true }.
// TODO: Log it with label "user:".
const user = { name: "Ali", age: 30, active: true};
console.log("user:", user) // user: { name: 'Ali', age: 30, active: true }

// Exercise 4: typeof checks (easy)
// TODO: Using the variables above, log typeof each with labels:
// "type username:", "type attempts:", "type isLoggedIn:", "type lastLoginTime:", "type user:".
console.log("type username:", typeof username );             // type username: string
console.log("type attempts:", typeof attempts);              // type attempts: number
console.log("type isLoggedIn:", typeof isLoggedIn);          // type isLoggedIn: boolean
console.log("type lastLoginTime:", typeof lastLoginTime);    // type lastLoginTime: undefined
console.log("type user:", typeof user);                      // type user: object

// Exercise 5: typeof null (gotcha)
// TODO: Create const value = null.
// TODO: Log: "type value:" and typeof value.
const value = null;
console.log("type value:", typeof value); // type value: object

// Exercise 6: Template strings (easy)
// TODO: Create const pageName = "Login" and const statusCode = 200.
// TODO: Log these exact lines using template strings:
// "Navigating to Login page"
// "Login finished with status code: 200"
const pageName = "Login";
const statusCode = 200;
console.log(`Navigating to ${pageName} page`); // Navigating to Login page
console.log(`${pageName} finished with status code: ${statusCode}`); // Login finished with status code: 200

// Exercise 7: Template string with multiple variables (harder)
// TODO: Create const email = "test@test.com", const tryCount = 3, const success = false.
// TODO: Log exactly:
// "User test@test.com tried 3 times. Success: false"
const email = "test@test.com";
const tryCount = 3;
const success = false;
console.log(`User ${email} tried ${tryCount} times. Success: ${success}`); 
// User test@test.com tried 3 times. Success: false

// Exercise 8: Build a debug message for testers (harder)
// TODO: Create const endpoint = "/api/login" and const method = "POST".
// TODO: Log exactly:
// "[REQ] POST /api/login"
const endpoint = "/api/login";
const method = "POST";
console.log(`[REQ] ${method} ${endpoint}`); // [REQ] POST /api/login

// Exercise 9: Inspect types in a fake API response (harder)
// TODO:
// 1) Create const response = { status: 200, body: { token: "abc123", expiresIn: 3600 } }.
// 2) Log types in this exact format:
// "[TYPE] status=number"
// "[TYPE] token=string"
// "[TYPE] expiresIn=number"
const response = { status: 200, body: { token: "abc123", expiresIn: 3600 } };
console.log(`[TYPE] status=${typeof response.status}`);             // [TYPE] status=number
console.log(`[TYPE] status=${typeof response.body.token}`);         // [TYPE] token=string
console.log(`[TYPE] status=${typeof response.body.expiresIn}`);     // [TYPE] expiresIn=number

// Mini QA scenario: Validate a fake response summary using template strings
// TODO:
// 1) Create const apiResult = {
//      status: 200,
//      data: {
//        email: "test@test.com",
//        attempts: 3,
//        success: false
//      }
//    };
// 2) Log exactly these 3 lines using template strings:
//    "[API] status=200"
//    "[API] email=test@test.com"
//    "[API] summary=User test@test.com tried 3 times. Success: false"
// Expected output:
// [API] status=200
// [API] email=test@test.com
// [API] summary=User test@test.com tried 3 times. Success: false
