/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


function accum(s) {
    let arr = s.toLowerCase().split('');
  let newArr = arr.map((e,i) => e.repeat(i+1) + '-');
  newArr = newArr.map((e,i) => e.charAt(0).toUpperCase() + e.slice(1));
  return newArr.join('').slice(0, -1);
}


