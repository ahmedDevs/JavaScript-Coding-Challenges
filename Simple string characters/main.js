/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/


function solve(s){
    s.split('');
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let numbersCount = 0;
    let symbolsCount = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] % s[i] === 0 || s[i] == 0) {
             numbersCount += 1;
        }  else if(s[i] !== s[i].toLowerCase() && s[i] === s[i].toUpperCase()) {
            uppercaseCount += 1;
        }  else if(s[i] === s[i].toLowerCase() && s[i] !== s[i].toUpperCase()) {
            lowercaseCount += 1;
        } else {
            symbolsCount += 1;
        }
    }
    return [uppercaseCount, lowercaseCount, numbersCount, symbolsCount];
}