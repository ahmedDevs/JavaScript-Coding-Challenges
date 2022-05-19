/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    let strLowerCase = x.toLowerCase();
     if (strLowerCase.split('').reverse().join('') === strLowerCase){
       return true;
     } else {
       return false;
     }
   }