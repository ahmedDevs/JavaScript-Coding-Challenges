/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/



const divCon = x => {
    const stringInt = x.filter(e => typeof e === 'string').reduce((sum, current) => Number(sum) + Number(current), 0)
    const numberInt = x.filter(e => typeof e === 'number').reduce((sum,current) => sum + current, 0)
    const ans = numberInt - stringInt
    return ans
  }