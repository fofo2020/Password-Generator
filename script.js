// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options
function getPasswordOptions(){


  let optionsArray = [];
  let characterArray = [];
  

// prompt lenght password 

let passwordLength = prompt ("enter password length between 10 & 64 characters");
  while (passwordLength < 10 || passwordLength > 64 || isNaN(passwordLength)) {
    passwordLength = prompt ("Enter password length between 10 & 64 characters")};
 
  
  
 //Confirmation box for uppercase characters 
 let optionUpperCase = confirm('Do you want uppercase characters ?');
  upperCasedCharacters.forEach(function(element){
    characterArray.push(element)})


// Confirmation box lowercase characters
let optionLowerCase = confirm('Do you want lowercase characters ?');
  lowerCasedCharacters.forEach(function(element){
    characterArray.push(element)});



// Confirmation box Numeric characters
let optionNumericCase = confirm('Do you want numeric characters ?');
  numericCharacters.forEach(function(element) {
    characterArray.push(element)})
  


// Confirmation box  Special characters
let optionSpecialCase = confirm('Do you want special characters ?');
  specialCharacters.forEach(function(element){
    characterArray.push(element)})
  
    optionsArray.push(characterArray);
    
  return {characterOptions:characterArray, length:passwordLength};
  }


// Function for getting a random element from an array
function getRandom(options) {
  var password =''; 
  // console.log(options)
  for ( var i=0; i<options.length; i++ ){
  password = password + options.characterOptions[Math.floor(Math.random()*(options.characterOptions.length))];
   console.log(options)
   
 }
 return password;
}




// Function to generate password with user input
function generatePassword() {
   let options = getPasswordOptions();{
      return (getRandom (options))}}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);