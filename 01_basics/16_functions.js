function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// sayMyName() // calling a function


function addTwoNumbers(number1, number2){  // 2 arguments are passed
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 // nothing ever gets printed once the function gets returned
}


function loginUserMessage(username = "sam"){ // default value is sam
    if(!username){ // if user didn't enter any username
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("satyam"))  // console.log is important to print out the returned value to the console


function calculateCartPrice(val1, val2, ...num1){ // rest operator
    return num1
}
// the syntax for rest and spread operator is the same, depending on the usecase it is called spread / rest 
console.log(calculateCartPrice(200, 400, 500, 2000)) // output is [ 500, 2000 ], val1 is 200, val2 is 400, rest all the values come under rest operator

const user = {
    username: "Satyam",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({  // we can even pass username and price to handleObject function via an object
    username: "sam",
    price: 799
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]   // dont write my new array because thats a generic value
}

// console.log(returnSecondValue(myNewArray)); // output 400
console.log(returnSecondValue([200, 400, 500, 1000])); // we can even pass an array to a function because myNewArray is also equal to the same array, its the same thing