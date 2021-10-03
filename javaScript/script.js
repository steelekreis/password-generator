// Assignment code here
const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const length = document.getElementById("length");
const incNumbers = document.getElementById("nR");
const incSymbols = document.getElementById("sR");
const incNumbers = document.getElementById("uR");
const incSymbols = document.getElementById("lR");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  window.confirm("hello")
};