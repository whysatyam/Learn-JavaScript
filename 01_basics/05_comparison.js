// Basics, answer will be in true / false :

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Different Data types comparison (bad practice) :

// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false, == is called equality check
console.log(null >= 0); // true, comparisons convert null to number, treating it as 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === (strict check)

console.log("2" == 2); // true 
console.log("2" === 2); // false in strict check, different data type