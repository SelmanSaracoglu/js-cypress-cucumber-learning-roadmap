
## let vs const --> JavaScript has two modern ways to declare variables: `const` and `let`.

- Use `const` by default.
- Use `let` only when you must reassign the variable.

This is different from Java where variables are generally reassignable unless declared `final`.

## let (reassignment allowed) --> `let` allows changing the value later.
~~~js
let attempts = 0;
attempts = attempts + 1;
console.log(attempts);
~~~

Use `let` when the variable must change (counters, loop indexes, accumulating results).

## const (reassignment NOT allowed) --> `const` prevents reassignment of the variable.
~~~js
const baseUrl = "https://example.com";
// baseUrl = "https://new.com"; // ❌ TypeError
console.log(baseUrl);
~~~

This makes code safer and easier to reason about, especially in test automation.

## const with objects (reference vs properties)
With objects and arrays, `const` protects the reference (the variable binding), not the internal data.
You cannot point `user` to a new object, but you can change properties inside the existing object.
~~~js
const user = { name: "Ali", role: "tester" };
user.role = "admin"; // ✅ allowed (property change)
// user = { name: "Veli" }; // ❌ not allowed (reassignment)
~~~

## const with arrays 
Same rule: you cannot reassign the array variable, but you can change items or push new items.
~~~js
const users = [{ name: "Ali", role: "tester" }];
users.push({ name: "Selin", role: "developer" }); // ✅
users[0].role = "admin"; // ✅
// users = []; // ❌ not allowed
~~~

## Why this matters for testers

- Prevents accidental overwrites: e.g., `baseUrl`, selectors, fixture data should not change.
- Makes tests more stable and readable: fewer moving parts, fewer hidden mutations.
- Helps debugging: if something “changes unexpectedly,” `const` reduces possible causes.
- Encourages better patterns in Cypress: keep config/constants immutable, only mutate what’s truly state.

## Common mistakes / gotchas

- Using `let` everywhere out of habit (Java mindset). Prefer `const` first.
- Assuming `const` makes objects immutable (it does NOT). It only prevents reassignment.
- Accidentally mutating shared objects (e.g., test data reused across tests). Mutations can cause flaky tests.
- Confusing errors:
  - Reassigning a `const` variable causes an error.
  - Mutating object properties inside a `const` object is allowed.
