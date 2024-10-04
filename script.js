function checkPassword(inputId, textDivId, passwordSectionId, errorId, correctPassword) {
    const passwordInput = document.getElementById(inputId).value;
    const textDiv = document.getElementById(textDivId);
    const passwordSection = document.getElementById(passwordSectionId);
    const errorMessage = document.getElementById(errorId);

    if (passwordInput === correctPassword) {
        textDiv.style.display = 'block';  // Show the message if the password is correct
        passwordSection.style.display = 'none';  // Hide the password section
        errorMessage.style.display = 'none';  // Hide any error message
    } else {
        textDiv.style.display = 'none';  // Keep the message hidden if the password is wrong
        errorMessage.style.display = 'block';  // Show error message
    }
}
