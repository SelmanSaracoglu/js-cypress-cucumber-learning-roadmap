// 07 - Functions: parameters, return values, default parameters (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: Basic function with one parameter
// TODO: Write a function greet(name) that logs: "Hello <name>"
// TODO: Call it with "Selman" and "Hanse".
// Expected output:
// Hello Selman
// Hello Hanse

// Exercise 2: Function with return value (add)
// TODO: Write a function add(a, b) that returns the sum.
// TODO: Store result of add(3, 5) in a const and log it.
// Expected output:
// 8

// Exercise 3: Return boolean (isAdult)
// TODO: Write a function isAdult(age) that returns true if age >= 18, else false.
// TODO: Log isAdult(20) and isAdult(15).
// Expected output:
// true
// false

// Exercise 4: Default parameter (login)
// TODO: Write a function login(username, password = "123456") that logs:
// "Username: <username>"
// "Password: <password>"
// TODO: Call login("test user") and login("adminUser", "adminPass").
// Expected output:
// Username: test user
// Password: 123456
// Username: adminUser
// Password: adminPass

// Exercise 5: Arrow function with explicit return (multiply)
// TODO: Create const multiply = (x, y) => { ... } that returns x * y.
// TODO: Log multiply(4, 5).
// Expected output:
// 20

// Exercise 6: Short arrow function (square)
// TODO: Create const square = (n) => n * n.
// TODO: Log square(6).
// Expected output:
// 36

// Exercise 7: Simplify a boolean function (harder)
// TODO: Write a function isStatusOk(statusCode) that returns true only for 200 or 201.
// TODO: Log isStatusOk(200), isStatusOk(201), isStatusOk(401).
// Expected output:
// true
// true
// false

// Exercise 8: Return value used in if/else (harder)
// TODO:
// 1) Write a function hasValidPassword(password) that returns true if password length >= 6.
// 2) If hasValidPassword("123") is true log "OK" else log "NOT OK".
// Expected output:
// NOT OK

// Mini QA scenario: Validate login credentials
// TODO:
// 1) Write a function canLogin(email, password) that returns true if:
//    - email includes "@"
//    - AND password length >= 6
// 2) Log these two calls:
//    canLogin("test@test.com", "123456")
//    canLogin("testtest.com", "123")
// Expected output:
// true
// false
