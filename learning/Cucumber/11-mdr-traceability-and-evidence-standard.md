## MDR Traceability and Evidence Standard (Req → Tests → Results)

“MDR traceability” means you can answer, quickly and confidently:
- Which requirements are covered by automated tests?
- Which tests prove that coverage?
- Where is the evidence (run output, screenshots, videos, reports)?
- What failed, when, and why?

This step defines a simple, repo-friendly standard you can apply immediately.

---

## 1) Traceability chain (the core idea)

You must be able to link:

**Requirement (US/AC) → Scenario (BDD) → Automation ID → Execution Evidence**

Example:
- Requirement: `US-LOGIN-DSHOP-020`
- Scenario: `AUT-050 | Invalid login shows error`
- Evidence: Cypress video + screenshot + CI logs

---

## 2) Naming + tagging standard (enforced rules)

### Scenario naming rule
Every scenario must start with:
- `AUT-### | ...`

Example:
~~~gherkin
Scenario: AUT-050 | Invalid login shows error
~~~

### Tagging rule (minimum)
Every scenario must include:
1) One requirement tag:
   - `@US-...` or `@AC-...`
2) One pack tag:
   - `@smoke` or `@regression`
3) One type tag:
   - `@ui` or `@api`
4) Optional:
   - `@negative`, `@wip`, `@critical`

Example:
~~~gherkin
@US-LOGIN-DSHOP-020 @smoke @ui @negative
Scenario: AUT-050 | Invalid login shows error
  ...
~~~

---

## 3) Traceability matrix (MDR table)

Keep a simple markdown table in your repo, e.g.:
- `docs/mdr/traceability-matrix.md`

Template:

| Req/US/AC ID | Feature | Scenario | Automation ID | Pack | Type | Tags | Evidence |
|---|---|---|---|---|---|---|---|
| US-LOGIN-DSHOP-020 | DemoWebShop Login | Invalid login shows error | AUT-050 | smoke | ui | @negative | runner video + screenshot |
| US-SEARCH-002 | Search | Search with different keywords | AUT-017 | regression | ui | - | CI run logs |

Rules:
- One row = one scenario (or one outline)
- Evidence should point to what Cypress generates (video/screenshot/log)

---

## 4) Evidence standard (what counts)

Cypress evidence options:
- **Cypress Runner**: command log + UI snapshot (manual)
- **Screenshots**: automatically captured on failure
- **Videos**: recorded in `cypress run` (config dependent)
- **CI logs**: console output + JUnit results if configured (optional later)

Minimum evidence rule:
- For local learning: “Runner screenshot/video”
- For CI/portfolio: “cypress run video + failure screenshot + CI log”

---

## 5) Scenario Outline traceability

For Scenario Outlines:
- One AUT ID is acceptable (represents multiple rows)
- Evidence includes multiple executions

Example:
~~~gherkin
Scenario Outline: AUT-017 | Search with different keywords
...
Examples:
  | keyword |
  | laptop  |
  | camera  |
~~~

MDR entry:
- one row for `AUT-017`
- note: “Runs for 2 datasets”

---

## 6) Where to store MDR docs in the repo

Recommended:

~~~text
docs/
  mdr/
    traceability-matrix.md
    tag-strategy.md
    evidence-notes.md
~~~

This makes your GitHub portfolio look professional.

---

## Why this matters for testers

- MDR is what makes automation “auditable” and “trusted”.
- Helps you explain coverage in interviews: not just tests, but evidence.
- Makes release readiness easier: you know which requirements are proven.
- Prevents “random scripts” feeling—turns it into a system.

---

## Common mistakes / gotchas

- No consistent IDs → impossible to track coverage.
- Tagging without a strategy → packs become unreliable.
- Missing requirement tags → MDR becomes manual.
- Evidence not defined → “tests exist” but no proof for stakeholders.
- Over-documentation:
  - Keep MDR minimal, keep it updated.

---

## Missing but important

### Add MDR as part of Definition of Done
Rule:
- No scenario is “done” until it has:
  - AUT ID
  - requirement tag
  - pack/type tags
  - MDR matrix row updated
