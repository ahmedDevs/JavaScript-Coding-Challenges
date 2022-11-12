/*
DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/



// function findUniq(arr) {
//     arr = arr.sort((a,z) => a - z)
//     const lastElement = arr.pop()
//     const comparisonArr = arr.slice(0,2).concat(lastElement)
//     return Number(comparisonArr.filter((e,i,a) => e !== a[1]).join(''))
// }


// hashmap method:
function findUniq(arr) {
    const hashmap = {}
    for(number of arr) {
        if(!hashmap.hasOwnProperty(number)) {
            hashmap[number] = 1
        }  else {
            hashmap[number]++
        }
    }
    for(key in hashmap) {
        if(hashmap[key] === 1) {
            return key
        }
    }
}
