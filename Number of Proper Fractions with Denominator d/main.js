/*
DESCRIPTION:
If n is the numerator and d the denominator of a fraction, that fraction is defined a (reduced) proper fraction if and only if GCD(n,d)==1.

For example 5/16 is a proper fraction, while 6/16 is not, as both 6 and 16 are divisible by 2, thus the fraction can be reduced to 3/8.

Now, if you consider a given number d, how many proper fractions can be built using d as a denominator?

For example, let's assume that d is 15: you can build a total of 8 different proper fractions between 0 and 1 with it: 1/15, 2/15, 4/15, 7/15, 8/15, 11/15, 13/15 and 14/15.

You are to build a function that computes how many proper fractions you can build with a given denominator:

properFractions(1)==0
properFractions(2)==1
properFractions(5)==4
properFractions(15)==8
properFractions(25)==20
Be ready to handle big numbers.
*/


// number that denotes the denominator of fraction
// number of reduced fractions between 0 and 1
// 10 ---> 9,7,3,1 ---> 4

// function with number as parameter
// find all numbers that are < given number > 0
// if the number can be simplified, remove it
// count the remanining numbers

function properFractions(n){
    let belowDenominator = []
    for(let i = 1; i < n; i++) {
        if(!i % n ) continue
        else if(!(i % 2) && !(n % 2)) continue
        else if(!(i % 3) && !(n % 3)) continue
        else if(!(i % 5) && !(n % 5)) continue
        else if(!(i % 7) && !(n % 7)) continue
        else belowDenominator.push(i)
    }
    return belowDenominator.length || 0
}
