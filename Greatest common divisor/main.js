/*
Find the greatest common divisor of two positive integers. The integers can be 
large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common
 divisor will always be an integer that is also greater or equal to 1.
 */


 function divisor(x,y) {
    if(x > y) {
        let remainder = x % y;
        x = remainder
        while(x !== 0) {
            if (x / y === 0) {
                break;
            }
            x = x/y;
           
        } 
        return x;

    }  else if (x < y) {
         let remainder = y % x;
         while(remainder !== 0) {
            if(remainder % x === 0) {
                break;
            }
             remainder = remainder % x;
            
         }
         return remainder;
    }

 }
