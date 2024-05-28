function validate(event) {
  const inputElement = event.target;
  inputElement.classList.add('signup__field__input--error');

  const errorMessageElement = event.target.parentElement.getElementsByClassName('signup__field__error')[0];
  errorMessageElement.innerHTML = 'Sample Error';
}

const inputs = document.getElementsByClassName('signup__field__input');

for (const input of inputs) {
  input.onblur = validate;
}

// Unit Tests

function runner({ inputs, expectedOutputs, func }) {
  asset(inputs.length === expectedOutputs.length);
  for (let i = 0; i < inputs.length; i++) {
    assert(func(inputs[i]) === expectedOutputs[i]);

  }

}

function firstNameTest() {
  const invalidInputs = ["@", "", "blah$", "123"];
  const validInputs = ["John", "Alfred", "ALFRED"]

  runner({
    inputs: validInputs,
    expectedOutputs: validInputs.map(_ => true),
    func: isValidName
  });

  runner({
    inputs: invalidInputs,
    expectedOutputs: invalidInputs.map(_ => false),
    func: isValidName

  });

}

function emailTest() {
  const invalidEmails = ["@sdf.com", "blah", "what@what", "", "..", "blah@", "blah@.com", "blah@"]
  const validEmails = ["asdf@asdf.com", "what@what.au", "a@a.c"]


  runner({
    inputs: validEmails,
    expectedOutputs: validEmails.map(_ => true),
    func: isValidEmail
  }),

    runner({
      inputs: invalidEmails,
      expectedOutputs: invalidEmails.map(_ => false),
      func: isValidEmail
    })
}

