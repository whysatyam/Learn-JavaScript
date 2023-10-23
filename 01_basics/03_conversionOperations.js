let score = "33abc"

//console.log(typeof score); // outputs string
//console.log(typeof(score)); // both are the same methods, output is string

let converter = Number(score) // converts string to number
//console.log(typeof converter); // output is number

//console.log(converter); // outputs NaN , that is a special data type

// if score was this , this would be the value of converter in output or this is what they will get converted into:

// "33" => 33 // easily got converted to 33
// "33abc" => NaN // both strings and numbers in the same value
// true => 1; false => 0
// "satyam" => NaN
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); // outputs true , as value of 1 is true

// if isLoggedIn was this , this would be the value of booleanIsLoggedIn in output or this is what they will get converted into:

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // outputs 33
// console.log(typeof stringNumber); // outputs string