/*
Check to see if a string has the same amount of 'x's and 'o's. The method must 
return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/


function XO(str) {
    const arrStr = str.toLowerCase().split('');
      let countO = 0;
      let countX = 0;
      for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] === 'o') {countO++}
        else if(arrStr[i] === 'x') {countX++}
      }
      return countO === countX ? true : false;
  }