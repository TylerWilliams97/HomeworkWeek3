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


//var declaring possible symbols
var speciallist =["!","@","#","$","%","^","&","*"];
var lowerlist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperlist = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numlist = ['1','2','3','4','5','6','7','8','9','0'];


//start of function for pw gen
var generatePassword = function(){
  var password = [];

  var possiblecharacters = [];

  var Randomnumber;

//user input
  var length= window.prompt("how long would you like your password 8-128 characters?");
  var usespecial= window.confirm("Should i use special charachters? Ex.!, @, #, $");
  var uselower= window.confirm("Should i use lowercase letters?");
  var useupper= window.confirm("Should i use uppercase letters?");
  var usenumbers= window.confirm("Should i use numbers?");

  console.log(length, usespecial, uselower, useupper, usenumbers);

//if true from user input it will include
    if (usespecial) {
      possiblecharacters = possiblecharacters.concat(speciallist);
    }
    if (uselower) {
      possiblecharacters = possiblecharacters.concat(lowerlist);
    }
    if (useupper) {
      possiblecharacters = possiblecharacters.concat(upperlist);
    }
    if (usenumbers) {
      possiblecharacters = possiblecharacters.concat(numlist);
    } 
  console.log(possiblecharacters);

//for statement to get random number to use to get random symbol
  for (let i = 0; i < length; i++) {
    Randomnumber = Math.floor(Math.random()*possiblecharacters.length);
    console.log("Randomnumber", Randomnumber);

//uses random number to pull symbol from possiblecharacters
    password.push(possiblecharacters[Randomnumber]);
  }
  console.log(password);


//sends result to html
      return password.join("");

}


















