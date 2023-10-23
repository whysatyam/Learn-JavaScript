// map - takes a callback function
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// adds 10 to each num
const addTen = myNumbers.map( (num) => {
    return num + 10
});
console.log(addTen);

// chaining - using another method after previous one creating a chain of methods
const newNums = myNumbers
                .map((num) => num * 10 ) // the value will get passed on to next method 
                .map((num) => num + 1) // the value will get passed on to next method
                .filter((num) => num >= 40) // filter will be applied to the value obtained

console.log(newNums); // returns [41, 51,  61, 71, 81, 91, 101]