/*
DESCRIPTION:
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).
*/


// array of consecutive numbers , and an array of mixed numbers of the previous array with one number that might be missing
// missing number if any, else return 0
// ex [1,2,3,4,5], [2,3,4,5] ---> 1

// function that takes 2 parameters with the two arrays as the arguments
// concatenate the array with mixed array, and map the values of the new array,with numbers as keys and the number of their occurences as their values
// loop through the map , if the values is === 1 return the key. if no value is 1 return 0, there should be 2 of each value , else the number is missing in the mixed array


// hashmap method:

function findDeletedNumber(arr, mixArr) {
    const combinedArr = arr.concat(mixArr)
    const hashmap = {}
    for(const number of combinedArr) {
        if(!hashmap.hasOwnProperty(number)) {
            hashmap[number] = 1
        }  else {
            hashmap[number]++
        }
    }
    for(key in hashmap) {
        if(hashmap[key] === 1) {
            return Number(key)
        }
    }
    return 0
  }
 


  // chaining array methods method:
//   function findDeletedNumber(arr, mixArr) {
//     return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
//   }