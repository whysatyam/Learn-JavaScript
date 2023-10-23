if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // a is not defined as const is block scope
// console.log(b); // b is not defined as let is block scope
// console.log(c); // c is defined as var is global scope which is a bad thing as it can lead to many errors


function one(){ // in nested functions , child functions can access parents's variables
    const username = "satyam"

    function two(){
        const website = "youtube"
        console.log(username); // username is accessible
    }
    //console.log(website); //const webiste cannot be accessed

    two()

}

one()

if (true) {
    const username = "satyam" // in nested if else statements , child statements can access parents's variables
    if (username === "satyam") {
        const website = " youtube"
        console.log(username + website); // both username and website are accessible
    }
    //console.log(website); // const website cannot be accessed
}

// console.log(username); // const username is not accessible


// JavaScript Hoisting :

console.log(addone(5)) // output is 6
function addone(num){
    return num + 1
}



console.log(addTwo(5)) // shows error as we cant access a function before declaring it
const addTwo = function(num){
    return num + 2
}