/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/


function sevenAte9(str) {
   return  str.split('').map((e,i,a) => e === '9' && a[i+1] === '7' && a[i-1] === '7' ? a.splice(i-1,1) : e).join('')
}