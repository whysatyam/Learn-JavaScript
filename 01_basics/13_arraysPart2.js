const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // nests array at index position 3
// console.log(marvel_heros); // array got nested , results in making the whole dc_heros array the 4th element of marvel_heros

// console.log(marvel_heros[3][1]); // prints out flash , [3][1] refers to element at first index position in element at index position 3 in marvel_heros 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // concat is the right way to merge arrays

const all_new_heros = [...marvel_heros, ...dc_heros] // best way to merge 2 arrays using Spread Operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // infinity is th depth of nested arrays, it can also be 1, 2, 3 etc
console.log(real_another_array); // return [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Hitesh")) // output is false
console.log(Array.from("Hitesh")) // coverts to array, output is [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // output is [] beacuse we didnt specify we need array of keys or of values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // output [ 100, 200, 300 ]