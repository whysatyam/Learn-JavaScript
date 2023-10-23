let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}

Object.prototype.satyam = function(){
    console.log(`satyam is present in all objects`);
} // creating a new object in javascript

Array.prototype.heySatyam = function(){
    console.log(`satyam says hello`);
} // array is also an object

heroPower.satyam()
myHeros.satyam()
myHeros.heySatyam()
// heroPower.heySatyam()    // error because arrays cant access objects as they are below in the chain
// objects stay at the top that means they can give access to functions, arrays and strings but it cannot be done vice versa


// inheritance 
const User = {
    name: "hi",
    email: "hi@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // gives the access of properties of the TeachingSupport
}

Teacher.__proto__ = User // accessing properties in global scope
// Teacher now has access to all the User properties


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport can now access all the properties of Teacher


// creating our own property named trueLength()
let anotherUsername = "satyamcodes     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() // satyamcodes // True length is : 11
"satyam".trueLength() // satyam // True length is : 6
