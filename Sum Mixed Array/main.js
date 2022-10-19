/*
DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

// array of strings integers and number integers, floats? 
// return sum of all nums string and int as a num
// [1,2,3,4,'5'] ---> 15


// function with array as param
// the array as arg

// we can loop through array and convert strings to numbers, then use the reduce method to calc sum
// we can loop through array and add nums to an assigned variable, if num is string convert to num and then add
// we can use the map method to convert strings to nums and then add



function sumMix(arr) {
    return arr.reduce((sum, current) => sum+ +current, 0)
}
console.log(sumMix([1,2,3,4,'5']))




