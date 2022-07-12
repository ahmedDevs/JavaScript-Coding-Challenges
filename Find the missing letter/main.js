/*
DESCRIPTION:
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/


function findMissingLetter(arr) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if(arr[0] === arr[0].toUpperCase()) {
        alphabet = alphabet.map(e => e.toUpperCase())
    }
    const arrAlphabet = alphabet.slice(alphabet.indexOf(arr[0]), alphabet.indexOf(arr[arr.length-1])+1)
    const missingLetter = arrAlphabet.filter((e) => !arr.includes(e)).join('')
    return missingLetter
}


