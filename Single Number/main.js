/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

// hashmap approach
const singleNumber = nums => {
    const hashmap = {}
    for(let num of nums) {
        hashmap[num] = hashmap[num] + 1 || 1
    }
    for(key in hashmap) {
        if(hashmap[key] < 2) {
            return Number(key)
        }
    }
}

// set method
// const singleNumber = nums => {
// const set = new Set() //Define set
// for(let num of nums) {
// if(set.has(num)) { //Set method to check number is in Set
// set.delete(num) //if num is in set than remove the element
// } else {
// set.add(num); //add number in Set
// }
// }
// return Array.from(set)
// }