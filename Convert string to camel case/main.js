/*
DESCRIPTION:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/



function toCamelCase(str){
    let arrStr = str.split('')
    arrStr = arrStr.map((e,i) => e === '-' || e === '_' ? arrStr[i+1] = arrStr[i+1].toUpperCase() : e)
    arrStr.map((e,i) => e === '-' || e === '_' ? arrStr.splice(i+1,1) : e)
    arrStr.forEach((e,i) => e.toUpperCase() === arrStr[i+1] ? arrStr.splice(i,1) : e)
    return arrStr.join('')
 }

