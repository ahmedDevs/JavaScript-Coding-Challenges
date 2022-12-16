/*
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be
used more than once.
*/


function twoSum(arr, num) {
    const hashmap = {}
    const output = []
    for(let number of arr) {
        let offset = num - number
        if(hashmap[offset]) {
            output.push([offset, number])
        }  else {
            hashmap[number] = 1
        }
    }
    return output
}
console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])
