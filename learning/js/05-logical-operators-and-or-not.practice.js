// 05 - Logical operators: && (AND), || (OR), ! (NOT) (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: AND (&&) basic
// TODO: Create const isLoggedIn = true and const hasPremium = false.
// TODO: If both are true, log "User can access premium content", else log "User cannot access premium content".
// Expected output:
// User cannot access premium content

// Exercise 2: OR (||) basic
// TODO: Create const isAdmin = false and const isEditor = true.
// TODO: If either is true, log "User can edit content", else log "User cannot edit content".
// Expected output:
// User can edit content

// Exercise 3: NOT (!) basic
// TODO: Create const isBlocked = false.
// TODO: If NOT blocked, log "User is allowed to proceed", else log "User is blocked".
// Expected output:
// User is allowed to proceed

// Exercise 4: Combined OR + AND (parentheses required)
// TODO: Create const statusCode = 201 and const responseTimeMs = 850.
// TODO: Rule: pass if status is 200 or 201 AND responseTimeMs < 1000.
// TODO: Log "API check passed" or "API check failed".
// Expected output:
// API check passed

// Exercise 5: Credentials rule with includes + length
// TODO: Create const email = "test@test.com" and const password = "123456".
// TODO: Rule: valid if email includes "@" AND password length >= 6.
// TODO: Log "Credentials look valid" else "Credentials look invalid".
// Expected output:
// Credentials look valid

// Exercise 6: Multiple allowed roles (harder)
// TODO: Create const role = "viewer".
// TODO: Rule: editing allowed if role is "admin" OR role is "editor".
// TODO: Log "Edit allowed" or "Edit denied".
// Expected output:
// Edit denied

// Exercise 7: Blocked OR too many attempts (harder)
// TODO:
// 1) Create const attempts = 5 and const isBlockedUser = false.
// 2) Rule: deny if isBlockedUser is true OR attempts >= 5.
// 3) Log "Access denied" or "Access granted".
// Expected output:
// Access denied

// Exercise 8: Negation with equality (harder)
// TODO: Create const status = "FAIL".
// TODO: If status is NOT equal to "PASS", log "Test failed", else log "Test passed".
// Expected output:
// Test failed

// Mini QA scenario: Validate a signup API response
// TODO:
// 1) Create const response = { status: 201, timeMs: 850, hasToken: true }.
// 2) Rule: "OK" if (status is 200 or 201) AND timeMs < 1000 AND hasToken is true.
// 3) Otherwise log "NOT OK".
// Expected output:
// OK
