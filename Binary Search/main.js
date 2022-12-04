/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// array of integers sorted from least to greatest and an integer
// find the index of the given number in the array, if it doesn't exist return -1
// [1,2,3,4,5], 4 ---> 3

// function with array and num as arguments
// start from middle of array, if it's not < target half the left side of array, repeat 


// middle = Math.floor((start + end )/ 2)
// start = 0
// end = nums.length

// binary search
function search (nums, target) {
    let start = 0
    let end = nums.length
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if(nums[mid] === target) {
            return mid
        }  else if (target < nums[mid]) {
            end = mid - 1
        }  else {
            start = mid + 1
        }
    }
    return -1 
}