/*
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/






function isHollow(x){
    const numberOfZeros = x.filter(e => e === 0).length 
    if(x.slice(0,x.indexOf(0)).length === x.slice(x.lastIndexOf(0) + 1).length && numberOfZeros >= 3) return true
    return false

}
console.log(isHollow([-1,0,0,0,3]))