// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = null;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {






};

var myRange = document.querySelector('#myRange');
var myValue = document.querySelector('#myValue');
var myUnits = 'myUnits';
var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
var px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

  myValue.parentElement.style.left = px + 'px';
  myValue.parentElement.style.top = myRange.offsetHeight + 'px';
  myValue.innerHTML = myRange.value + ' ' + myUnits;

  myRange.oninput =function(){
    let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
    myValue.innerHTML = myRange.value + ' ' + myUnits;
    myValue.parentElement.style.left = px + 'px';
  };