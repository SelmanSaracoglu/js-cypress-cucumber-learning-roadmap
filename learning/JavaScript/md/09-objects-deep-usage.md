## Objects (deep usage)

Objects represent structured data using key/value pairs. 
In testing, API responses, configuration, and complex test data are usually objects (often nested, like JSON).

## Basic object

~~~js
const user = { id: 1, name: "Ali", active: true };

console.log(user.name);
console.log(user.active);
~~~

## Nested objects (common with API responses)

Nested objects let you group related data.

~~~js
const userProfile = {
  id: 10,
  personal: { firstName: "Ali", lastName: "Yilmaz" },
  account: { email: "ali@test.com", roles: ["user", "tester"] }
};

console.log(userProfile.personal.firstName);
console.log(userProfile.account.email);
~~~

## Update nested values

You can update object properties directly.

~~~js
userProfile.account.email = "newmail@test.com";
console.log(userProfile.account.email);
~~~

## Nested arrays inside objects

Very common pattern: arrays inside object fields (roles, items, products).

~~~js
if (userProfile.account.roles.includes("admin")) {
  console.log("User is admin");
} else {
  console.log("User is NOT admin");
}
~~~

## Add new properties dynamically

You can add new properties at any time.

~~~js
userProfile.account.lastLogin = "2025-01-01";
console.log(userProfile.account);
~~~

## Objects with functions (methods)

Objects can store functions as properties (methods). This is useful for grouping related operations.

~~~js
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  }
};

console.log(calculator.add(3, 4));
console.log(calculator.multiply(2, 5));
~~~

## Why this matters for testers

- API validation: JSON responses are nested objects with arrays (roles, items, permissions).
- Cleaner test data: build objects like `user`, `product`, `order` for reusable test setup.
- Configuration handling: baseUrl, credentials, feature flags often live in objects.
- Readable assertions: checking `response.body.user.email` is standard in API tests.

## Common mistakes / gotchas

- Accessing missing nested paths:
  - `user.profile.email` throws an error if `profile` is `undefined`.
- Typos in property names:
  - JavaScript won’t warn you; it may return `undefined` and cause later failures.
- Mutating shared objects:
  - If multiple tests reuse the same object and you change it, tests can become flaky.
- Assuming `const` objects are immutable:
  - `const` prevents reassignment, but properties can still change.
- Using dot notation when the key is dynamic:
  - If key is in a variable, you need bracket notation: `obj[key]`.
