# Bug: Contact form fails before initialization

## Symptom

Opening a contact record reports a script error before the form is usable.

## Error

`TypeError: Cannot read properties of undefined (reading 'getFormContext')`

## Repository evidence

- `src/contactForm.js` calls `executionContext.getFormContext()` in `ContactForm.onLoad`.
- `docs/form-registration.md` says **Pass execution context as first parameter** is disabled for the registered On Load handler.
- `test/contactForm.test.js` reproduces the error when the handler receives `undefined`.

## Expected diagnosis

The form event registration is not passing the execution context that the handler expects.

## Suggested resolution

Enable **Pass execution context as first parameter** on the On Load handler, save, and publish the form.

## Verification

Reopen a contact form and confirm that the On Load script error no longer occurs. The automated test verifies the missing-context reproduction, but only a Dynamics 365 form test verifies the registration setting.
