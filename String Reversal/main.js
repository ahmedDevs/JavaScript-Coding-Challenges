/*
Given a string of characters as input, write a function that returns it with the 
characters reversed.
*/


// loop from end of string to begining of it
// add the characters to another variable as I loop

// O(n) complexity (linear)
const reverseString = string => {
    let reversedString = ''
    for(let i = string.length-1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString
}
console.log(reverseString('Hello World!'))
console.log(reverseString("I'm the captain now."))
