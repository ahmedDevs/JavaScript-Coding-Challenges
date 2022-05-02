
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/






const solution = ((str, ending) => {
    if (!ending) {return true}
    const strArr = str.split('').slice(-ending.length);
    return strArr.join('') === ending ? true : false;
   
  });