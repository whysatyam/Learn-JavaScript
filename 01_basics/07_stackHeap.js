// 2 types of memory - stack memory and heap memory

// stack memory is used in primitive data type
// we get a copy of declared variable, example -

let myName = "Satyam"
let anotherName = myName

anotherName = "Bhavyansh"

console.log(myName); // orignal value remains the same, output is Satyam
console.log(anotherName); // value is Bhavyansh not Satyam


// heap memory is used in non-primitive data type
// arrays, objects and functions get inside heap memory, we get a reference of orignal value, what ever we will change will get changed in the orignal value

let userOne = {
    email: "satyam@google.com",
    city: "delhi"
}

let userTwo = userOne
userTwo.email = "bhavyansh@google.com" 

console.log(userOne.email); // output bhavyansh@google.com, orignal email got changed because of userTwo
console.log(userTwo.email); // output bhavyansh@google.com