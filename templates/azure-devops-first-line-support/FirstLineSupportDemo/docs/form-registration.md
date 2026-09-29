# Contact form event registration

The contact form registers `ContactForm.onLoad` from `src/contactForm.js`.

Current event settings:

- Event: Form On Load
- Handler: `ContactForm.onLoad`
- **Pass execution context as first parameter: disabled**
- Handler registration count: one

The handler calls `executionContext.getFormContext()`. The current registration does not pass the context, so the handler receives `undefined` and throws. Enable **Pass execution context as first parameter** on the event registration, save, and publish the form.
