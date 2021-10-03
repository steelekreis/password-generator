// Assignment code here
var empty = "";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

var length = document.getElementById("length").value;
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("specChar");
var incUppers = document.getElementById("uppers");
var incLowers = document.getElementById("lowers");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  incUppers.checked ? (empty += upper) : "";
  incNumbers.checked ? (empty += numbers) : "";
  incSymbols.checked ? (empty += symbols) : "";
  incLowers.checked ? (empty += lower) : "";
  var password = generatePassword(length, empty);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (length, empty) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += empty.charAt(
      Math.floor(Math.random() * empty.length)
    );
  }
  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log(password);