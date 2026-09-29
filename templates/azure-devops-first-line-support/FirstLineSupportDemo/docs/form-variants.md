# Contact form variants

The model-driven app has two contact forms:

- **Main Contact** includes the `emailaddress1` column. Its On Load event is registered with **Pass execution context as first parameter** enabled.
- **Compact Contact** intentionally omits the `emailaddress1` column. Its On Load event is also registered with execution context enabled.

The current shared handler throws an explicit error if it cannot find `emailaddress1`. This explains the Compact Contact form failure and is distinct from a missing execution-context registration.

Email is optional for some teams and required for others. The shared handler currently sets Email to required unconditionally, so this behavior does not honor the different requirements.
