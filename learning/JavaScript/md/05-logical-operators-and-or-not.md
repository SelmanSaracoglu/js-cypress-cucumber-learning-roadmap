## Logical operators: &&, ||, !

Logical operators combine conditions and return a boolean result. They are used constantly in test automation to decide which branch to run (e.g., allow/deny, pass/fail, handle multiple valid statuses).

## && (AND)

`A && B` is true only if **both** sides are true.

~~~js
const isLoggedIn = true;
const hasPremium = false;

if (isLoggedIn && hasPremium) {
  console.log("User can access premium content");
} else {
  console.log("User cannot access premium content");
}
~~~

## || (OR)

`A || B` is true if **at least one** side is true.

~~~js
const isAdmin = false;
const isEditor = true;

if (isAdmin || isEditor) {
  console.log("User can edit content");
} else {
  console.log("User cannot edit content");
}
~~~

## ! (NOT)

`!A` flips a boolean.

~~~js
const isBlocked = false;

if (!isBlocked) {
  console.log("User is allowed to proceed");
} else {
  console.log("User is blocked");
}
~~~

## Grouping with parentheses

When combining `&&` and `||`, use parentheses to make intent explicit and avoid mistakes.

Example rule: pass if status is 200/201 AND response time is under 1000ms.

~~~js
const statusCode = 201;
const responseTimeMs = 850;

if ((statusCode === 200 || statusCode === 201) && responseTimeMs < 1000) {
  console.log("API check passed");
} else {
  console.log("API check failed");
}
~~~

## Short-circuit behavior (important)

- `A && B`: if `A` is false, `B` is not evaluated.
- `A || B`: if `A` is true, `B` is not evaluated.

This is useful (and sometimes risky) in tests, especially when the right side calls a function or accesses a property.

## Why this matters for testers

- API validations: allow multiple success codes (200/201/204) and also enforce performance limits.
- Role-based UI: decide access for admin/editor/user states.
- Guard clauses: prevent errors by checking existence before deeper checks (e.g., `obj && obj.prop`).
- Cleaner test logic: avoids nested `if` blocks and keeps steps readable.

## Common mistakes / gotchas

- Confusing `&&` and `||` in rules (very common in authorization logic).
- Missing parentheses in combined conditions:
  - Always group `OR` parts when also using `AND`.
- Using `&` or `|` by accident (bitwise operators, not logical operators).
- Assuming `&&` / `||` always return booleans:
  - In JavaScript they return one of the operands (truthy/falsy), though in `if(...)` it behaves as a boolean check.
- Negation confusion:
  - `!isBlocked` means “not blocked”, but double negatives get unreadable fast.
