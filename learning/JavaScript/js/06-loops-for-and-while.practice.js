// 06 - Loops: for and while (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: for loop basics
// TODO: Use a for loop to print:
// "for loop iteration: 1"
// "for loop iteration: 2"
// "for loop iteration: 3"
// Expected output:
// for loop iteration: 1
// for loop iteration: 2
// for loop iteration: 3

// Exercise 2: Iterate over an array by index
// TODO: Create const roles = ["user", "admin", "tester"].
// TODO: Use a for loop to log exactly:
// "Role at index 0: user"
// "Role at index 1: admin"
// "Role at index 2: tester"
// Expected output:
// Role at index 0: user
// Role at index 1: admin
// Role at index 2: tester

// Exercise 3: while loop with counter
// TODO: Create let attempts = 0.
// TODO: While attempts < 3, increment attempts by 1 and log:
// "while loop attempt: <attempts>"
// Expected output:
// while loop attempt: 1
// while loop attempt: 2
// while loop attempt: 3

// Exercise 4: break when first odd number is found
// TODO: Create const numbers = [2, 4, 6, 7, 8].
// TODO: Loop through numbers and when you find the first odd number, log:
// "First odd number found: 7"
// Then break.
// Expected output:
// First odd number found: 7

// Exercise 5: continue to skip an iteration
// TODO: Use a for loop from 1 to 5.
// TODO: Skip number 3 using continue.
// TODO: Log:
// "Number (skipping 3): 1"
// "Number (skipping 3): 2"
// "Number (skipping 3): 4"
// "Number (skipping 3): 5"
// Expected output:
// Number (skipping 3): 1
// Number (skipping 3): 2
// Number (skipping 3): 4
// Number (skipping 3): 5

// Exercise 6: Print numbers from 1 to 5 (easy)
// TODO: Use a for loop to print numbers 1..5 each on its own line.
// Expected output:
// 1
// 2
// 3
// 4
// 5

// Exercise 7: Print only words longer than 4 characters (harder)
// TODO: Create const words = ["cat", "house", "car", "apple", "tea"].
// TODO: Loop over words. If word length <= 4, continue.
// TODO: For long words, log:
// "Long word: house"
// "Long word: apple"
// Expected output:
// Long word: house
// Long word: apple

// Exercise 8: Count matching items (harder)
// TODO:
// 1) Create const roles2 = ["user", "admin", "user", "tester", "user"].
// 2) Count how many are exactly "user" using a loop.
// 3) Log exactly: "user count: <number>"
// Expected output:
// user count: 3

// Mini QA scenario: Validate a fake API users list
// TODO:
// 1) Create const apiUsers = [
//      { id: 1, role: "user", active: true },
//      { id: 2, role: "admin", active: true },
//      { id: 3, role: "user", active: false },
//      { id: 4, role: "tester", active: true }
//    ];
// 2) Using a loop, count:
//    - total users
//    - active users
//    - users with role "user"
// 3) Log exactly these lines:
//    "[API] total=4"
//    "[API] active=3"
//    "[API] role_user=2"
// Expected output:
// [API] total=4
// [API] active=3
// [API] role_user=2
