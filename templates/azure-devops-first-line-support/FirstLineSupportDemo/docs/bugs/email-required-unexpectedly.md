# Bug: Contact email is required on forms where it should be optional

## Symptom

Users cannot save contacts without an email address, including on forms where the business process permits contacts without email.

## Repository evidence

- `src/contactForm.js` calls `emailAttribute.setRequiredLevel("required")` unconditionally whenever the form loads.
- The contact form is shared by multiple teams and the requirement is not universal.

## Expected diagnosis

The web resource makes Email required for every form using this handler, even when the business process considers it optional.

## Suggested resolution

Confirm the requirement with the app owner. If Email is optional, remove the unconditional required-level assignment or implement an explicitly approved conditional rule. If Email must be enforced for all contact creation paths, discuss server-side validation separately; a form event only controls this client form's behavior.

## Verification

On each affected form, test saving a contact both with and without an email address, then verify any agreed conditional rule. Validate server-side requirements separately if they apply to integrations or other clients.
