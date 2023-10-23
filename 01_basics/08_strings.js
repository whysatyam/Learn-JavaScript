const name = "Satyam"
const repoCount = 70

// console.log(name + repoCount + " Value"); // output Satyam50 Value // bad syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // good syntax

const gameName = new String('satyam-portfolio-com')

//vconsole.log(gameName[0]); // outputs s
// console.log(gameName.__proto__); // output is {} i.e. object


// console.log(gameName.length); // direct access to prototype methods
// console.log(gameName.toUpperCase()); // direct access to prototype methods
console.log(gameName.charAt(2)); // direct access to prototype methods
console.log(gameName.indexOf('t')); // direct access to prototype methods

const newString = gameName.substring(0, 4) // 4th character is not included
console.log(newString); // output is saty

const anotherString = gameName.slice(-8, 6) // -ve values are also supported
console.log(anotherString);

const newStringOne = "  amazing   "
console.log(newStringOne); // output with spaces
console.log(newStringOne.trim()); // trims or removes the spaces 

const url = "https://satyam.com/satyam%20gupta"

console.log(url.replace('%20', '-')) // replaces %20 with "-"

console.log(url.includes('lol')) // false is the output

console.log(gameName.split('-')); // output is ['satyam', 'portfolio', 'com']