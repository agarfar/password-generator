// Assignment Code
var generateBtn = document.querySelector("#generate");

var numberList = [0,1,2,3,4,5,6,7,8,9];
var lowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charList = [" ", "!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

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

function generatePassword(){
  while(validLength === false){
      passwordLength = prompt("How many characters would you like in your password? Please enter a number between 8 and 128."); 
      // Validates input is a number between 8 and 20 and re-prompts if response is outside of allowed bounds
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128");
        validLength = false;
        } 
      else if([passwordLength >= 8 || passwordLength <= 128]){
        validLength = true;
      }
        else {
        alert("Please enter a number between 8 and 128.")
        validLength = false;
      }
      }

      console.log("Your password will be: " + passwordLength + " characters long.");
      // Asks about using upper case letters and stores response in local memory
      while (validUpper === false) {
      includeUpper = prompt("Would you like to use uppercase characters? Type Yes or No."); 
        if (includeUpper === "no" || "No") {
          pwCharacters.concat(lowerList);
          validUpper = true;
        } 
        else if (includeUpper === "yes" || "Yes") {
          pwCharacters = pwCharacters.concat(lowerList);
          pwCharacters = pwCharacters.concat(upperList);
          validUpper = true;
        } 
        else {
          validUpper = false;
        }
      }
      console.log("Using upper case letters: " + includeUpper + ".");
    
      console.log(pwCharacters);
      // Asks about using numbers and stores response in local memory
      while(validNumber === false){
        includeNumber = prompt("Would you like to use numbers? Type Yes or No.");
        if (includeNumber === "no" || "No") {
          validNumber = true;
        } 
        else if (includeNumber === "yes" || "Yes") {
          pwCharacters = pwCharacters.concat(numberList);
          validNumber = true;
        } 
        else {
          validNumber = false;
        }
      }
    
      console.log("Using numbers: " + includeNumber + ".");
      
      console.log(pwCharacters);
      
      // Asks about using special characters and stores response in local memory
      while(validSpecial){
      var includeSpecial = prompt("Would you like to use special characters? Type Yes or No.");
      if (includeSpecial === "no" || "No" ) {
        validSpecial = true;
      } 
      else if (includeSpecial === "yes" || "Yes") {
        pwCharacters = pwCharacters.concat(charList);
        validSpecial = true;
      } 
      else {
        validSpecial = false;
      }

      }
      console.log("Using special characters: " + includeSpecial + ".");
      console.log(pwCharacters);
    
      // Code to generate the password
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var generateBtn = document.querySelector("#generate");
// // Object to contain allowable characters in password (const is used so the values are read-only)
//   // Numbers for use in password
//   var numbers= [0,1,2,3,4,5,6,7,8,9];
//   // Lower case letters for use in password
//   var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//   // Upper case letters for use in password
//   var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//   // Special characters for use un password
//   var specials = ["!","@","#","$","%","^","&","*","(",")"];

//   // Variables to contain password parameters (var is used so they can be re-declared as needed)
//   // Stores password length in memory
//   var passwordLength;
//   // Stores boolean response to question on use of special characters
//   var useSpecial;
//   // Stores boolean response to question on use of numbers
//   var useNumber;
//   // Stores boolean response to question on use of upper case characters
//   var useUpper;
//   // New array with chosen characters for password
//   var pwChoices;
//   // Array for storing password before conversion to string
//   var pwArray = [];
//   var password = "";


//   var validEntry = false;
//   var validUpper = false;
//   // var validNumbers = false;
//   // var validSpecials = false;
// // Returns a random password
// function generatePassword() {
//   // Sets password character length based on prompt
//   while(validEntry === false){
  
//   var passwordLength = prompt("How many characters would you like in your password? Please enter an number between 8 and 128."); 
//   // Validates input is a number between 8 and 20 and re-prompts if response is outside of allowed bounds
//   if (passwordLength < 8 || passwordLength > 128) {
//     // alert("Please enter a number between 8 and 128");
//     validEntry = false;
//     } else {
//     validEntry = true;
//     prompt = passwordLength;
//   }
//   }
  
//   console.log("Your password will be: " + passwordLength + " characters long.");
//   // Asks about using upper case letters and stores response in local memory
//   while (validUpper === false) {
//   var useUpper = prompt("Would you like to use uppercase characters? Choose Yes or No."); 
//     if (useUpper === "no" || "No") {
//       validUpper = false;
//     } 
//     else if (useUpper === "yes" || "Yes") {
//     validUpper = true;
//     } 
//     else {
//       validUpper = false;
//     }
//   }
//   console.log("Using upper case letters: " + useUpper + ".");
//   pwChoices = alphaLower.concat(alphaUpper);

//   console.log(pwChoices)
//   // Asks about using numbers and stores response in local memory
//   var useNumber = confirm("Would you like to use numbers?"); 
//   console.log("Using numbers: " + useNumber + ".");
//   pwChoices = alphaLower.concat(alphaUpper,numbers);
//   console.log(pwChoices)
//   // Asks about using special characters and stores response in local memory
//   var useSpecial = confirm("Would you like to use special characters?");
//   console.log("Using special characters: " + useSpecial + ".");
//   pwChoices = alphaLower.concat(alphaUpper,numbers,specials);
//   console.log(pwChoices)

//   // Code to generate the password
//   for (var i = 0; i < passwordLength; i++) {
//     var randomChar = pwChoices[Math.floor(Math.random() * pwChoices.length)];
//     pwArray[i] = randomChar
//     console.log(pwArray[i]);
//   }
//   var noCommas = pwArray.join("");
//    console.log(noCommas);
//     // Return password
//   return noCommas;
// }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);