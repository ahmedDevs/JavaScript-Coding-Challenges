/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// array of integers and a target number
// position (index) of target number in the array, if number is not in the array,
// return index in which it would have been if it were.
// [1,2,3,4,5] , 6 --> 5

// function with array and num as arguments
// loop through array and find index of target using indexOf method
// if  ! indexOf, filter nums less than target 
// return filteredarray[arr.length] || 0


const searchInsert = (nums, target) => {
    const indexTarget = nums.indexOf(target)
    if(indexTarget !== -1) return indexTarget
    const filter = nums.filter((e,i) => e < target)
    return filter.length || 0
}