/*
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is 
exactly one space between each word. Punctuation marks should be treated as 
if they are a part of the word in this kata.
*/




const reverse = str => { 
    const newStr = str.split(' ')
    const empty = ''
    if(newStr.includes(empty)) return ''
    return newStr.map((e,i) => i % 2 !== 0 ? e.split('').reverse().join('') : e).join(' ')
  }