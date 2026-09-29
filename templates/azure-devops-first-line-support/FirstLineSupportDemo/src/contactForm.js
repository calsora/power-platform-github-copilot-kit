const ContactForm = {
  onLoad(executionContext) {
    const formContext = executionContext.getFormContext();
    const emailAttribute = formContext.getAttribute("emailaddress1");

    if (!emailAttribute) {
      throw new Error("The contact form is missing the emailaddress1 attribute.");
    }

    emailAttribute.setRequiredLevel("required");
  }
};

module.exports = ContactForm;
