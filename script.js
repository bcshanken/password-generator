// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}
function generatePassword() {
  // length of password
  var length = prompt("How many characters?");
  if (length < 8 || length > 128) {
    alert("password must be between 8 and 128 characters in length");
    length = prompt("How many characters?");
  }
  // capital letters
  var caps = confirm("Allow Capital letters?");
  if (caps) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // lowercase letters
  console.log(chars);
  var lower = confirm("Allow lowercase letters?");
  if (lower) {
    chars = chars + "abcdefghijklmnopqrstuvwxy";
  }
  // special characters 
  console.log(chars);
  var special = confirm("Allow special characters?");
  if (special) {
    chars = chars + "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  // numbers
  console.log(chars);
  var nums = confirm("Allow numbers?");
  if (nums) {
    chars = chars + "0123456789";
  }
  console.log(chars);

  // random selection of characters
  let passcode="";
  console.log(length);
  for(k=0 ; k<length ; k++ ) {
    passcode= passcode + chars.charAt(Math.floor(Math.random() * chars.length));

  
  };
  console.log(passcode);

  return passcode;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
