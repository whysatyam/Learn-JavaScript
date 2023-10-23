let myDate = new Date()
// console.log(myDate.toString()); // different formts to represent date time
// console.log(myDate.toDateString()); // different formts to represent date time
// console.log(myDate.toLocaleString()); // different formts to represent date time
// console.log(typeof myDate); // output is Object

// let myCreatedDate = new Date(2023, 0, 23) // here 0 is month, 23 is the date, 2023 is the year
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // output 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") // yy-mm-dd format
let myCreatedDate = new Date("01-14-2023") // mm-dd-yy format
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // outputs a milli second value
// console.log(myCreatedDate.getTime()); // outputs a milli second value
// console.log(Math.floor(Date.now()/1000)); // coverts milli seconds to seconds 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // add 1 because month indexing starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()}`

newDate.toLocaleString('default', {
    weekday: "long",
    
}) // 'default' sets it to default format