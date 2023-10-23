// Filter - returns the true values, takes a callback function in it just like .forEach 
// Function using filter property can return variable's value in which it is stored unlike .forEach
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => { // stored in newNums
    return num > 4 // condition
} )

console.log(newNums); // returns [ 5, 6, 7, 8, 9, 10 ]


// using .forEach property
const oldNums = [] 

myNums.forEach( (num) => {
    if (num > 4) {
        oldNums.push(num) // we initialized oldNums as empty array and pushed the values into it as we cannot return function using .forEach outside function scope
    }
} )

console.log(oldNums); // returns [ 5, 6, 7, 8, 9, 10 ]

// accessing array of objects using filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

userBooks = books.filter ((bk) => {
    return bk.edition < 2000
})

console.log(userBooks);