// ["", "", ""] // array
// [{}, {}, {}] // array

// for of loop - for of loop dosent work on objects

const arr = [1, 2, 3, 4, 5] // for of loops on array

for (const num of arr) {
    console.log(num); // 1 2 3 4 5
}

const greetings = "hello world!" // for of loop on string
for (const greet of greetings) {
    console.log(`Each character is ${greet}`) // h e l l o  w o r l d
}


// Maps - no duplicate values, unique values
const map = new Map()
map.set('IN', "India") // IN is key, India is value
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) { // destructring of array
    console.log(key, '-', value);
}



const myObject = {  // for of loop dosent work on objects
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // error - myObjects is not iterable
}