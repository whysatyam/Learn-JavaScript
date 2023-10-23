// Primitive data types

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number type
const scoreValue = 100.3 // number type

const isLoggedIn = false // boolean
const outsideTemp = null // empty
let userEmail; // undefined

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id === anotherId); // false is the output

// const bigNumber = 3456543576654356754n // bigint



// Reference type (Non primitive data types)

// 3 types - Array, Objects, Functions

const heros = ["Thor", "Black Panther", "Hulk"]; // array

let myObj = {  
    name: "Satyam",
    age: 20,
} // object

const myFunction = function(){ 
    console.log("Hello world");
} // function

console.log(typeof anotherId); // output is symbol