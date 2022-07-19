/*
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/




function solution(str) {
    let strArr = str.split('')
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === strArr[i].toUpperCase()) {
          strArr.splice(i,0,' ')
          i++
      }
    }
   return strArr.join('')
}
