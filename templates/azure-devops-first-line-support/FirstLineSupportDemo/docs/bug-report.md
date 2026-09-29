# Bug report: Contact form load throws before initialization

## Symptom

Opening a contact record in the model-driven app intermittently shows a script error. The form's `onLoad` handler fails before the form is initialized.

## Error

`TypeError: Cannot read properties of undefined (reading 'getFormContext')`

## Impact

Users cannot reliably use the contact form. The issue reproduces on the affected form and does not require a particular contact record.

## Triage prompt

Ask the support agent to diagnose the likely cause using this repository. It should correlate the handler's use of `executionContext` with the form registration notes, describe the configuration-only fix, and give a verification step. It must not edit the sample source or pipeline.
