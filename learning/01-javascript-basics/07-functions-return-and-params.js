// 07 - Functions: parameters, return values, default parameters
// Functions allow code reuse and clean logic separation

// Basic function with parameter


function greet(name) {
    console.log('Hello ${name}');
}

greet("Selman");
greet("Hanse");

// Function with return value
function add(a, b) {
    return a + b;
}

const result = add(3, 5);
console.log(result);

// Why return matters
function isAdult(age) {
    if(age >= 18) {
        return true;
    }
    return false;
}

console.log(isAdult(20));
console.log(isAdult(15));

// Default parameters
function login(username, password = "123456") {
    console.log('Username: ${username}');
    console.log('Password: ${password}');
}
login("test user");
login("adminUser", "adminPass");


// Function expression (arrow function)
const multiply = (x, y) => {
    return x*y;
}

console.log(multiply(4, 5));


// Short arrow function (implicit return)
const square = (n) => n * n;
console.log(square(6));

// Mini exercise outputs
function canLogin(email, password) {
    if(email.includes("@") && password.length >= 6) {
        return true;
    }
    return false;  
}

console.log(canLogin("test@test.com", "123456"));
console.log(canLogin("testtest.com", "123"));