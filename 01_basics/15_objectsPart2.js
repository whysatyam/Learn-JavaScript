// singleton - built using constructor :

// const tinderUser = new Object()  // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Satyam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // returns object

const regularUser = {
    email: "satyam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Satyam",
            lastname: "Gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // returns Satyam

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3) // mdn docs - Object.assign(target, source)

const obj5 = {...obj1, ...obj2, ...obj3} // spread operator
console.log(obj4); // returns { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
console.log(obj5); // returns { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [ // array of objects
    {
        id: 1,
        email: "hi@gmail.com"
    },
    {
        id: 2,
        email: "hi@gmail.com"
    },
    {
        id: 3,
        email: "hi@gmail.com"
    },
]

console.log(users[1].email) // accessing from array of objects


// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns array of keys [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // returns array of values [ '123abc', 'Satyam', false ]
console.log(Object.entries(tinderUser)); // returns nested array of entries [ [ 'id', '123abc' ], [ 'name', 'Satyam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns true

// Destructring - 

const course = {
    coursename: "DevOps",
    price: "699",
    courseInstructor: "Satyam Gupta"
}

// course.courseInstructor // long name

const {courseInstructor: instructor} = course // destructuring using {}
console.log(instructor); // small name after destructuring

// This is how data in API looks like (note - keys are also strings):

// {
//     "name": "Satyam",
//     "coursename": "Next.js",
//     "price": "599"
// }

// API in form of array of objects :

[
    {},
    {},
    {}
]