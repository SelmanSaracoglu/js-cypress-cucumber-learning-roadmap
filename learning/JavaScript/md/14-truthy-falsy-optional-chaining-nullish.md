## Truthy/Falsy + Optional Chaining (?.) + Nullish Coalescing (??)

These concepts prevent flaky tests and incorrect validations when API/UI data contains `undefined`, `null`, empty strings, or zeros.

## 1) Truthy / Falsy

In JavaScript, `if (value)` does **not** require a boolean. Values are evaluated by “truthiness”.

### Falsy values (important)

- `false`
- `0`, `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is truthy (including `[]`, `{}`, `"0"`, `"false"`).

```js
if (0) console.log("runs"); // does NOT run
if ("0") console.log("runs"); // runs
if ([]) console.log("runs"); // runs
if ({}) console.log("runs"); // runs
```

## 2) Optional chaining (?.)

Optional chaining prevents crashes when accessing nested properties. If a part is missing, it returns `undefined`.

```js
const email = apiUser.profile?.email; // safe
```

It also works with arrays:

```js
const firstName = response.data?.users?.[0]?.name;
```

## 3) Nullish coalescing (??)

`??` uses the default **only** when the left side is `null` or `undefined`.
It does **not** treat `0` or `""` as missing.

```js
const scoreFromApi = 0;

const wrong = scoreFromApi || 999; // 999 (bad if 0 is valid)
const correct = scoreFromApi ?? 999; // 0
```

## 4) || vs ?? (common testing bug)

- `||` uses fallback for **any falsy** value (`0`, `""`, `false`, `NaN`, `null`, `undefined`)
- `??` uses fallback only for **null/undefined**

Use `??` when `0` or `""` are valid data.

## Why this matters for testers

- Avoid crashes: `response.body.user.profile?.email` won’t throw when `profile` is missing.
- Avoid false positives/negatives: `0` and `""` may be valid values (score, quantity, nickname).
- Safer defaults: use `??` to apply defaults only when data is truly missing.
- Cleaner validation logic for API response objects.

## Common mistakes / gotchas

- Treating `""` and `0` as “missing” by writing `value || default`.
- `if (email)` checks truthiness, not “exists and is valid” (empty string fails).
- Optional chaining returns `undefined`, which can still break later if you don’t handle it.
- `every([])` is `true` and `some([])` is `false` (surprising when validating lists).
