// set constants and variables
var empty = "";
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("specChar");
var incUppers = document.getElementById("uppers");
var incLowers = document.getElementById("lowers");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var startBtn = document.querySelector("#start");

//Hide the get started button and show everything else

function showAndHide() {
  document.getElementById("start").style.display = "none";
  document.getElementById("criteria").style.display = "block";
  document.getElementById("generate").style.display = "inline-block";
};


// Write password to the #password input
function writePassword() {
  var length = document.getElementById("num").value;
  console.log(length);
  var empty = "";
  incUppers.checked ? (empty += upper) : "";
  incNumbers.checked ? (empty += numbers) : "";
  incSymbols.checked ? (empty += symbols) : "";
  incLowers.checked ? (empty += lower) : "";
  var password = generatePassword(length, empty);
  var passwordText = document.querySelector("#password");
  if (password == empty) {
    window.alert("Please choose at least one character type.");
    return;
  };
  passwordText.value = password;
  document.getElementById("passwordCard").style.display = "block";
};

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
startBtn.addEventListener("click", showAndHide);