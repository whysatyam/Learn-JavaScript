const name = "Satyam Gupta" // const cannot be re assigned 
let email = "satyam@google.com" 
var phoneNumber = 9999999999

/*
prefer not to use var
because of issue in block and functional scope
*/

city = "Bengaluru" // never define a variable this way
let password; // output value will be undefined

// name = "Bhavynash"  // throws an error , trying to change const
// console.log(name);

email = "bhavyansh@google.com" // email, phoneNumber, city can be re assigned 
phoneNumber = 2222222222 // the output will be these three re assigned values
city = "Delhi"

console.table([name, email, phoneNumber, city, password]);
// table methods helps us to output many values at the same time in a tabular form