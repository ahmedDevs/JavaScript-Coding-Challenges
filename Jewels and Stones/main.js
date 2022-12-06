/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// string, jewels. and string stones
// number of characters that are in stones and also in jewels (case sensitive)
//all characters in jewels are unique
// jewels = 'iamgroot'. stones = 'abcd' --> 1 

// function with jewels and stones as parameters
// hashmap of the stones with chracters as keys and number of occurance as values
// declare a variable with let, count, and assign it 0
// loop through hashmap if the key exists in jewels, add the value to count
// return count


const numJewelsInStones = (jewels, stones) => {
    const hashmap = {}
    for(let char of stones) {
        if(!hashmap.hasOwnProperty(char)) {
            hashmap[char] = 1
        }  else {
            hashmap[char]++
        }
    }
    let count = 0
    for(let i = 0; i < jewels.length; i++) {
      if(hashmap[jewels[i]]) {
          count += hashmap[jewels[i]]
      }
    }
    return count
}