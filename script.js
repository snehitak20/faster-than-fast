// Assignment Code [GIVEN]
var generateBtn = document.querySelector("#generate");


// Arrays for all character types 
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ";", "<", "=", ">", "?", "@", "^", "~"];
var chosen = "";
// Write password to the #password input [GIVEN]
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button [GIVEN]
generateBtn.addEventListener("click", writePassword);

// "generatePassword" is within the "writePassword" function, and will return to the final password
function generatePassword() {
// Issue prompt to determine the length of password 
  var pwLength = prompt("Choose how long you would like your password to be (between 8-128 characters).");
  // For when character amounts <8 or >128
  // For when a input criterion is NOT selected--> use NaN 
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password is not between 8-128 characters. Please try again.");
    return generatePassword ()
  }
  if (isNaN(pwLength)) {
    alert("You must choose a number.");
    return generatePassword()
  }
//To confirm types of characters used in the password   
  var yesLower = confirm("Click OK to confirm lowercase letters in your password?");
  var yesUpper = confirm("Click OK to confirm uppercase letters in your password?");
  var yesNumbers = confirm("Click OK to confirm numbers in your password?");
  var yesSpecials = confirm ("Click OK to confirm special characters in your password?");
// When NO character types are chosen 
  if (yesLower === false && yesUpper === false && yesNumbers === false && yesSpecials === false) {
    alert("You must choose at least one password criteria.");
    return generatePassword()
  }
// Store input from criteria choices.
// Another way to describe what is happening here: a new empty array is created called "password."
// With the "if" statements, I am saying that if I clicked ok to confirm a criteria, then the concat feature will take the array that I confirmed for, and add it to this new array.
var password = [];
  if (yesLower) {
    password = password.concat(lower);
  }

  if (yesUpper) {
    password = password.concat(upper);
  }

  if(yesNumbers) {
    password = password.concat(numbers);
  }

  if (yesSpecials) {
    password = password.concat(specials);
  }

  console.log(password);
  
// Generate the final password.
for (var i = 0; i < pwLength; i++) {
  chosen = chosen + password[Math.floor(Math.random() * password.length)];
  console.log(chosen);
}
return chosen;
}