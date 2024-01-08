// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === undefined) {
    return;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Returns completed password to writePassword function
function generatePassword() {
  const passwordLengthInput = prompt(
    "Password Length: 8 - 128 characters long"
  );

  // Inputs return a string - parse integer if given one
  const passwordLength = parseInt(passwordLengthInput);

  // Validate password length for type
  if (typeof passwordLength !== "number") {
    alert("Invalid password length - must be a number");
    return undefined;
  }

  // Validation for password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Invalid password length - must be between 8 and 128 characters long"
    );
    return undefined;
  }

  // Will append characters specificed in next prompts to this string for randomization
  let passwordCharacters = "";

  // Determine password criteria
  const useLowercase = confirm("Use lowercase letters?");
  if (useLowercase) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  const useUppercase = confirm("Use uppercase letters?");
  if (useUppercase) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  const useNumbers = confirm("Use numbers?");
  if (useNumbers) {
    passwordCharacters += "0123456789";
  }

  const useSpecialCharacters = confirm("Use special characters?");
  if (useSpecialCharacters) {
    passwordCharacters += "!@#$%^&*()_+";
  }

  // Check for one valid character type confirmed
  if (passwordCharacters.length === 0) {
    alert("Must confirm at least one character type");
    return undefined;
  }

  // Generate password
  let finalizedPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    finalizedPassword += passwordCharacters.charAt(
      Math.floor(Math.random() * passwordCharacters.length)
    );
  }

  return finalizedPassword;
}
