

// Exercise 1: Create and log basic types
// TODO: Create const username = "testUser", const attempts = 2, const isLoggedIn = true.
const username = "testUser";
const attempts = 2;
const isLoggedIn = true;
// TODO: Log each on a separate line with labels: "username:", "attempts:", "isLoggedIn:".
console.log("username:", username);
console.log("attempts:", attempts);
console.log("isLoggedIn:", isLoggedIn);


// Exercise 2: undefined
// TODO: Declare let lastLoginTime; (do not assign).
let lastLoginTime;
// TODO: Log it with label "lastLoginTime:".
console.log("lastLoginTime:", lastLoginTime);
// Expected output:
// lastLoginTime: undefined

// Exercise 3: object
// TODO: Create const user = { name: "Ali", age: 30, active: true }.
// TODO: Log it with label "user:".
// Expected output:
// user: { name: 'Ali', age: 30, active: true }

// Exercise 4: typeof checks (easy)
// TODO: Using the variables above, log typeof each with labels:
// "type username:", "type attempts:", "type isLoggedIn:", "type lastLoginTime:", "type user:".
// Expected output:
// type username: string
// type attempts: number
// type isLoggedIn: boolean
// type lastLoginTime: undefined
// type user: object

// Exercise 5: typeof null (gotcha)
// TODO: Create const value = null.
// TODO: Log: "type value:" and typeof value.
// Expected output:
// type value: object

// Exercise 6: Template strings (easy)
// TODO: Create const pageName = "Login" and const statusCode = 200.
// TODO: Log these exact lines using template strings:
// "Navigating to Login page"
// "Login finished with status code: 200"
// Expected output:
// Navigating to Login page
// Login finished with status code: 200

// Exercise 7: Template string with multiple variables (harder)
// TODO: Create const email = "test@test.com", const tryCount = 3, const success = false.
// TODO: Log exactly:
// "User test@test.com tried 3 times. Success: false"
// Expected output:
// User test@test.com tried 3 times. Success: false

// Exercise 8: Build a debug message for testers (harder)
// TODO: Create const endpoint = "/api/login" and const method = "POST".
// TODO: Log exactly:
// "[REQ] POST /api/login"
// Expected output:
// [REQ] POST /api/login

// Exercise 9: Inspect types in a fake API response (harder)
// TODO:
// 1) Create const response = { status: 200, body: { token: "abc123", expiresIn: 3600 } }.
// 2) Log types in this exact format:
// "[TYPE] status=number"
// "[TYPE] token=string"
// "[TYPE] expiresIn=number"
// Expected output:
// [TYPE] status=number
// [TYPE] token=string
// [TYPE] expiresIn=number

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
