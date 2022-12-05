/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// string
// an object with characters as keys and count of each character as values, if string is empty return {}
// 'iamgroot' ---> {'i': 1, 'a':1, 'm':1, 'g':1, 'r':1, 'o': 2, 't': 1}




// function count (string) {  
//     const strArr = string.split('')
//     const letterObj = {}
//     strArr.map((e,i,a) => { 
//         letterObj[e] = a.filter(e => e === a[i]).length
//     })
//     return letterObj
// }


// hashmap method:
function count (string) {
    const hashmap = {}
    for (char of string) {
        if (!hashmap.hasOwnProperty(char)) {
            hashmap[char] = 1
        }  else {
            hashmap[char]++
        }
    }
    return hashmap
}
console.log(count('iamgroot'), {i: 1, a:1, m:1, g:1, r:1, o: 2, t: 1})
console.log(count("aba"), { a: 2, b: 1 }); 
console.log(count(""), {}); 
