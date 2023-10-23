// for in loop - for in loop donot work on Map

const myObject = {  // for in loop works on objects
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { 
    console.log(`${key} shortcut is for ${myObject[key]}`); // works
} // key = js cpp rb swift, myObject[key] = value of key that is javascript c++ ruby swift by apple


const programming = ["js", "rb", "py", "java", "cpp"] // on arrays
for (const key in programming) {
    console.log(programming[key]); // works
} // key = 0 1 2 3 4, programming[key] = js rb py java cpp

const map = new Map() // on map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key); // for in loop donot work on Map, outputs empty console
}