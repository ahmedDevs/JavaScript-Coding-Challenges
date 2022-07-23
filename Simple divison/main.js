/*
DESCRIPTION:
In this Kata, you will be given two numbers, a and b, and your task is 
to determine if the first number a is divisible by all the prime factors 
of the second number b. For example: solve(15,12) = False because 15 is 
not divisible by all the prime factors of 12 (which include2).

See test cases for more examples.

Good luck!

If you like this Kata, please try:

Sub-array division

Divisor harmony
*/


function solve(a,b){
    const factors = []
    for (let i = 2; i <= b; i++) {
      while ((b % i) === 0) {
        factors.push(i)
        b /= i
      }
    }
    
   const confirm = factors.map((e,i) => a % e === 0 ? true : false)
   return confirm.includes(false) ? false : true
}




  

    