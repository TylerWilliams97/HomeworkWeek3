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

var speciallist = "!@#$%^&*()";
var lowerlist = "abcdefghijklmnopqrstuvwxyz";
var upperlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numlist = "1234567890";



function getspecial(){
  return speciallist[Math.floor(Math.random()*speciallist.length)];
}





function userchartype(){
  var length = prompt("Enter length of password 8-64"); console.log(length);

  var lowercase = prompt("would you like to include lower case letters", "Yes or No"); 
if(lowercase === "Yes" ){
  lowercase = true;
}
if(lowercase === "No"){
  lowercase = false;
}
console.log("lowercase "+lowercase);

  var uppercase = prompt("would you like to include upper case letters", "Yes or No");
if(uppercase === "Yes" ){
  uppercase = true; 
}
if(uppercase === "No"){
  uppercase = false;
}
console.log("upercase "+uppercase);

  var numeric = prompt("would you like to include numbers", "Yes or No");
if(numeric === "Yes"){
  numeric = true;
}
if(numeric === "No"){
  numeric = false;
}
console.log("numeric "+numeric);

  var special = prompt("Would you like to include special characters Ex.!,@,#,$,%","Yes or No")
if(special === "Yes"){
  special  = true;
}
if(special === "No"){
  special = false;
}
console.log("special "+special);



}












function userinput(){
userchartype();
getspecial();
}


