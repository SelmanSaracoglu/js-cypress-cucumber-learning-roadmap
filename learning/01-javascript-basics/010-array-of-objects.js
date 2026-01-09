
// 10 - Array of objects
// This structure mirrors REAL testing data:
// e.g. user list, product inventory, API responses

const users = [
  { name: "Ali", role: "tester", active: true },
  { name: "Ayse", role: "admin", active: true },
  { name: "Mehmet", role: "user", active: false }
];

console.log(users);

// Access single object
console.log(users[0].name);
console.log(users[1].role);

// Loop through list
for ( let i = 0; i < users.length; i++) {
    console.log('${users[i].name} is a ${users[i].role}');
}

// Filter active users (manual loop)
for( let i = 0; i < users.length; i++) {
    if(users[i].active) {
        console.log('${users[i].name} is active');
    }
}

// Mini exercise outputs
// Check if there is at least one admin
let adminFound = false;

for( let i = 0; i < users.length; i++) {
    if (users[i].role === "admin") {
        adminFound = true;
    }
}

if(adminFound) {
    console.log("Admin exists");
} else {
    console.log("No admin found");
}
