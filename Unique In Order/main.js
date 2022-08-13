/*
DESCRIPTION:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/



const uniqueInOrder = arr => {
    if(typeof arr === 'string') {
        arr = arr.split('')
    }

    let unique = []
    let i = 0
     while( i < arr.length) {
        if(arr[i] !== arr[i+1]) {
            unique.push(arr[i])
        }
        i++
    }
   return unique
}
