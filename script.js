// Types of Characters: 
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!#$%&'()*=+-_./:;<=>?@[\^{|}~";
var chosen= ""; 
var length;
var yesLower;
var yesUpper;
var yesNumbers;
var yesSpecials;


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Issue prompt to determine the length of password 
function chooseLength () {
  var length = prompt("Choose how many characters long you would like your password to be (between 8-128 characters).");
// For when character amounts <8 or >128
  if (length < 8) {
    alert("Password length must be a number between 8-128 characters.");
    chooseLength();
  }else if (length > 128) {
    alert("Password length must be a number between 8-128 characters.");
    chooseLength();
// For when a number is NOT selected--> use NaN (Not a number)
  }else if (isNaN(length)) {
    alert("Password length must be a number between 8-128 characters.");
    chooseLength();
  }
  return chooseLength
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates the final password
function generatePassword () {


// Confirm character types 
var yesLower = confirm("Include lowercase letters?");
var yesUpper = confirm("Include uppercase letters?");
var yesNumbers = confirm("Include numbers");
var yesSpecials = confirm("Include special characters?")

// When NO character types are chosen 
if (!yesLower&&!yesUpper&&!yesNumbers&&!yesSpecials) {
  alert("You must choose at lease one character type.")
  return generatePassword()
}
// When character type is chosen
if (yesLower) {
  chosen += lower
}

if (yesUpper) {
  chosen += upper
}

if (yesNumbers) {
  chosen += numbers
}

if (yesSpecials) {
  chosen += specials
}
// Use for loop and Math to help generate the RANDOMNESS
for (var i= 0; i < length; i++) {
  final = chosen.charAt(Math.floor(Math.random() * chosen.length));
}
return final;
}
