

// 09 - Objects (deep usage)
// Objects represent structured data.
// In testing, API responses and configs are modeled as objects.

// Basic object
const user = {
    id: 1,
    name: "Ali",
    active: true
};

console.log(user.name);
console.log(user.active);

// Nested object (very common)

const userProfile = {
    id:10,
    personal: {
        firstName: "Ali",
        lastName: "Yilmaz"
    },
    account: {
        email: "ali@test.com",
        roles: ["user", "tester"]
    }
};

// Access nested values
console.log(userProfile.personal.firstName);
console.log(userProfile.account.email);

// Update nested values
userProfile.account.email = "newmail@test.com";
console.log(userProfile.account.email);

// Check nested array values
if(userProfile.account.roles.includes("admin")) {
    console.log("User is admin");
} else {
    console.log("User is NOT admin");
}

// Add new property dynamically
userProfile.account.lastLogin = "2025-01-01";
console.log(userProfile.account);

// Object with functions (methods)
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};

console.log(calculator.add(3, 4));
console.log(calculator.multiply(2, 5));

// Mini exercise outputs
const product = {
    name: "Laptop",
    price: 1200,
    stock: {
        available: true,
        count: 5
    }
};

if (product.stock.available && product.stock.count > 0) {
    console.log("Product can be purchased");
} else {
    console.log("Product is out of stock")
}





