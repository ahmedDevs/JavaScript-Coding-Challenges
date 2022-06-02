/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/






function last(x) {
    let arr = x.split('');
    let arrReversed = arr.reverse().map(e => e.split(''));
     arrReversed = arrReversed.map(e => e.join(''));
     arr = arrReversed.join('').split(' ');
     return arr.sort().map(e => e.split('').reverse().join(''));  
 }
 