// Assignment Code

var randomPassword = "";

// passCriteria = {
//   specChar: "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\",
//   numUse: "0123456789",
//   lowerLetters: "abcdefghijklmnopqrstuvwxyz",
//   upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// };

var specChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
var numUse = "0123456789";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Write password to the #password input
function writePassword() {
  //parameter check here
  var charSet = "";
  var charNumber = 0;
  let userNumber = prompt("Type the length of your new password:");
  // password length check
  if ((userNumber) => 8 || userNumber <= 128) {
    window.alert("great!");
    charNumber += userNumber;
    console.log(charNumber);
  } else {
    window.alert("Password Needs to be between 8-128 characters in length!");
  }

  if (confirm("Do you want to use special characters?")) {
    charSet = charSet + specChar;
    console.log(charSet);
  }

  if (confirm("Do you want to use numbers in your password?")) {
    charSet = charSet + numUse;
    console.log(charSet);
  }

  if (confirm("Do you want to use lowercase letters in your password?")) {
    charSet = charSet + lowerLetters;
    console.log(charSet);
  }

  if (confirm("Do you want to use uppercase letters in your password?")) {
    charSet = charSet + upperLetters;
    console.log(charSet);
  }

  console.log(charSet.length);

  // call the overall function here\
  generatePassword(charNumber);
  function generatePassword() {
    var randomPassword = "";
    charSet;
    for (var i, i = 0; i < charNumber; i++) {
      randomPassword += charSet[Math.floor(Math.random() * charNumber)];
    }
    console.log(randomPassword);

    var passwordText = document.querySelector("#password");

    passwordText.innerHTML = randomPassword;
  }
}

console.log(randomPassword);
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.onclick = writePassword;
// generateBtn.addEventListener("click", writePassword());
