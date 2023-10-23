// object literal - simple and common way to define objects without the need for a class or constructor function
const user = {
    username: "satyam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`); // "this" means current context
        console.log(this); // outputs the whole "user" object
    }

}

// console.log(user.username) // satyam
// console.log(user.getUserDetails());
// console.log(this); // outputs {} in node environmet , outputs'Window'object in browser console, as "this" here is in global scope



// constructor function - for eg "new" keyword
function User(username, loginCount, isLoggedIn){
    this.username = username; // rather than assigning a variable to username parameter, assign it to this.username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
}

const userOne = new User("satyam", 12, true) // new keyword is required or the userTwo will overwrite userOne
const userTwo = new User("bhavyansh", 11, false) // new means new instance, new is a constructor function

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor); // outputs [Function: User]
// constructor is just a reference