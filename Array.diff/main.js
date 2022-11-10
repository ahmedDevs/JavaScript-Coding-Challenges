/*
DESCRIPTION:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// two arrays (a,b)
//  remove all occurences of values in array b from array a  
// [1,2,3,4,4,5] ,  [5,4]  ---> [1,2,3]

// function with the two arrays as the arguments 
// loop through a, if item is in b, remove it
//or
// loop through a and filter values that aren't in b
// return the filtered array



const arrayDiff = (a, b) => a.filter(e => !b.includes(e))
 

