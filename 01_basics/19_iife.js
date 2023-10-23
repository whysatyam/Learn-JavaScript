// Immediately Invoked Function Expressions (IIFE)
// we use iife to remove global scope pollution (declarations, variables etc)

(function hi(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; is important here

// arrow function -

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Satyam');

// name is the argument 