/*
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
*/


function adjacentElementsProduct(array) {
    const productArr = []
    for(let i = 0; i < array.length; i ++) {
      if(!array[i+1]) break
      productArr.push(array[i] * array [i+1])
    }
    return productArr.sort((a,z) => a - z).pop() || 0
  }