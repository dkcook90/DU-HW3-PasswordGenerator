// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
var uppercase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]
var finalPassword = []

function generatePassword() {
  var passwordLength = window.prompt("How many characters in your password?")
    if (passwordLength < 8) {
      window.alert("Please select a number between 8 and 128")
      generatePassword()
    }
    else if (passwordLength > 128) {
    window.alert("Please select a number between 8 and 128")
    generatePassword()
    }
    else {
      var passLowcase = window.confirm("Include Lowercase?")
      var passUpcase = window.confirm("Include Uppercase?")
      var passNumeric = window.confirm("Include Numeric Characters?")
      var passSpecial = window.confirm("Include Special Characters?")
    }
    for (i = 0; i <= passwordLength; i++) {
      if (passLowcase === true && passUpcase === true && passNumeric === true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *4 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 2) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 3) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase === true && passUpcase === true && passNumeric === true && passSpecial !== true) {
        var characterSelect = Math.floor(Math.random() *3 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 2) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase === true && passUpcase === true && passNumeric !== true && passSpecial !== true) {
        var characterSelect = Math.floor(Math.random() *2 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase === true && passUpcase !== true && passNumeric !== true && passSpecial !== true) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
      }
      else if (passLowcase !== true && passUpcase === true && passNumeric === true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *3 )
        if (characterSelect === 0) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 2) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase !== true && passUpcase !== true && passNumeric === true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *2 )
        if (characterSelect === 0) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase !== true && passUpcase !== true && passNumeric !== true && passSpecial === true) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
      }
      else if (passLowcase !== true && passUpcase === true && passNumeric !== true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *2 )
        if (characterSelect === 0) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase === true && passUpcase !== true && passNumeric === true && passSpecial !== true) {
        var characterSelect = Math.floor(Math.random() *2 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase !== true && passUpcase === true && passNumeric === true && passSpecial !== true) {
        var characterSelect = Math.floor(Math.random() *2 )
        if (characterSelect === 0) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase !== true && passUpcase !== true && passNumeric === true && passSpecial !== true) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
      }
      else if (passLowcase !== true && passUpcase === true && passNumeric !== true && passSpecial !== true) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
      }
      else if (passLowcase === true && passUpcase !== true && passNumeric !== true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *2 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase === true && passUpcase === true && passNumeric !== true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *3 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var uppercaseSPL = uppercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *uppercaseSPL.length )
          var choosenLetter = uppercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 2) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else if (passLowcase === true && passUpcase !== true && passNumeric === true && passSpecial === true) {
        var characterSelect = Math.floor(Math.random() *3 )
        if (characterSelect === 0) {
          var lowercaseSPL = lowercase.split(" ")
          var choosenIndex = Math.floor(Math.random() *lowercaseSPL.length )
          var choosenLetter = lowercaseSPL[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 1) {
          var choosenIndex = Math.floor(Math.random() *numeric.length )
          var choosenLetter = numeric[choosenIndex]
          finalPassword.push(choosenLetter)
        }
        else if (characterSelect === 2) {
          var choosenIndex = Math.floor(Math.random() *special.length )
          var choosenLetter = special[choosenIndex]
          finalPassword.push(choosenLetter)
        }
      }
      else {
        window.alert("Come on man")
        generatePassword()
      }
    }
  }

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  var passString = finalPassword.join("")
  passwordText.value = passString;
  finalPassword = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
