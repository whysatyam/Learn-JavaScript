// singleton - built using constructor (not discussed in this file)
// Object.create - constructor method  (not discussed in this file)


// object literals :

const mySym = Symbol("key1") // symbol data type

const JsUser = {
    name: "Satyam",
    "full name": "Satyam Gupta",
    [mySym]: "mykey1", // syntax to write symbol data type, use []
    age: 20,
    location: "Jaipur",
    email: "Satyam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // works but not recommended while accessing
// console.log(JsUser["email"]) // square notations are better
// console.log(JsUser["full name"]) // "full name" can only be accessed using square notations
// console.log(JsUser[mySym]) // output is mykey1

JsUser.email = "satyam@chatgpt.com"
// Object.freeze(JsUser) // using freeze no more changes or additions can be done to the object
JsUser.email = "satyamh@microsoft.com"
// console.log(JsUser); // this change wont work due to object freeze, the email remains "satyam@chatgpt.com"

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this means referring to the same object
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Satyam