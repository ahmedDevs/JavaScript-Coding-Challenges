/*
Sort an array according to the indices in another array. It is guaranteed that the
two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/






function sort(initialArray, sortingArray) {
    let ans = [];
    for(let i = 0; i < initialArray.length; i++) {
        ans.push(1);
    }

   for(let i = 0; i < ans.length; i++) {
        ans.splice(sortingArray[i], 1, initialArray[i]);
}
    return ans;
}