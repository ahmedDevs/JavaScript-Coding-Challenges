/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains 
an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


const solution = str => {
    if(str.length % 2 !== 0) {
        str += '_'
    }
    const strArr = str.split('')
    const arr = []
    for(let i = 1; i < strArr.length; i++) {
        if(i % 2 !== 0) {
           arr.push(strArr[i-1] + strArr[i])
        }
    }
    return arr
}
