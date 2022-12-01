/*
Given a number as an input, print out every integer from 1 to that number. 
However, when the integer is divisible by 2, print out “Fizz”; when it’s 
divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
*/



// number from 1 to +inf, no floats, no negatives
// print all numbers from 1 to given num, print 'Fizz' if n is divisible by 2, and 'Buzz' is divisible by 3, and 'Fizz Buzz' if divisible by both
// 5 --> 1,'Fizz','Buzz',4,5

//function with number as the parameter
// loop from 1 to the number
// conditionals: if divisible by both fizz buzz, else if by 2 fizz, else if by 3 buzz, else number


// loop  and conditionals approach
// o(n) space and time complexity (linear)
const fizzBuzz = number => {
    const output = []
    for(let i = 1; i <= number; i++) {
    if(i % 6 === 0) output.push('Fizz Buzz')
    else if (i % 2 === 0) output.push('Fizz')
    else if (i % 3 === 0) output.push('Buzz')
    else output.push(i)
}
   return output 
}
console.log(fizzBuzz(30))