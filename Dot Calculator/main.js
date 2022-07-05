/*
DESCRIPTION:
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/


function dotCalculator (equation) {
    const operatorLocation = equation.split('').indexOf(' ')
    const leftSide = equation.slice(0, operatorLocation)
    let rightSide = equation.slice(operatorLocation + 3)
    const operator = equation.slice(operatorLocation + 1, operatorLocation + 2)
    if(operator === '/') {rightSide = equation.slice(operatorLocation + 4)}
    let calculation
    let ans = []
  
    if(operator === '-') {
        calculation = leftSide.length - rightSide.length
    }  else if(operator === '+') {
        calculation = leftSide.length + rightSide.length
    }  else if(operator === '*') {
        calculation = leftSide.length * rightSide.length
    }  else if(operator === '/') {
        calculation = Math.floor(leftSide.length / rightSide.length)
    } 
   
    if (calculation <= 0) {return ''}
  
    for(let i = 1; i <= calculation; i++) {
        ans.push('.')
    }
    return ans.join('')
  }