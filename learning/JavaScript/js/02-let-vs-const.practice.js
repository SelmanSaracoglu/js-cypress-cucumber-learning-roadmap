

// Exercise 1: Use let for a counter
// TODO: Create let attempts = 0, log it, increment by 1, log it again.
let attempts = 0;
console.log("attempts:", attempts); // attempts: 0
attempts = attempts + 1;
console.log("attempts:", attempts); // attempts: 1

// Exercise 2: Use const for a constant URL
// TODO: Create const baseUrl = "https://example.com" and log it with label "baseUrl:".
const baseUrl = "https://example.com";
console.log("baseUrl:", baseUrl); // baseUrl: https://example.com

// Exercise 3: Prevent reassignment (read the instruction carefully)
// TODO: Create const env = "staging" and log it.
// TODO: Add a commented-out line that would try to reassign env to "prod".
const env = "staging";
// env = "prod";
console.log("env:", env); // env: staging

// Exercise 4: const object property update
// TODO: Create const user = { name: "Ali", role: "tester" }.
// TODO: Log it as "user before:" then update role to "admin", then log as "user after:".
const user = { name: "Ali", role: "tester" }; 
console.log("user before:", user); // user before: { name: 'Ali', role: 'tester' }
user.role = "admin";
console.log("user after:", user); // user after: { name: 'Ali', role: 'admin' }

// Exercise 5: const array push + item update
// TODO: Create const users with 3 objects: (Ali tester), (Veli admin), (Ayşe user).
const users = [{name: "Ali", role: "tester"}, {name: "Veli", role: "admin"}, {name: "Ayşe", role:"user"}]
// TODO: Log "count before:" with users.length.
console.log("count before:", users.length); // 3
// TODO: Push one more user: (Selin developer).
users.push ({name:"Selin", role:"developer"});
// TODO: Change Ali's role to "admin".
users[0].role = "admin";
// TODO: Log "count after:" with users.length.
console.log("count after:", users.length); // 4
// TODO: Log "first user:" with the first object.
console.log("first user:", users[0]); // first user: { name: 'Ali', role: 'admin' }

// Exercise 6: Choose const vs let (easy)
// TODO: Create const email = "test@test.com".
const email = "test@test.com";
// TODO: Create let loginCount = 0, increment it by 1.
let loginCount = 0;
loginCount = loginCount + 1;
// TODO: Log both with labels "email:" and "loginCount:".
console.log("email:", email); // email: test@test.com
console.log("loginCount:", loginCount); // loginCount: 1

// Exercise 7: Avoid unnecessary let (harder)
// TODO: Create a variable for a selector string ".login-button" using const.
const loginButton = ".login-button";
// TODO: Log "selector:" and the value.
console.log("selector:", loginButton); // selector: .login-button

// Exercise 8: Mutation risk (harder)
// TODO: Create const sharedUser = { name: "Ali", role: "tester" }.
const sharedUser = { name: "Ali", role: "tester" };
// TODO: Create const testUserA = sharedUser and const testUserB = sharedUser.
const testUserA = sharedUser;
const testUserB = sharedUser;
// TODO: Change testUserA.role to "admin".
testUserA.role = "admin";
// TODO: Log both as "A:" and "B:".
console.log("A:", testUserA); // A: { name: 'Ali', role: 'admin' }
console.log("B:", testUserB); // B: { name: 'Ali', role: 'admin' }


// Mini QA scenario: Build test data safely (no reassignment)
// TODO:
// 1) Create const baseUser = { role: "user", isActive: true }.
// 2) Create const users = [].
// 3) Add 3 users into the array using push. Each user must have: id, name, role, isActive.
//    - Use baseUser values for defaults, but override role for at least one user.
// 4) Log:
//    "[DATA] total=<number>"
//    "[DATA] active=<number>"
//    "[DATA] admins=<number>"
// Expected output:
// [DATA] total=3
// [DATA] active=3
// [DATA] admins=1
