for (let i = 0; i <= 10; i++) {   // if in for
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}


for (let i = 1; i <= 10; i++) {   // for in for
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {  // index is 2 according to indexing, myArray.length is 3
    const element = myArray[index];
    console.log(element);
}

// shortcut - ctrl + D on any word to select all others

// break and continue -
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // loop stops after 5 is detected
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // loop continues till 20 even after detection of 5
    }
   console.log(`Value of i is ${index}`);
    
}