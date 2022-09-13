/*
Given an array of numbers (in string format), you must return a string. The numbers 
correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should 
also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/



const switcher = x => {
    const reverseAlphabet = ' ?!abcdefghijklmnopqrstuvwxyz'.split('').reverse()
    return x.map((e,i) => reverseAlphabet[Number(x[i]) - 1]).join('')
  }