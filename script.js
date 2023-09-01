// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  let userNumber = prompt("Type the length of your new password:");
  // password length check
  if (userNumber < 8 || userNumber > 128) {
    window.alert("Password Needs to be between 8-128 characters in length!");
  } else {
    window.alert("Next choose what type of characters you want to use");
  }
  //go again
  var tryAgain = window.confirm("Try again?");

  if (tryAgain) {
    writePassword();
  }

  passwordText.value = password;
}

// call the overall function here
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
