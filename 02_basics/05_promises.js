// The Promise object represents the eventual completion (or failure) of an asynchronous operation
// 3 states of a promise - pending, fulfilled and rejected

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // used for DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is compelete'); // outputs Async task is compelete
        resolve() // connecting resolve to .then()
    }, 1000)
})

// resolve connects with .then()
promiseOne.then(function(){
    console.log("Promise consumed"); // outputs Promise consumed
})

// another way - without declaring promise in a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2"); // outputs Async 2 task
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved"); // outputs Async 2 resolved
})

// passing parameters to resolve()
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "satyam", email: "satyam@example.com"}) // passing parameters to resolve, here we are passing object but can also pass array 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // outputs the parameter - {username: "satyam", email: "satyam@example.com"}
})


//
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true // will output the reject statement
        if (!error) {
            resolve({username: "satyam", password: "123"})
        } else {
            reject('ERROR: Something went wrong') 
        }
    }, 1000)
})

// reject connects with .catch()
 promiseFour // never declare all of these in a variable
 .then((user) => {
    console.log(user); // if error = false , output - {username: "satyam", password: "123"}
    return user.username // returned value can only be accessed by next chain
}).then((username) => {  // use chaining when you want specific data from resolve
    console.log(username); // output is satyam
}).catch(function(error){
    console.log(error); // will console log 'ERROR: Something went wrong' as error = true
}).finally(() => console.log("The promise is either resolved or rejected"))



// async and await with try and catch block - alternative to everthing we learnt above
// this method donot handles the catch gracefully
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
});

// try block will run if resolved
// catch block will run if rejected
async function consumePromiseFive(){ // if function uses 'async' we can use 'await' inside the function
    try {
        const response = await promiseFive // await means waiting
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive() // call the async function to run it

// fetch API -
// the processes that take some time require "await" keyword else they wont work
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  // converts into json // we need await keyword as converting response to json requires alot of time
        console.log(data);
    } catch (error) {
        console.log("something went wrong");
    }
}

getAllUsers() // calling the function to work


// fetch API -
// using .then() and .catch() to fetch -

fetch('https://api.github.com/users/whysatyam')
.then((response) => {
    return response.json()
})
.then((data) => { // Thenable
    console.log(data); // will console.log the value we returned in the above .then()
})
.catch((error) => console.log(error))


// fetch -
// when network request works, only then we get the response i.e. value of resolve and reject in .then() and .catch() that means request is fulfilled , even if the we get 'error 404' that means our network request was fulfilled
// when network request was not able to reach or got stuck somewhere, thats called rejection / no response