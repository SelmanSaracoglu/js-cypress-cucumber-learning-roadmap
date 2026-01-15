## Destructuring + Spread & Rest

These features help you write cleaner, less repetitive code when working with API responses, request payloads, arrays of test data, and Cypress/Cucumber step inputs.

## Object destructuring

Extract properties into variables (instead of repeating `obj.field`).

~~~js
const user = { firstName: "John", lastName: "Doe", role: "admin" };

const { firstName, lastName } = user;
console.log(firstName, lastName); // John Doe
~~~

### Renaming (alias)

~~~js
const { role: userRole } = user;
console.log(userRole); // admin
~~~

### Default values

If a property is missing, a default prevents `undefined`.

~~~js
const { phoneNumber = "N/A" } = user;
console.log(phoneNumber); // N/A
~~~

### Nested destructuring

Useful for API responses with nested objects.

~~~js
const user2 = { address: { city: "Berlin", country: "Germany" } };

const { address: { city, country } } = user2;
console.log(city, country); // Berlin Germany
~~~

## Array destructuring

Extract items by position.

~~~js
const orders = [{ orderId: 1 }, { orderId: 2 }, { orderId: 3 }];

const [firstOrder, secondOrder] = orders;
console.log(firstOrder.orderId, secondOrder.orderId); // 1 2
~~~

### Skipping + defaults

~~~js
const [, , thirdOrder] = orders;
console.log(thirdOrder.orderId); // 3

const prices = [10, 20];
const [p1, p2, p3 = 0] = prices;
console.log(p1, p2, p3); // 10 20 0
~~~

## Spread operator (...) = expand / copy / merge

### Arrays

Combine or copy arrays without mutating the originals.

~~~js
const baseTags = ["smoke", "regression"];
const extraTags = ["ui", "critical"];

const allTags = [...baseTags, ...extraTags];
~~~

### Objects (merge + override)

Build request payloads cleanly (very common in API tests).

~~~js
const baseBody = { userId: 101, role: "user", isActive: true };

const adminBody = {
  ...baseBody,
  role: "admin",
  permissions: ["read", "write"]
};
~~~

## Rest operator (...) = collect “the rest”

### Function parameters

Collect many arguments into an array.

~~~js
function logAssertionResults(testName, ...messages) {
  console.log(testName, messages.length);
}
~~~

### Object destructuring (remaining fields)

~~~js
const response = { status: 200, time: 180, data: { id: 10 }, meta: { v: 1 } };
const { status, time, ...otherProps } = response;
// otherProps = { data: ..., meta: ... }
~~~

### Array destructuring (remaining items)

~~~js
const codes = [200, 201, 400, 401, 404, 500];
const [first, second, ...errors] = codes;
~~~

## Why this matters for testers

- Faster API validations: destructure `status`, `time`, `data` from responses quickly.
- Cleaner test data: spread helps build payload variations (admin/guest/disabled) from one base.
- Less duplication in Cypress code: avoid repeating `response.body.data.user.email` everywhere.
- Safer handling of missing fields: defaults prevent unexpected `undefined` in logs/logic.
- Flexible helper functions: rest params make “log all assertion messages” easy.

## Common mistakes / gotchas

- Destructuring missing nested objects can throw:
  - `const { address: { city } } = user` fails if `address` is `undefined`.
- Spread is shallow:
  - Nested objects are not deep-copied (mutations can leak between tests).
- Rest must be last:
  - In parameters: `function f(...rest, x)` is invalid.
  - In destructuring: `const [...rest, last] = arr` is invalid.
- Renaming confusion:
  - `{ isActive: active }` creates variable `active`, not `isActive`.
- Mixing spread/rest mentally:
  - Spread “expands”, Rest “collects”.
