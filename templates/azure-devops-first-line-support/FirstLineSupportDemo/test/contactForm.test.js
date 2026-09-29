const assert = require("node:assert/strict");
const test = require("node:test");
const ContactForm = require("../src/contactForm");

test("marks the email field as required when execution context is passed", () => {
  let requiredLevel;
  const executionContext = {
    getFormContext() {
      return {
        getAttribute(name) {
          assert.equal(name, "emailaddress1");
          return {
            setRequiredLevel(level) {
              requiredLevel = level;
            }
          };
        }
      };
    }
  };

  ContactForm.onLoad(executionContext);

  assert.equal(requiredLevel, "required");
});

test("reproduces the form-load failure when execution context is not passed", () => {
  assert.throws(
    () => ContactForm.onLoad(undefined),
    {
      name: "TypeError",
      message: /getFormContext/
    }
  );
});
