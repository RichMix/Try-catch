// Try Catch - The Try Block starts with the try keyword && {} 
// contains the code you think will cause an error
// The Catch block catches the error that the try block produces but in ()
// you have a built in object for ERROR like (err)

try {
    console.log(a + b)
} catch(err) {
    console.log(err)
    console.log("-----There was an error")
    console.log('-----The error was saved in the error log')
}
console.log("My program does not stop")

