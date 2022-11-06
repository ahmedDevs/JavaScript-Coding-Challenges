/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// string of letters  space? nums? special characters?
// length of the longest substring without repeating characters 
// "iamgroot" ---> "iamgro"  --> 6



const lengthOfLongestSubstring = s => {
    const strLengths = []

    for(let i = 0; i < s.length; i++) {
        const subString = s.substring(i)
            if(subString.length === [...new Set(subString)].length) {
                strLengths.push(subString)
            }
    }
    return strLengths
}
console.log(lengthOfLongestSubstring("abcabcbb"))

