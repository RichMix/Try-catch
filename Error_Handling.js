// Throw, Catch, Try

/*

try { //try code
    console.log(c + d) // console.log w/ error
} catch(err) { // catch error and log here
    // do something here within the catch block
}

console.log('This line now runs');


console.log(a+b); //Ref Error
console.log("this line is never reached")
*/
// Throw new ref error

try {
    throw new ReferenceError();
} catch(err) {
    console.log(err)
    console.log('There was an error')
}
console.log('My Program does not stop')