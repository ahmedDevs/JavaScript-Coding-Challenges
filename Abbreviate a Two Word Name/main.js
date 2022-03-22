/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


function abbrevName(name) {
    let abbrev = name.split('').filter(e => e === e.toUpperCase() && e != 0);
     abbrev.splice(1,0,'.');
     return abbrev.join('');
}
