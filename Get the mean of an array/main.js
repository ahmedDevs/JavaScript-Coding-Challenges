/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

// array of numbers int, floats? 
// average rounded down to nearest integer
// [1,2,3,4,5]  ---> 3

//function with array as argument

// get the average:
// sum the arr and divide by its length
// sum array using reduce method or by iterating over it.
// or use Math.avg
// round down to nearest int:
// use Math.floor()


const getAverage = marks => {
    const sum = marks.reduce((sum, current) => sum + current, 0)
    return Math.floor(sum/marks.length)
}
