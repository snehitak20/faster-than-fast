// Variables for all character types 
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specials = "!\"#$%&'()*+,-./:;<=>?@[\]^{|}~";
var chosen = "";


// Assignment Code [GIVEN]
// Add event listener to generate button [GIVEN]
// Write password to the #password input [GIVEN]
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var password = generatePassword();
passwordText.value = password;


// Write password to the #password input [GIVEN]
function writePassword() {
  password.value === "";
  var newPw = "";
// Password criteria:
  // Issue prompt to determine the length of password 
  //To confirm types of characters used in the password   
  var pwLength = prompt("Choose how long you would like your password to be (between 8-128 characters).");
  var yesLower = confirm("Do you want lowercase letters in your password?");
  var yesUpper = confirm("Do you want uppercase letters in your password?");
  var yesNumbers = confirm("Do you want numbers in your password?");
  var yesSpecials = confirm ("Do you want special characters in your password?");
// For when character amounts <8 or >128
// For when a input criterion is NOT selected--> use NaN 
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password is not between 8-128 characters. Please try again.")
    var pwLength = prompt("Choose how long you would like your password to be (between 8-128 characters).");
  }
// When NO character types are chosen 
  else if (yesLower === false && yesUpper === false && yesNumbers === false && yesSpecials === false) {
    alert("You must choose at least one password criteria.");
    var yesLower = confirm("Do you want lowercase letters in your password?");
    var yesUpper = confirm("Do you want uppercase letters in your password?");
    var yesNumbers = confirm("Do you want numbers in your password?");
    var yesSpecials = confirm ("Do you want special characters in your password?");
  }
// Generate the final password.
  if (yesLower) {
    chosen += lower;
  }
  if (yesUpper) {
    chosen += upper;
  }
  if (yesNumbers) {
    chosen += numbers;
  }
  if (yesSpecials) {
    chosen += specials;
  }
  for (var i = 0; i < pwLength; i++) {
    newPw += chosen.charAt(Math.floor(Math.random() * chosen.length));
  }
  password.value = randomString;
}







  

//To confirm types of characters used in the password



// Generates the final password










// Use for loop and Math to help generate the RANDOMNESS

