/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// O(n) space and time complexity

const containsDuplicate = (nums) => {
    const hashmap = {}
    for(let num of nums) {
        hashmap[num] = hashmap[num] + 1 || 1
    }
    for(key in hashmap) {
        if(hashmap[key] > 1) {
            return true
        }
    }
    return false 
}

// another way of doing it 
// const containsDuplicate = (nums) => {
//     const hashmap = {}
//     for(let num of nums) {
//         if(hashmap[num]) {
//             return true
//         }  else {
//             hashmap[num] = 1
//         }
//     }
//      return false
// }