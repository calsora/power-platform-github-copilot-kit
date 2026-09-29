# FirstLineSupportDemo

Synthetic Azure DevOps repository for exercising the Azure DevOps First-Line Support agent. The `docs/bugs/` directory contains several distinct sample bug reports. Use the referenced form-configuration notes, source, and tests as repository context.

## Azure Boards sample bugs

The Azure DevOps project uses the Basic process, which provides the `Issue` work-item type rather than `Bug`. These three Issue items are synthetic bug reports, linked to matching repository context:

- **#123** Contact form load fails because the event registration does not pass execution context: `docs/bugs/contact-form-context.md`
- **#124** Compact contact form fails because the email attribute is missing: `docs/bugs/missing-email-field.md`
- **#125** Contact email is unexpectedly mandatory on shared forms: `docs/bugs/email-required-unexpectedly.md`

Ask the agent to diagnose an item by its Azure Boards ID. It should retrieve that exact item, use the report and referenced repository evidence, and recommend verification without changing files or work items. The IDs are for the `FirstLineSupportDemo` project in the `calumharrison` organization.

## Reproduce

From the repository root, run:

```sh
npm test
```

The tests demonstrate that the handler works when Dynamics 365 supplies the execution context and throws when the form event does not supply it.

## Expected resolution

In the model-driven app form designer, edit the affected form's On Load event handler and enable **Pass execution context as first parameter**. Save and publish the form. Do not replace the supported event-context pattern with the deprecated `Xrm.Page` API.

The tests verify the handler succeeds when given a context and reproduce the failure when it is missing. They do not validate form-designer settings; verify the fix in Dynamics 365 by reopening the form after saving and publishing the registration change.

This fixture contains synthetic data only. The expected resolution is a form configuration change; the support agent must not change repository files or Azure DevOps configuration.
