/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// array of strings, all lowecased
// group anagrams toether in subarrays
// [i am groot ma] ---->  [[i], [am,ma], [groot]]


// function with the array as an argument 
//  loop through array and sort each word 
// if there are matches get their indices
// deconstruct them and push them into an array



const groupAnagrams = strs => {
    const sortedStrs = strs.map(e => [...e].sort().join(''))
    const hashmap = {}
    const output = []
    let i = 0
    for(const word of sortedStrs) {
            if(!hashmap.hasOwnProperty(word)) {
                hashmap[word] = i
            }  else {
                hashmap[word] = [...String(hashmap[word]), i]
            }
            i++
    }

    return hashmap
    for(key in hashmap) {
        output.push([...(hashmap[key])])
    }

    return output
        
    }


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))