const myArr = [0, 1, 2, 3, 4, 5] // 0, 1, 2 .. are elements
const myHeros = ["Loki", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)  // here we dont need square brackets[]
// console.log(myArr[1]); // 1

// Array methods :

// myArr.push(6) // adds 6 at the end 
// myArr.push(7) // adds 7 at the end
// myArr.pop() // removes the last value that is 7

// myArr.unshift(9) // adds 9 to array's start
// myArr.shift() // remove the first element from an array

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // output is -1 beacuse 9 doesnt exist

// const newArr = myArr.join() // converts and binds array into string

// console.log(myArr); // output is [0, 1, 2, 3, 4, 5]
// console.log(newArr); // output is 0,1,2,3,4,5


// slice and splice :

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // slice dosent manipulates the array
console.log(myn1); // [ 1, 2 ] // 3 is not included

console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3) // splice manipulates the whole array
console.log(myn2); // [ 1, 2, 3 ] // 3 is included

console.log("C ", myArr); // C  [ 0, 4, 5 ] // orignal array got changed due to splice method