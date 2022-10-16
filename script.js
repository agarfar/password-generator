// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of usable characters in password
var numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// generates a random password for the writePassword function
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

  // while loops ensure users enter in the correct parameters for each prompt
  // prompts user to write a number between 8 - 128 to determine password length
  while (validLength === false) {
    passwordLength = prompt("How many characters would you like in your password? Please enter a number between 8 and 128.");
    if (passwordLength < 8 || passwordLength > 128 && isNaN(passwordLength) === false) {
      alert("Please enter a number between 8 and 128");
      validLength = false;
    }
    else if ([passwordLength >= 8 || passwordLength <= 128] && isNaN(passwordLength) === false) {
      validLength = true;
    }
    else if (passwordLength === false){
      validLength = true;
      break;
    }
    else {
      alert("Please enter a number between 8 and 128.")
      validLength = false;
    }
  }

  console.log("Your password will be: " + passwordLength + " characters long.");

  // prompts user to choose to include/exclude uppercase characters
  while (validUpper === false) {
    includeUpper = prompt("Would you like to use uppercase characters? Type Yes or No.");
    if (includeUpper === "no" || includeUpper === "No") {
      validUpper = true;
      pwCharacters = lowerList;
      console.log(pwCharacters);

    }
    else if (includeUpper === "yes" || includeUpper === "Yes") {
      validUpper = true;
      pwCharacters = pwCharacters.concat(lowerList, upperList)
      console.log(pwCharacters);
    }
    else {
      validUpper = false;
    }
  }
  console.log("Using upper case letters: " + includeUpper + ".");

  console.log(pwCharacters);

  // prompts user to choose to include/exclude numbers
  while (validNumber === false) {
    includeNumber = prompt("Would you like to use numbers? Type Yes or No.");
    if (includeNumber === "no" || includeNumber === "No") {
      validNumber = true;
    }
    else if (includeNumber === "yes" || includeNumber === "Yes") {
      pwCharacters = pwCharacters.concat(numberList);
      validNumber = true;
    }
    else {
      validNumber = false;
    }
  }

  console.log("Using numbers: " + includeNumber + ".");

  console.log(pwCharacters);

  // prompts user to choose to include/exclude special characters
  while (validSpecial === false) {
    var includeSpecial = prompt("Would you like to use special characters? Type Yes or No.");
    if (includeSpecial === "no" || includeSpecial === "No") {
      validSpecial = true;
    }
    else if (includeSpecial === "yes" || includeSpecial === "Yes") {
      pwCharacters = pwCharacters.concat(charList);
      validSpecial = true;
    }
    else {
      validSpecial = false;
    }

  }
  console.log("Using special characters: " + includeSpecial + ".");
  console.log(pwCharacters);

  // creates a randomly generated character and writes it to an array
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
    pwArray[i] = randomChar;
    console.log(pwArray[i]);
  }
  // join array into string
  pwString = pwArray.join("");
  console.log(pwString);
  // Return password
  return pwString;

}

function writePassword() {
  // password is generated from function and saved in the password variable
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// password is written to the password generation box on the page
generateBtn.addEventListener("click", writePassword);
