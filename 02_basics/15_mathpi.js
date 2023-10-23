// console.log(Math.PI); // 3.14
// Math.PI = 5
// console.log(Math.PI); // cant overwrite Math.PI, stays the same

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// Object.getOwnPropertyDescriptor(Math, "PI") means from the Math module give me the value of PI property

console.log(descripter);  // logs out (below code) -
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


// creating our own Object and defining properties that cannot be overwritten just like PI
const chai = {
    name: 'hot chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("tasty");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //  logs out -
// {
//     value: 'hot chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // logs out
// {
//     value: 'hot chai',
//     writable: false,
//     enumerable: true,
//     configurable: true
//   }

for (let [key, value] of Object.entries(chai)) {  // Object.entries makes chai iterative
    if (typeof value !== 'function') { // it wont iterate on a function that is present in chai
        console.log(`${key} : ${value}`);
    }
}

// logs out -
// name : hot chai
// price : 250
// isAvailable : true