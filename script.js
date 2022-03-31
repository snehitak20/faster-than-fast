// Types of Characters: 
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!#$%&'()*=+-_./:;<=>?@[\^{|}~";
var chosen= ""; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

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
var final = "";
// Actually issues prompt to user (Length:8-128)
var length = prompt("How many characters for your password?");
// For when a number is NOT selected--> use NaN (Not a number)
if(isNaN(length)) {
  alert("You must select a number!");
  return generatePassword()
}

// For when character amounts <8 or >128
if(length < 8 || length > 128) {
  alert("Please choose a number between 8-128.");
  return generatePassword()
}

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
