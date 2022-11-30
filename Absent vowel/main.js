/*
DESCRIPTION:
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

// string containing sentence, some of the letters are vowels, all vowels are lowercased
//  the index of the missing vowel based on the indexing above

//   function with the stirng as argument
// declare a variable and assign it  the vowels as a string
// loop through the array and iterate, creating an object with vowels as keys and values as indices




function absentVowel(x){
    const vowels = 'aeiou'
    const hashmap = {}
    for(let i = 0; i < x.length; i++) {
        hashmap[x[i]] = i
    }
    for(const vowel of vowels) {
        if(!hashmap.hasOwnProperty(vowel)) {
            return vowels.indexOf(vowel)
        }
    } 
}
// test cases:
console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0)
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3)