/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/



// string of characters
// chracter that appear the most
// 'iamgroot' --> 'o'

// function with string as a parameter
// loop through string and assign the chars as keys to an object and their number of occurance as values
// return the key with the greatest value by looping through the object and comparing the values


// o(n)
function mostCommonChar(string) {
    const hashmap = {}
    for(char of string) {
        hashmap[char] = hashmap[char] + 1 || 1
    }
    let greatest = ''
    for(key in hashmap) {
        if (!greatest) {
            greatest = key
        }  else if(hashmap[key] > hashmap[greatest]) {
            greatest = key
        }
    }
    return greatest
}

console.log(mostCommonChar('iamgroot'))
console.log(mostCommonChar('iamthegreatest'))
console.log(mostCommonChar('Hello World!'))
