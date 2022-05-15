/*
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

function duplicates(array){
 
    let count = 0;
    array.sort((a,z) => a- z);
    array.filter((e,i,a) => e === a[i+1]);
    if (array[0] !== array[1]) {
        array.shift();
    }
   if (array[array.length -1] !== array[array.length -2]) {
        array.pop();
    }
   
    for(let i = 0; i < array.length; i++) {
       if(array[i+1] === array[i]) {
           count += 1;
           i++;
      }  
   
    }
    return count;
       
   }