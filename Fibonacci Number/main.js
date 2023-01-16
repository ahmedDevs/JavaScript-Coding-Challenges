/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

Constraints:

0 <= n <= 30
*/

/**
 * @param {number} n
 * @return {number}
 */
    




// memoization method:
const memo = {}
function fib(n) {
    if(n <= 1) {
        return n
    } else if(memo[n]) {
        return memo[n]
    } else {
        let result = fib(n - 1) + fib(n - 2)
        memo[n] = result
        return result
    }
}

// for loop method
// const fib = n => {
//     if(n === 0) return 0
//     const arr = [0,1]
//     for(let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2]
//     }
//     return arr[arr.length - 1]
// }

// recursive method:
// function fib(n) {
//     if(n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2)
// }


