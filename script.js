// Assignment Code
var generateBtn = document.querySelector("#generate");

//Creates a password 
function generatePassword(){
  //need to generate a random number based on the length of an array.
  //Need to make several arrays with lowercase and upper case letters, numbers, special characters
  //Need to create an empty array thats chosen values in an array. 
  //How to add to an array let chosenValues = [...upper];
  //use a nested if statements to add to chosenValues
  //Math.floor(Math.random()*chosenValues.lenth)
  //emptyArray needs to add chosenValues[Random number]
  //use .push to add to password 
  //password.join(""); adds to empty string
  // use for loop around repeated steps. 
  //need to return a string return "password";

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
