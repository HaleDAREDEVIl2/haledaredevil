const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');

form.addEventListener('submit', (e) => {
    let errors = getSignupFormErrors(
        firstname_input.value,
        email_input.value,
        password_input.value,
        repeat_password_input.value
    );

    if (errors.length > 0) {
        e.preventDefault(); // Correctly prevent form submission
        displayErrors(errors);
    }
});

function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = [];

    if (firstname.trim() === '') {
        errors.push('Firstname is required');
        firstname_input.parentElement.classList.add('incorrect');
    } else {
        firstname_input.parentElement.classList.remove('incorrect');
    }

    if (email.trim() === '') {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    } else {
        email_input.parentElement.classList.remove('incorrect');
    }

    if (password.trim() === '') {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    } else {
        password_input.parentElement.classList.remove('incorrect');
    }

    if (password !== repeatPassword) {
        errors.push('Passwords do not match');
        repeat_password_input.parentElement.classList.add('incorrect');
    } else {
        repeat_password_input.parentElement.classList.remove('incorrect');
    }

    return errors;
}

function displayErrors(errors) {
    let errorContainer = document.getElementById('error-messages');

    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'error-messages';
        errorContainer.style.color = 'red';
        errorContainer.style.marginTop = '10px';
        form.prepend(errorContainer);
    }

    errorContainer.innerHTML = ''; // Clear previous errors
    errors.forEach(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
    });
}
