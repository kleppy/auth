// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Generated Password: " + password);
}
// Function to generate password based on user criteria
function generatePassword() {
  // Prompt for password criteria
  var length = prompt("Enter the length of the password (between 8 and 128 characters):");
  // Validate the length input
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid number between 8 and 128.");
    return ""; // Return an empty string if the input is invalid
  }
  var includeUppercase = confirm("Include Uppercase letters?");
  var includeLowercase = confirm("Include Lowercase letters?");
  var includeNumbers = confirm("Include Numbers?");
  var includeSpecialCharacters = confirm("Include Special Characters?");
  // Validate that at least one criteria is selected
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Please select at least one criteria for the password.");
    return ""; // Return an empty string if no criteria are selected
  }
  // Generate the password based on the selected criteria
  var password = generatePasswordBasedOnCriteria(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters);
  return password;
}
// Function to generate password based on user criteria
function generatePasswordBasedOnCriteria(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters) {
  // Define character sets based on selected criteria
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=";
  // Create the character set based on selected criteria
  var allChars = [];
  if (includeUppercase) allChars = allChars.concat(uppercaseChars.split(''));
  if (includeLowercase) allChars = allChars.concat(lowercaseChars.split(''));
  if (includeNumbers) allChars = allChars.concat(numberChars.split(''));
  if (includeSpecialCharacters) allChars = allChars.concat(specialChars.split(''));
  // Generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);