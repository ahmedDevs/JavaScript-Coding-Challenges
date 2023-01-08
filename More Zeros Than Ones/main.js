/*
DESCRIPTION:
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/


// string of characters 
// array of characters whose binary representations contain more zeros than ones. No duplicates, same order
// ['a','b','b]  --->  ['a','b']

// function with string as parameter
// remove duplicates using Set
// map the set with binary representation to new arr
// loop through new arr 

function moreZeros(string) {
    const removedDuplicates = Array.from(new Set(string))
    const newArr = removedDuplicates.map(e => e.charCodeAt().toString(2))
    const output = []
    for(let binary of newArr) {
        if(binary.split('').filter(e => e === '0').length > binary.length / 2) {
            output.push(binary)
        }
    }
    return output.map(e => String.fromCharCode(parseInt(e,2)))
}

// test cases
console.log(moreZeros('abcde'),['a','b','d'])
console.log(moreZeros('Great job!'),['a', ' ', 'b', '!'])
console.log(moreZeros('DIGEST'),['D','I','E','T'])
console.log(moreZeros('abcdeabcde'),['a','b','d'])