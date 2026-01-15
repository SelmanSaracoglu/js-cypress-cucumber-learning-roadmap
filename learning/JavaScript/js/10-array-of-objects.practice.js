// 10 - Array of objects (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: Create and log an array of objects
// TODO: Create const users with 3 objects:
// { name: "Ali", role: "tester", active: true }
// { name: "Ayse", role: "admin", active: true }
// { name: "Mehmet", role: "user", active: false }
// TODO: Log users.
// Expected output:
// [ { name: 'Ali', role: 'tester', active: true },
//   { name: 'Ayse', role: 'admin', active: true },
//   { name: 'Mehmet', role: 'user', active: false } ]

// Exercise 2: Access single object fields
// TODO: Log users[0].name and users[1].role on separate lines.
// Expected output:
// Ali
// admin

// Exercise 3: Loop and print name + role
// TODO: Loop through users and log exactly:
// "Ali is a tester"
// "Ayse is a admin"
// "Mehmet is a user"
// Expected output:
// Ali is a tester
// Ayse is a admin
// Mehmet is a user

// Exercise 4: Print only active users (manual filter)
// TODO: Loop through users and if user.active is true, log:
// "<name> is active"
// Expected output:
// Ali is active
// Ayse is active

// Exercise 5: Check if at least one admin exists (flag pattern)
// TODO:
// 1) Create let adminFound = false.
// 2) Loop through users. If role === "admin", set adminFound = true.
// 3) After loop, if adminFound log "Admin exists" else log "No admin found".
// Expected output:
// Admin exists

// Exercise 6: Check if all users have a role (harder)
// TODO:
// 1) Create let allHaveRole = true.
// 2) Loop through users. If any user.role is missing or empty string, set allHaveRole = false.
// 3) Log exactly: "allHaveRole: <value>"
// Expected output:
// allHaveRole: true

// Exercise 7: Count inactive users (harder)
// TODO:
// 1) Count how many users have active === false.
// 2) Log exactly: "inactive count: <number>"
// Expected output:
// inactive count: 1

// Mini QA scenario: Validate a fake API users response
// TODO:
// 1) Create const response = { status: 200, data: users }.
// 2) Rule: PASS if status === 200 AND at least one admin exists AND inactive count === 1.
// 3) Log exactly one line: "[API] PASS" or "[API] FAIL".
// Expected output:
// [API] PASS
