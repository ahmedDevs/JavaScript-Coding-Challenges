
/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will 
insert dashes ('-') between each two odd digits in num. For example: if num is 
454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
     const arrNum = num.toString().split('');
     arrNum.forEach((e, i, a) => {
        if(e % 2 != 0 && a[i+1] % 2 != 0 && e  != '-' && a[i+1] != '-') {
            arrNum.splice(i+1, 0, '-');
        }
     });
     return arrNum.join('');
}
