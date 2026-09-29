# Bug: Alternate contact form reports a missing email field

## Symptom

Opening a contact record on the compact contact form shows an error and the form does not finish loading.

## Error

`The contact form is missing the emailaddress1 attribute.`

## Repository evidence

- `src/contactForm.js` looks up the `emailaddress1` attribute and throws this explicit error when it cannot find it.
- `docs/form-variants.md` records that the compact contact form omits the Email field.
- The affected form's On Load registration already passes execution context, so the missing-context bug is not the cause of this report.

## Expected diagnosis

The handler requires an email attribute that is absent from this particular form. Do not attribute this error to an undefined execution context.

## Suggested resolution

If Email belongs on the compact form, add the supported Email column to that form, save, and publish it. If the form intentionally omits Email, confirm the requirement with the app owner and make the handler tolerate the missing optional field in a separately reviewed code change.

## Verification

Open a contact using the compact form. Confirm that the handler completes and that the Email behavior matches the agreed form requirement.
