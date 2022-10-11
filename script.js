// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  var passwordLength;
  var includeSpecial;
  var includeNumber;
  var includeUpper;
  var pwCharacters = [];
  var pwArray = [];
  var pwString = '';
  validLength = false;
  validUpper = false;
  validNumber = false;
  validSpecial = false;

  while (validLength === false) {
    passwordLength = prompt("How many characters would you like in your password? Please enter a number between 8 and 128.");

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
      validLength = false;
    }
    else if ([passwordLength >= 8 || passwordLength <= 128]) {
      validLength = true;
    }
    // else if (includeNumber === null){
    //   break;
    // }
    else {
      alert("Please enter a number between 8 and 128.")
      validLength = false;
    }
  }

  console.log("Your password will be: " + passwordLength + " characters long.");

  while (validUpper === false) {
    includeUpper = prompt("Would you like to use uppercase characters? Type Yes or No.");
    if (includeUpper === "no" || includeUpper === "No") {
      // pwCharacters.concat(lowerList);
      validUpper = true;
      pwCharacters = lowerList;
      console.log(pwCharacters);
      
    }
    else if (includeUpper === "yes" || includeUpper ==="Yes") {
      // pwCharacters = pwCharacters.concat(lowerList);
      // pwCharacters = pwCharacters.concat(upperList);
      validUpper = true;
      pwCharacters = pwCharacters.concat(lowerList,upperList)
      console.log(pwCharacters);
      
    }
    // else if (includeUpper === null){
    //   break;
    // }
    else {
      validUpper = false;
    }
  }
  console.log("Using upper case letters: " + includeUpper + ".");

  console.log(pwCharacters);
 
  while (validNumber === false) {
    includeNumber = prompt("Would you like to use numbers? Type Yes or No.");
    if (includeNumber === "no" || includeNumber === "No") {
      validNumber = true;
    }
    else if (includeNumber === "yes" || includeNumber === "Yes") {
      pwCharacters = pwCharacters.concat(numberList);
      validNumber = true;
    }
    // else if (includeNumber === null){
    //   break;
    // }
    else {
      validNumber = false;
    }
  }

  console.log("Using numbers: " + includeNumber + ".");

  console.log(pwCharacters);

  while (validSpecial === false) {
    var includeSpecial = prompt("Would you like to use special characters? Type Yes or No.");
    if (includeSpecial === "no" || includeSpecial ===  "No") {
      validSpecial = true;
    }
    else if (includeSpecial === "yes" || includeSpecial === "Yes") {
      pwCharacters = pwCharacters.concat(charList);
      validSpecial = true;
    }
    // else if (includeSpecial === null){
    //   break;
    // }
    else {
      validSpecial = false;
    }

  }
  console.log("Using special characters: " + includeSpecial + ".");
  console.log(pwCharacters);


  for (var i = 0; i < passwordLength; i++) {
    var randomChar = pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
    pwArray[i] = randomChar;
    console.log(pwArray[i]);
  }
  pwString = pwArray.join("");
  console.log(pwString);
  // Return password
  return pwString;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
