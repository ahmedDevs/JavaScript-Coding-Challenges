/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// string containing characters: ( ) { } [ ]
// true if valid, false if not
// all brakctes must be closed by same bracket type
// all brackets must be closed in same order
// every close bracket has an open bracket
// s = "((()))" --> true

// function with given string as argument 
// loop through strings and then conditionals


// heap method:

const isValid = s => { 
   const bracket = {
       '(': ')',
       '[': ']',
       '{': '}'
   }
const heap = []   
for(let char of s) {
    if(bracket[char]) {
        heap.push(bracket[char])
    }  else if(heap.pop() !== char) return false
}
   return (!heap.length)
}









   //  function validParentheses(parens) {
   //      parens = parens.split('')
   //      const open = parens.filter(e => e === '(')
   //      const close = parens.filter(e => e === ')')
   //       if(parens.join('') == '' || parens[0] === '(' && parens[parens.length -1] === ')' && open.length === close.length) {
   //          return true
   //       }  else if(parens.slice(0,2).join('') === parens.slice(parens.length -2, parens.length).join('')) {
   //          return false
   //       }  else {return false}  
   //  } 

