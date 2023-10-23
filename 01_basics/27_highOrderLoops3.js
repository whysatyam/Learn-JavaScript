// forEach - this loop is directly added to the properties of javascript

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){ // callback function dont have name
    console.log(val); // js ruby java python cpp
} )


coding.forEach( (item) => { // arrow callback function
    console.log(item); // js ruby java python cpp
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe) // js ruby java python cpp 
// pass printMe as parameter, just give reference - printMe, dont execute - printMe()

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr); // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ] and so on for other elements
} )



// For Array like this  -
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName); // javascript java python
} )



// .forEach property never returns or console logs a value outside its scope
// usually when we want to return a value of a function we store the function in a variable

const bigTech = ["facebook", "netflix", "amazon", "google", "apple"]

const company = bigTech.forEach((value) => { // here company is the variable in which the function is stored
  console.log(value); // returns facebook netflix amazon google apple as it is inside the scope
})

console.log(company); //  didnt work, return undefined

// hence, .forEach property never returns a value outside its scope