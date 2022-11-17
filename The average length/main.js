/*
DESCRIPTION:
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/


// array of strings of the same letter type
// array of strings ith the lenght if each element adjusted to match average length in given array
// ['I', 'mm', 'ooooo'] ---> average (rounded) 3 ---> ['III','mmm','ooo]

// function with array passed as argument
// find the average length by adding all the letters and dividng by the number of elements
// use Math.round()
// use map to create a new array and use repeat on the first character of every string [0] to make the number of chars match the average 


const averageLength = arr => {
    const average = Math.round((arr.join('').length)/arr.length)
    return arr.map(e => e[0].repeat(average))
}

