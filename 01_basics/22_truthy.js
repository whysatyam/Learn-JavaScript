const userEmail = [] // truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values -
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values -
// "0", 'false', " ", [], {}, function(){}

// check if array is empty
if (userEmail.length === 0) {
    console.log("array is empty"); // array is empty
}

// check if object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty"); // object is empty
}


// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10          // output 5
// val1 = null ?? 10       // output 10
// val1 = undefined ?? 15  // output 15
// val1 = null ?? 10 ?? 20 // output 10

// always returns the first value, but if the first value is null or undefined, it will return the next value

console.log(val1);


// Terniary Operator -
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")