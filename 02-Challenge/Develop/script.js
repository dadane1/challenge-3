// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcchar = 'abcdefghijklmnopqrstuvwxyz';
var ucchar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numchar = '1234567890';
var spechchar = '!@#$%^&*';
var password = ''
var characters = ''
var choices = ''
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var pw = ''
  var pwlength = parseInt(window.prompt('How many characters do you want(8-128)'))
  if (pwlength < 8 || pwlength > 128) {
    window.alert('please choose between 8 & 128')
    return
  }
  var lc = window.confirm('Do you want lowercase characters')
  if (lc === true) {
    characters+=lcchar
  }
  var uc = window.confirm('Do you want uppercase characters')
  if (uc === true) {
    characters+=ucchar
  }
  var num = window.confirm('Do you want numeric characters')
  if (num === true) {
    characters+=numchar
  }
  var spech = window.confirm('Do you want special characters')
  if (spech === true) {
    characters+=spechchar
  } else {
    window.alert('please choose one of these "!@#$%^&*"')
    return
  }
  
  console.log(characters)
  if (lc + uc + num + spech < 1) {
    window.alert('Please choose at least 1 character')
    return
  }
  choices = characters.toString()
  console.log(choices)
  console.log("passwordlength",pwlength)
  console.log(Math.floor(Math.random() * pwlength))
  for (var i = 0; i < pwlength; i++) {
    password += choices.charAt(Math.floor(Math.random() * choices.length));
  }
  return password
}

function getRandomIntInclusive(pwlength) {
  console.log(password)
  return password
}

generateBtn.addEventListener("click", writePassword);