// javascript is a prototype based language, everthing is an object
// uses prototype based inheritance
// arrays, strings, functions come under objects 
// objects are at top in the chain, hence objects can have access to arrays, functions and strings

function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2 // function is acting here as an object

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
console.log(multipleBy5.prototype); // {}


// function acting as object
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++ // this gives context as we cant use hardcoded values here
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // this provides context, the one who calls the value of that gets printed
}

const satyam = new createUser("satyam", 690) // new keyword is important here 
const bhavyansh = new createUser("bhavyansh", 250) // new keyword is important here

// IMPORTANT - new keyword links to the prototype property

satyam.printMe() // price is 690



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The new object is returned: the newly created object is returned.

*/