// reduce method - reduce() method of Array executes a "reducer" callback function on each element of the array
// takes 2 parameters acc and curr - acc stands for accumulator, crr stands for current value

const myNums = [1, 2, 3]

const total = myNums.reduce(function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`); // this code line outputs line 15 to line 17 in this file
    return acc + curr // returns 6
}, 0) // we passed 0 as the initial value

console.log(total);

// working of reduce from the perspective of example above -

// acc: 0 and curr: 1
// acc: 1 and curr: 2
// acc: 3 and curr: 3

// In first iteration, the passed initial value becomes the accumultor's value
// then the value of acc gets added to the curr val, curr val is the first element of array in the first iteration (current value shifts to the second element in second iteration and so on...)
// the value obtained after addition is acc val for second iteration, now the curr value is the second element, both new values will be added the value obtained will be the acc val in third iteration and the curr value will be the third element of array and so on...

// reduce using arrow function - 
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0) // initial val is 0
console.log(myTotal); // output is 6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // item denotes every object in shoppingCart

console.log(priceToPay); // output 22996 (total price of all courses)