

// Get the form elements and the button
let emailInput = document.getElementsByClassName('email')[0];
let passwordInput = document.getElementsByClassName('password')[0];
let checkbox = document.getElementById('checkbox');
let signUpButton = document.getElementsByClassName('SignUpButton')[0];

// Add an event listener to the button
signUpButton.addEventListener('click', function() {
    // Get the input values
    let email = emailInput.value;
    let password = passwordInput.value;
    let isChecked = checkbox.checked;

    // Check if any of the fields is empty or checkbox is not checked
    if (email.trim() === '' || password.trim() === '' || !isChecked) {
        // Display error message if any field is empty or checkbox is not checked
        alert('Error: Please fill out all fields and check the checkbox.');
    } else {
        // Display email and password on the console if all fields are filled and checkbox is checked
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear the input fields after displaying the values
        emailInput.value = '';
        passwordInput.value = '';
        checkbox.checked = false;
    }
});