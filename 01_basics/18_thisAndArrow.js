const user = { // functions placed in an object can only use 'this'
    username: "Satyam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // outputs current values
    }
    // 'this' refers to current context
}

user.welcomeMessage() // output is Satyam, welcome to webiste
user.username = "sam" // current context got changed
user.welcomeMessage() // output is sam, welcome to website

console.log(this); // outputs {} because we are in node environment, browser shows window object known as global object

function hi(){ // function
    let fullname = "satyam"
     console.log(this.fullname);
 }

hi() // outputs undefined , we are not able to access using 'this' in a function

// ARROW FUNCTIONS -

const fry =  () => { // 'this' doesnot work in functions or any arrow function
    let username = "satyam"
    console.log(this.username);
}

fry()


// Basic arrow function - 
// explicit return ( as we are explicitily defining 'return' in code)
// whenever {} is used in an arrow function we will use the keyword 'return'
const addOne = (num1, num2) => {
     return num1 + num2
}

// Implicit return arrow function - remove {} 
const addTwo = (num1, num2) =>  num1 + num2

// commonly used arrow function - add ()
const addThree = (num1, num2) => ( num1 + num2 )

// arrow function - returning an object implicitly
const addFour = (num1, num2) => ({username: "hitesh"})