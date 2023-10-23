// console.log(Math); // output is Object [Math] {}
// console.log(Math.abs(-4)); // changes -ve to +ve
// console.log(Math.round(4.5)); // .5+ or .5 values = upper side , .5- values = lower side
// console.log(Math.ceil(4.2)); // output 5 , top val
// console.log(Math.floor(4.9)); // output 4 , lower val
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // outputs value between 0 and 1
console.log((Math.random()*10) + 1); // adding 1 ensures minimum value is 1 and not 0, wrap Math.random()*10 in () so that it gets calculated first then add 1 to it 
console.log(Math.floor(Math.random()*10) + 1); // no decimal values

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// Math.random() * (max - min + 1) ensures the value isnt 0
// adding min to it will atleast give us the value of 10 i.e. min value