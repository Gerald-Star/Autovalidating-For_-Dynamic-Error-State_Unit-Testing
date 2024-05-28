# div vs label in Form Building for Semantic HTML - Web Accessibility

<div> vs <label> 
Forms are an exciting part of HTML with many surprises. You might have seen label and other semantic elements around in tutorials for forms, but what’s the advantage of doing so over using plain div?

While different elements usually make no difference in how they’re presented to the user, they can have slightly different user experiences. For example, you can define a div and an input and the div acts as a “label” for the div, but using a label element will give the additional functionality that when you click on the text, the input for that label is focused. Of course, this can be powered by JavaScript, too.

Another benefit that semantic labels give is greater accessibility. For example, screen readers for the visually-impaired will interpret different tags uniquely. This is often a neglected aspect of web development but one for which companies often have entire teams. We won’t touch on this too much, but keep in mind that you should take care to test your web app on screen readers and such.

Finally, semantic​ elements can have platform-specific ramifications. When you wrap a set of inputs within a form, your mobile browsers will often add a special button like “Go” on the keyboard displayed for users to easily submit.


## Changing the default styling

The default styling has changed a bit, but that’ll be easy customization. The entire thing is wrapped in a form element, each distinctive input set is wrapped in a fieldset, headers are within legends, and inputs get an​ aria-label tag (for accessibility). This is not comprehensive towards checking all the boxes for accessibility, but it’s a start.

 add a div for the error field in each fieldset and add the 
    --error modifier class to every input. Red is the universal color for error messages
#### Validating error using this line of div    

'<div class="signup__field__error">Sample error</div>'

#### Dynamic Error State

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
  

## Test Driven Development

### What Test Driven Development (TDD) is, the three categories of tests


### Types of tests 

There are three broad categories of tests that can be automated in web apps.

### Unit tests

These test individual functions. For example, if you have a function that’s supposed to return true given a certain input and false otherwise, that’s easily testable with unit tests.
It only covers JavaScript code

### Integration tests

These test functions that are working together. For example, when one function calls another and uses that result in a different function call.
It only covers JavaScript code. A lot of business logic can be tested here.

### Acceptance Tests

These test functionality in the web app as a whole through the client interface. For example, when the user clicks on a button, a popup appears.
A lot of the user experience guarantees are tested here. JavaScript should not be called directly; these tests are concerned with the outcome of user-taken actions.


### How to run tests? 

One thing you might be wondering is how JavaScript tests are run. The code we’re testing is meant to run on a browser, and JavaScript is interpreted by browsers too.

The answer is “with Node.” Node has become the standard JavaScript runtime for tasks that occur outside of a browser, like testing. With Node, you can load just the JavaScript code you wrote, and call functions directly.

For acceptance tests that require the interaction of HTML and CSS, these are typically run in an automated fashion with web drivers. Web drivers allow remote control of browsers. For visual feedback, web drivers can hook into Firefox or Chrome. They can also use what’s called a “headless browser,” which removes the graphical portion of a browser.


### Unit Testing Code Description

In Unit testing, given the inputs, what are the expected outputs

'asserts' is a Node, it checks that the argumenet evaluates to true and throws an error if it's not.

'runner' function(): Here every test feeds a set on inputs, expected outputs, and the function used.

'x.map(_ => true)'

The line, x.map(_ => true), is just creating an array of equal size with the values true for every element. 

Map applies a function to every element, _ is the variable to convey that it’s unused, and => is just shorthand for function() { return true }.