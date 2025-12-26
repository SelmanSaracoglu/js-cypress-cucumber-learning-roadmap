// 06 - Loops: for and while
// Loops repeat actions. In test automation, loops are used carefully.
// This file covers basic loop syntax and safe patterns.

// for loop: repeat a known number of times
for (let i = 1; i <= 3; i++) {
  console.log(`for loop iteration: ${i}`);
}

// common pattern: iterate over an array
const roles = ["user", "admin", "tester"];

for (let i = 0; i < roles.length; i++) {
  console.log(`Role at index ${i}: ${roles[i]}`);
}

// while loop: repeat until a condition becomes false
let attempts = 0;

while (attempts < 3) {
  attempts = attempts + 1;
  console.log(`while loop attempt: ${attempts}`);
}

// break: stop the loop early
const numbers = [2, 4, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(`First odd number found: ${numbers[i]}`);
    break;
  }
}

// continue: skip current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`Number (skipping 3): ${i}`);
}

// Mini exercise outputs
// 1) Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2) Print only values longer than 4 characters
const words = ["cat", "house", "car", "apple", "tea"];

for (let i = 0; i < words.length; i++) {
  if (words[i].length <= 4) {
    continue;
  }
  console.log(`Long word: ${words[i]}`);
}
