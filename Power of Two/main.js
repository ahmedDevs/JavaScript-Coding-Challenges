/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
 

Constraints:

-231 <= n <= 231 - 1
*/


/**
 * @param {number} n
 * @return {boolean}
 */



 const isPowerOfTwo = n => {
    let i = n
    while(i >= 1) {
        if(i === 1) return true
        i = i / 2
    }
    return false
}