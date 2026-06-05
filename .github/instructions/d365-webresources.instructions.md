---
applyTo: '**'
description: 'Best practices for developing Dynamics 365 JavaScript web resources, including structure, maintainability, performance, security, and supportability.'
---

# Dynamics 365 JavaScript Web Resource Best Practices

This guidance describes reusable patterns and anti-patterns for client-side JavaScript used in Dynamics 365 / Power Platform web resources.

**Severity levels:**

- **CRITICAL** — Code that creates functional failure, security risk, or unsupported behavior in Dynamics 365.
- **IMPORTANT** — Code that reduces maintainability, performance, or compatibility with platform upgrades.
- **SUGGESTION** — Improvements for readability, tooling, or developer experience.

---

## Core principles

- Use supported client API and avoid unsupported DOM or internal Xrm object access.
- Keep business logic out of web resources when possible; prefer Power Fx, business rules, plugins, or Power Automate for process logic.
- Build modular, testable JavaScript with clear namespace/closure boundaries.
- Use solution-aware web resources and version them with solution layering.
- Optimize for performance on form load and ribbon actions.

## Supported API and platform compatibility

| Rule | Summary | Severity |
|------|---------|----------|
| Use `formContext` instead of global `Xrm.Page` | `Xrm.Page` is deprecated. Use the execution context to get the form context. | IMPORTANT |
| Avoid unsupported DOM selectors | Do not query or modify DOM elements directly with `document.querySelector` or `getElementById`. | CRITICAL |
| Use supported client-side events only | Register code through form event handlers or ribbon commands, not by attaching custom DOM listeners to internal controls. | IMPORTANT |
| Avoid proprietary browser APIs | Target the browser support model for Dynamics 365 and avoid APIs not supported by supported browsers. | SUGGESTION |

## Code structure anti-patterns (C1-C5)

### C1: Global variables without namespace
- **Severity:** IMPORTANT
- **Detection:** `var myValue = ...` or `window.myValue` in a web resource.
- Use a single namespace object or Immediately Invoked Function Expression (IIFE) to avoid collisions.

```js
// GOOD
var MyApp = MyApp || {};
MyApp.ContactForm = {
  onLoad: function (executionContext) {
    var formContext = executionContext.getFormContext();
  }
};
```

### C2: Complex logic in web resource functions
- **Severity:** IMPORTANT
- **Detection:** Large functions with business rules and API calls inside form event handlers.
- Move reusable business logic into separate modules or service classes.

### C3: Unsupported DOM access
- **Severity:** CRITICAL
- **Detection:** `document.querySelector`, `getElementById`, `innerHTML`, or custom styling of internal controls.
- Use `formContext.getControl()` and supported client APIs.

### C4: Hardcoded entity metadata or schema names
- **Severity:** IMPORTANT
- **Detection:** `accountid`, `new_customfield`, or status code values embedded in code.
- Abstract schema names and option set values into configurable constants or web resource configuration.

### C5: Mixing UI and business logic
- **Severity:** SUGGESTION
- **Detection:** Web resource code that both updates UI and contains business rule computation.
- Separate presentation-level code from domain logic.

## Event and form handling

### E1: Using `executionContext.getFormContext()` incorrectly
- **Severity:** IMPORTANT
- **Detection:** Retrieving `Xrm.Page` or ignoring executionContext on event handlers.
- Correct pattern:

```js
function onSave(executionContext) {
  var formContext = executionContext.getFormContext();
}
```

### E2: Registering the same handler repeatedly
- **Severity:** IMPORTANT
- **Detection:** Multiple event registrations for same event in code or form customization.
- Register each handler once and use form libraries consistently.

### E3: Blocking async operations on form save
- **Severity:** CRITICAL
- **Detection:** Long-running synchronous loops or unsupported AJAX calls during save.
- Use async client APIs and return promises where supported.

### E4: Ignoring event context in command definitions
- **Severity:** IMPORTANT
- **Detection:** Ribbon command functions that depend on global state instead of event context.
- Use the command definition object and `primaryControl`/`selectedControl` where available.

## Performance best practices

- Minimize work on `onLoad` and `onSave`; defer noncritical initialization.
- Cache reference data if reused frequently in the same form session.
- Use supported async methods such as `formContext.data.refresh(false)` only when needed.
- Avoid repeated server round-trips inside loops.
- Keep web resource file size small and bundle only needed code.

## Security and supportability

- Avoid deploying production secrets or credentials in JavaScript web resources.
- Do not call unsupported internal services or private endpoint URLs.
- Test web resources with solution layers and managed/unmanaged solutions.
- Use supported authentication flows when calling custom APIs or Azure Functions.

## Debugging and error handling

- Use `console.log` only during development; remove or gate debug output in production.
- Provide meaningful error messages and avoid swallowing exceptions.
- Use browser dev tools and Dynamics 365 form debugger for field-level behavior.
- Validate field data before calling `formContext.data.entity.save()`.

## Packaging and deployment

- Keep web resources solution-aware and include metadata in the solution.
- Use descriptive names and logical folder structure for web resources in the solution.
- Version web resources with solution versioning and release notes.
- Prefer solution import/export and ALM pipelines rather than manual web resource uploads.

## Checklist

- [ ] Use `formContext` from execution context, not `Xrm.Page`.
- [ ] Avoid direct DOM access to form controls.
- [ ] Keep global namespace usage minimal and organized.
- [ ] Separate business logic from UI handlers.
- [ ] Avoid hardcoded schema names and option set values.
- [ ] Register event handlers once and consistently.
- [ ] Keep form load/save processing lightweight.
- [ ] Do not embed secrets or unsupported endpoints in web resources.
- [ ] Test against managed and unmanaged solution deployments.
- [ ] Use supported client APIs and browser compatibility patterns.
