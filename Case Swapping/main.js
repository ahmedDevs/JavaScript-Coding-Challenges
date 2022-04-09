/*
Given a string, swap the case for each of the letters.

Examples
""           -->   ""
"CodeWars"   -->   "cODEwARS"
"abc"        -->   "ABC"
"ABC"        -->   "abc"
"123235"     -->   "123235"
*/



function swap(str){
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++) {
      if(strArr[i] === strArr[i].toUpperCase()) {
        strArr[i] = strArr[i].toLowerCase();
      }  else {
        strArr[i] = strArr[i].toUpperCase();
      }
    }
  return strArr.join('');
}