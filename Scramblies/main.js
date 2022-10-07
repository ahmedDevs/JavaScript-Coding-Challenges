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

// strings lowercase()    (geberrish, word to match)
// true if the 1st param has the characters to form the 2nd param, otherwsie false
// ex ('aknkandkandabfbgsb','Hello') ---> False
// pseudo

// function scramble (str1,str2)
//  convert str1 to array and sort, then convert back to string
// do the same with str2
// remove duplicates from sorted str 1 
// now, see if you can destructure str2 out of str1 , if yes return true , else false


// const scramble = (str1,str2) => {
//    const sortedStr2 = [...str2].join('')
//    const sortedStr1 = [...str1].filter(e => sortedStr2.includes(e)).join('')
//    return sortedStr1 
//     for(let i = 0; i < sortedStr2.length; i++) {
//         if(!sortedStr1.includes(sortedStr2[i])) return false    
//    }
//    return true 
//   }
// console.log(scramble('cedewaraaossoqqyt', 'codewars'))


const scramble = (str1, str2) => {
    if (str1.length < str2.length) return false
    const arrStr2 = str2.split('')
    str1.split('').forEach(e => {
        if (arrStr2.includes(e)) arrStr2.splice(arrStr2.indexOf(e), 1)
    })
    return arrStr2.length === 0
}
console.log(scramble('cedewaraaossoqqyt', 'codewars'))


// function scramble(str1, str2) {
//     let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
//     return str2.split("").every((character) => --occurences[character] >= 0);
//   }

// function scramble(str1, str2) {
//     var hashtab = [...new Array(256)].map(x => 0);
    
//     str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
//     str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);
    
//     hashtab = hashtab.filter (x=>x > 0);
    
//     return hashtab.length == 0;
//   }