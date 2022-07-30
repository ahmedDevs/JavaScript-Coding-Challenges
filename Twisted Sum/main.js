/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).

Examples
# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/





const twistedSum = n => {
    let numbersArr = []
    for(let i = 1; i <= n; i++) {
     numbersArr.push(i)
    }
    const moreThanOneDigit = numbersArr.filter(e => e > 9).map(e => e.toString().split('').reduce((sum,current) => Number(sum) + Number(current), 0))
    return numbersArr.filter(e => e < 10).concat(moreThanOneDigit).reduce((sum,current) => sum + current, 0)
    }


