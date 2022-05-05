/*
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital 
letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/


const capitals = word => {
    const wordArr = word.split('').map((e,i,a) => e === e.toUpperCase() ? i : ''); 
   return  wordArr.filter(e => typeof e === 'number');
   }