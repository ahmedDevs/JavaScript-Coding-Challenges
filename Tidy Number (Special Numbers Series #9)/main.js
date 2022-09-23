/*
DESCRIPTION:
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
*/




const tidyNumber = n => {
    n = n.toString().split('')
    const compareArr = n.slice().sort((a,z) => a - z)
    return compareArr.join('') !== n.join('') ? false : true 
}