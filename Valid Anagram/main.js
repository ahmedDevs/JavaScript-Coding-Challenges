/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/


// hasmap mehtod:

const isAnagram = (s,t) => {
    const sHashmap = {}
    const tHashmap = {}
    for(const letter of s) {
        if(!hasOwnPropety(letter)) {
            sHashmap[letter]++
        }  else {
            sHashmap[letter] = 1
        }
    }
       for(const letter of t) {
        if(!hasOwnPropety(letter)) {
            tHashmap[letter]++
        }  else {
            tHashmap[letter] = 1
        }
    }
}


for(key in sHashmap) {
    if(sHashmap[key] !== tHashmap[key]) {
        return false
    }
}
return true 