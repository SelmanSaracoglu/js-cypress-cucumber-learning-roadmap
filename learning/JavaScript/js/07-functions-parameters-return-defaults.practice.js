// 07 - Functions: parameters, return values, default parameters (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: Basic function with one parameter
// TODO: Write a function greet(name) that logs: "Hello <name>"
// TODO: Call it with "Selman" and "Hanse".
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Selman");
greet("Hanse");

// Exercise 2: Function with return value (add)
// TODO: Write a function add(a, b) that returns the sum.
// TODO: Store result of add(3, 5) in a const and log it.
function add(a, b) {
    return a+b;
}

const result = add(3, 5);
console.log(result); // 8

// Exercise 3: Return boolean (isAdult)
// TODO: Write a function isAdult(age) that returns true if age >= 18, else false.
// TODO: Log isAdult(20) and isAdult(15).
function isAdult(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isAdult(20)); // true
console.log(isAdult(15)); // false


// Exercise 4: Default parameter (login)
// TODO: Write a function login(username, password = "123456") that logs:
// "Username: <username>"
// "Password: <password>"
// TODO: Call login("test user") and login("adminUser", "adminPass").

function login(username, password="123456") {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);   
}

login("test user"); // Username: test user  // Password: 123456
login("adminUser", "adminPass"); // Username: adminUser // Password: adminPass

// Exercise 5: Arrow function with explicit return (multiply)
// TODO: Create const multiply = (x, y) => { ... } that returns x * y.
// TODO: Log multiply(4, 5).

//Arrow function + explicit return
const multiply = (x,y) => {
    return x*y;
};
//Arrow function + implicit return --> const multiply = (x, y) => x * y;
//normal function --> function multiply(x,y) { return x*y; }

console.log(multiply(4,5)); // 20


// Exercise 6: Short arrow function (square)
// TODO: Create const square = (n) => n * n.
// TODO: Log square(6).

const square = n => n*n;
console.log(square(6));  // 36

// Exercise 7: Simplify a boolean function (harder)
// TODO: Write a function isStatusOk(statusCode) that returns true only for 200 or 201.
// TODO: Log isStatusOk(200), isStatusOk(201), isStatusOk(401).
function isStatusOk(statusCode) {
    return statusCode === 200 || statusCode === 201;
}

console.log(isStatusOk(200)); // true
console.log(isStatusOk(201)); // true
console.log(isStatusOk(401)); // false

// Exercise 8: Return value used in if/else (harder)
// TODO:
// 1) Write a function hasValidPassword(password) that returns true if password length >= 6.
// 2) If hasValidPassword("123") is true log "OK" else log "NOT OK".


function hasValidPassword(password) {
    return password.length >= 6;
}

if (hasValidPassword("123")) {
    console.log("OK");
} else {
    console.log("NOT OK"); // NOT OK
}



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
