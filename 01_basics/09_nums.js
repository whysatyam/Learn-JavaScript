const score = 400
// console.log(score); // output is 400

const balance = new Number(100) // explicit declartion - 100 is of Number data type
// console.log(balance); // output is [Number: 100]

// console.log(balance.toString().length); // coverts to string and length property is applied // output is 3
// console.log(balance.toFixed(2)); // outputs 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // output is 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString); // output 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // output 10,00,000 (converts into indian number system)