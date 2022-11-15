/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums is a non-decreasing array.
-109 <= target <= 109
*/


// array of numbers sorted in ascending order, and a number 
// array of the starting and ending positions of the given number (indices)
// [1,2,3,4,5,6,7,8,8], 8 --->  [7,8]


// function with the array and number as arguments 
// if (!nums.includes(target)) return [-1,-1]
// return [nums.indexOf(target), lastIndexOf(target)]


const searchRange = (nums, target) => {
    if(!nums.includes(target)) {
        return [-1,-1]
    }
    return [nums.indexOf(target), nums.lastIndexOf(target)]  
}