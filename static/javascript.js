<><script>
    function registerUser() {
        // Your JavaScript code for handling registration goes here
        // You can access form elements using document.getElementById
        // Perform validations, send data to the server, etc.
        // For now, let's just log the form data to the console
        console.log("Registration Form Data:")};
    console.log("Username: " + document.getElementById("username").value);
    console.log("Age: " + document.getElementById("age").value);
    console.log("Email: " + document.getElementById("email").value);
    console.log("Password: " + document.getElementById("password").value);
    console.log("Confirm Password: " + document.getElementById("confirmPassword").value);
    &rbrace;
    function validateForm(event) {event.preventDefault()}// Prevent the form from submitting initially
    ; // Prevent the form from submitting initially

    // Get password and confirm password values
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {document.getElementById('passwordMatchError').innerText = 'Passwords do not match'};
    &rbrace; else {
        // If passwords match, reset error message and submit the form
        document.getElementById('passwordMatchError').innerText = ''};
    document.getElementById('signupForm').submit();
    &rbrace;
    &rbrace;

</script><script>
        function registerUser() {
            // Your JavaScript code for handling registration goes here
            // You can access form elements using document.getElementById
            // Perform validations, send data to the server, etc.
            // For now, let's just log the form data to the console
            console.log("Registration Form Data:")};
        console.log("Username: " + document.getElementById("username").value);
        console.log("Age: " + document.getElementById("age").value);
        console.log("Email: " + document.getElementById("email").value);
        console.log("Password: " + document.getElementById("password").value);
        console.log("Confirm Password: " + document.getElementById("confirmPassword").value);
        &rbrace;
        function validateForm(event) {event.preventDefault()}// Prevent the form from submitting initially
        ; // Prevent the form from submitting initially

        // Get password and confirm password values
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (password !== confirmPassword) {document.getElementById('passwordMatchError').innerText = 'Passwords do not match'};
        &rbrace; else {
            // If passwords match, reset error message and submit the form
            document.getElementById('passwordMatchError').innerText = ''};
        document.getElementById('signupForm').submit();
        &rbrace;
        &rbrace;

    </script></>