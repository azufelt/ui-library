// Form validation
const form = document.querySelectorAll("form")[0];

const fname = document.querySelector("#fname");
const fnameError = document.querySelector("#fname + span.error");

const lname = document.querySelector("#lname");
const lnameError = document.querySelector("#lname + span.error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPassword + span.error");


// FIRST NAME Listen for the input event on fname input
fname.addEventListener("input", (event) => {
  // When user types, check if:
  // fname input is valid.
  if (fname.validity.valid) {
    // In case of an error message
    // If fname is valid, remove error message.
    fnameError.innerHTML = ""; // Reset message content
    fnameError.className = "error"; // Reset the style of message
  } else {
    // If there is still an error, display the error
    displayFnameError();
  }
});

// FIRST NAME Display error message
function displayFnameError() {
  if (fname.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    fnameError.textContent = "First name cannot be blank.";
  } else if (fname.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    fnameError.textContent = `First name should be at least ${fname.minLength} characters.`;
  }

  // Styling the error message
  fnameError.className = "error active";
} 

// LAST NAME Listen for the input event on lname input
lname.addEventListener("input", (event) => {
  // When user types, check if:
  // lname input is valid.
  if (lname.validity.valid) {
    // In case of an error message
    // If lname is valid, remove error message.
    lnameError.innerHTML = ""; // Reset message content
    lnameError.className = "error"; // Reset the style of message
  } else {
    // If there is still an error, display the error
    displayLnameError();
  }
});

// LAST NAME Display error message
function displayLnameError() {
  if (lname.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    lnameError.textContent = "Last name cannot be blank.";
  } else if (lname.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    lnameError.textContent = `Last name should be at least ${lname.minLength} characters.`;
  }

  // Styling the error message
  lnameError.className = "error active";
}

// PASSWORD Listen for the input event on password input
password.addEventListener("input", (event) => {
  // When user types, check if:
  // password input is valid.
  if (password.validity.valid) {
    // In case of an error message
    // If password is valid, remove error message.
    passwordError.innerHTML = ""; // Reset message content
    passwordError.className = "error"; // Reset the style of message
  } else {
    // If there is still an error, display the error
    displayPasswordError();
  }
});

// PASSWORD Display error message
function displayPasswordError() {
  if (password.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    passwordError.textContent = "Password cannot be blank.";
  } else if (password.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    passwordError.textContent = `Password should be at least ${password.minLength} characters, have at least one number and one Uppercase letter.`;
  }

  // Styling the error message
  passwordError.className = "error active";
}


// CONFIRM PASSWORD Listen for the input event on confirmPassword input
confirmPassword.addEventListener("input", (event) => { 
  if (confirmPassword.validity.valid) {
    // In case of an error message
    // If password is valid, remove error message.
    confirmPasswordError.innerHTML = ""; // Reset message content
    confirmPasswordError.className = "error"; // Reset the style of message
  } else {
    // If there is still an error, display the error
    displayConfirmPasswordError();
  }
}
);

// CONFIRM PASSWORD Display error message
function displayConfirmPasswordError() {
  if (confirmPassword.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    confirmPasswordError.textContent = "Confirm password cannot be blank.";
  } else if (confirmPassword.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    confirmPasswordError.textContent = `Passwords do not match. Please try again.`;
  }

  // Styling the error message
  confirmPasswordError.className = "error active";
}




// Listen for the input event on email input
email.addEventListener("input", (event) => {
  // When user types, check if:
  // email input is valid.

  if (email.validity.valid) {
    // In case of an error message
    // If email is valid, remove error message.
    emailError.innerHTML = ""; // Reset message content
    emailError.className = "error"; // Reset the style of message
  } else {
    // If there is still an error, display the error
    displayEmailError();
  }
});

// Display error message
function displayEmailError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    // console.log("email cannot be blank  ");
    emailError.textContent = "E-mail cannot be blank.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Must be valid e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters.`;
  }

  // Styling the error message
  emailError.className = "error active";
}

// Listen for the form submit
form.addEventListener("submit", (event) => {
  // if the form has valid data, submit
  if (!email.validity.valid) {
    // If it isn't valid,  display error message
    displayEmailError();
    // Prevent  form from being submitted by canceling the event
    event.preventDefault();
  } else if (!fname.validity.valid) {
    // If it isn't valid,  display error message
    displayFnameError();
    // Prevent  form from being submitted by canceling the event
    event.preventDefault();
  } else if (!lname.validity.valid) {
    // If it isn't valid,  display error message
    displayLnameError();
    // Prevent  form from being submitted by canceling the event
    event.preventDefault();
  } else if (!password.validity.valid) {
    // If it isn't valid,  display error message
    displayPasswordError();
    // Prevent  form from being submitted by canceling the event
    event.preventDefault();
  } else if (!confirmPassword.validity.valid) {
    // If it isn't valid,  display error message
    displayConfirmPasswordError();
    // Prevent  form from being submitted by canceling the event
    event.preventDefault();
  }
});
