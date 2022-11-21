/*
DESCRIPTION:
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

// string of words omse of them repeating 
// string with consecutive repeated words removed
// 'yo yo yo i am the best' ---> 'yo i am the best'

// function with given string as argument
// filter the values that don't equal to the next one



const removeConsecutiveDuplicates = s => s.split(' ').filter((e,i,a) => e !== a[i+1]).join(' ')



