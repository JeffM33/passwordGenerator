// Assignment Code
var generateBtn = document.querySelector("#generate");
//creating 4 constant arrays with numbers, special characters, upper and lower case letters

//Creates a password 
function generatePassword(){
  //creating arrays
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];
  let chosenValues = [];
  let password = [];
  
  //Creates password length
  let passLength = window.prompt("Please enter a number between 8 and 128.", 0);

  //creates prompt do you want to include these arrays? 
  let lower = window.confirm("Do you want to include lower case letters?");
  if(lower){
    chosenValues = [...lowerCase];
  }
  let upper = window.confirm("Do you want to include upper case letters?");
  if(upper){
    chosenValues = [...chosenValues, ...upperCase];
  }
  let num = window.confirm("Do you want to include numbers?");
  if(num){
    chosenValues = [...chosenValues, ...numeric];
  }
  let spec = window.confirm("Do you want to include special characters?");
  if(spec){
    chosenValues = [...chosenValues, ...special];
  }

  for(i = 0; i < passLength; i++){
  let randomNumber = Math.floor(Math.random()*chosenValues.length);
  password.push(chosenValues[randomNumber]);
  }
   
  return password.join("");
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
