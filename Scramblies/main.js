/*
DESCRIPTION:
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/



const scramble = (scramble,word) => {
    // making a hash map for borth scramble and word
    const hashMapScramble = {}
    const hashMapWord = {}

    // if the character being iterated exists or if doesn't ( || 0 fallback) reassign the key to increase by 1
    for(const char of scramble) {
     hashMapScramble[char] = (hashMapScramble[char] || 0) + 1
    }
    // same as above, but for the hash map word object
    for(const char of word) {
     hashMapWord[char] = (hashMapWord[char] || 0) + 1
    }
    // if the key in hash map word doesn't exist in the scramble hashmap, or if it's value is lower return false
    for(key in hashMapWord) {
     if(!hashMapScramble[key] || hashMapScramble[key] < hashMapWord[key]) return false
    }
    // else return true
     return true 
   }



