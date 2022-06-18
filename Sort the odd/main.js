/*
DESCRIPTION:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/



function sortArray(arr) {
    const oddArr = arr.filter(e => e % 2 !== 0).sort((a,z) => a - z)
    const labelOddArr = arr.map(e => e % 2 !== 0 ? 'odd' : e)
    labelOddArr.forEach((e,i,a) =>  {
        if(e === 'odd') {
          a.splice(i,1,oddArr.shift())
        }           
    })
    return labelOddArr
}