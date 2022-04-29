/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/





function stringMerge(string1, string2, letter){
    let arrString1 = string1.split('');
    let arrString2 = string2.split('');
   
  arrString1 = arrString1.slice(0, arrString1.indexOf(letter,0));
  arrString2 = arrString2.slice(arrString2.indexOf(letter, 0), arrString2.length);
   return arrString1.concat(arrString2).join('');
   
 }