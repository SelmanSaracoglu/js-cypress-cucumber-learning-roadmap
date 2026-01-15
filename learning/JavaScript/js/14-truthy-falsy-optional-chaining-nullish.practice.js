// 14 - Truthy/Falsy + Optional Chaining (?.) + Nullish Coalescing (??) (Practice)
// TODO-only exercises. Do NOT include solutions.
// Use const by default; use let only when reassignment is required.

// Exercise 1: Falsy detection (easy)
// TODO: Create const values = [false, 0, "", null, undefined, NaN].
// TODO: Loop through values and log exactly:
// "Falsy value detected: <value>"
// Use String(value) so undefined/null/NaN are visible.
// Expected output:
// Falsy value detected: false
// Falsy value detected: 0
// Falsy value detected: 
// Falsy value detected: null
// Falsy value detected: undefined
// Falsy value detected: NaN

// Exercise 2: Truthy detection (easy)
// TODO: Create const values = [[], {}, "0", "false", 1].
// TODO: Loop and log exactly:
// "Truthy value detected: <value>"
// For arrays/objects, log JSON.stringify(value).
// Expected output:
// Truthy value detected: []
// Truthy value detected: {}
// Truthy value detected: 0
// Truthy value detected: false
// Truthy value detected: 1

// Exercise 3: Optional chaining (safe access)
// TODO:
// 1) Create const apiUserA = { id: 1, profile: { email: "a@example.com" } }.
// 2) Create const apiUserB = { id: 2 }.
// 3) Read emails safely using optional chaining and log:
// "Email A: a@example.com"
// "Email B: undefined"
// Expected output:
// Email A: a@example.com
// Email B: undefined

// Exercise 4: Optional chaining with arrays
// TODO:
// 1) Create const apiResponse = { data: { users: [{ name: "John" }, { name: "Jane" }] } }.
// 2) Safely read first user's name using ?. and log:
// "First user name: John"
// Expected output:
// First user name: John

// Exercise 5: Nullish coalescing (??) vs OR (||) with number
// TODO:
// 1) Create const scoreFromApi = 0.
// 2) Create const scoreWithOr = scoreFromApi || 999.
// 3) Create const scoreWithNullish = scoreFromApi ?? 999.
// 4) Log exactly:
// "scoreWithOr: 999"
// "scoreWithNullish: 0"
// Expected output:
// scoreWithOr: 999
// scoreWithNullish: 0

// Exercise 6: Nullish coalescing (??) vs OR (||) with empty string
// TODO:
// 1) Create const nicknameFromApi = "".
// 2) Create const nickWithOr = nicknameFromApi || "NoNickname".
// 3) Create const nickWithNullish = nicknameFromApi ?? "NoNickname".
// 4) Log exactly:
// "nickWithOr: NoNickname"
// "nickWithNullish: "
// Expected output:
// nickWithOr: NoNickname
// nickWithNullish: 

// Exercise 7: Correct default for quantity (harder)
// TODO:
// 1) Create const quantity = 0.
// 2) Create quantityDisplayWrong using || with fallback 1.
// 3) Create quantityDisplayCorrect using ?? with fallback 1.
// 4) Log exactly:
// "quantityDisplayWrong: 1"
// "quantityDisplayCorrect: 0"
// Expected output:
// quantityDisplayWrong: 1
// quantityDisplayCorrect: 0

// Exercise 8: Safe nested defaults (harder)
// TODO:
// 1) Create const userResponse = {
//      id: 10,
//      account: { email: "user10@example.com" },
//      preferences: null
//    };
// 2) Create safeEmail = userResponse.account?.email
// 3) Create safePhone = userResponse.account?.phone ?? "NoPhoneProvided"
// 4) Create safeTheme = userResponse.preferences?.theme ?? "light"
// 5) Log exactly:
// "safeEmail: user10@example.com"
// "safePhone: NoPhoneProvided"
// "safeTheme: light"
// Expected output:
// safeEmail: user10@example.com
// safePhone: NoPhoneProvided
// safeTheme: light

// Mini QA scenario: API response validation (no crashes, correct defaults)
// TODO:
// 1) Create const apiCreateUserResponse = {
//      status: 201,
//      time: 220,
//      data: {
//        id: 999,
//        email: "jane.doe@example.com",
//        quantity: 0,
//        profile: null
//      }
//    };
// 2) Safely read:
//    - email (must include "@")
//    - profile theme (default "light" if missing/null)
//    - quantity display (0 must stay 0; default to 1 only if null/undefined)
// 3) Log exactly these lines:
// "[API] emailOk=true"
// "[API] theme=light"
// "[API] quantity=0"
// Expected output:
// [API] emailOk=true
// [API] theme=light
// [API] quantity=0
