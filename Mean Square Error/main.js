/*
DESCRIPTION:
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
*/


// two  integer arrays of equal length, no floats, there are negatives
// average of squared absolute value difference between each number and the corresponding number in the other array
// [1,2,3,4], [3,5,6,7] ---> (4 + 9 + 9 + 9)/ 4 ---> 6.5


// function with the 2 arrays as params
// loop, Math.abs(arr2[i] - arr1[i] ) ** 2
// add the result to a variable, differences, and increment with the rest of the results
// divide the differences by the length of any of the given arrays


const solution = (arr1, arr2) => {
    let differences = 0
    for(let i = 0; i < arr1.length; i++) {
        differences += Math.abs(arr2[i] - arr1[i]) ** 2
    }
    return differences / arr1.length
}