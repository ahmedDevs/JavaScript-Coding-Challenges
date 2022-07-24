/*
DESCRIPTION:
Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
*/



function minDistance(num){
    const factors = num => {
      let factorsArr = []
      for(let i = 1; i <= num; i++) {
          if(num % i == 0) {
              factorsArr.push(i)
          }
      }
      return factorsArr
  }
  
  const factorsDistances = factors(num).map((e,i,a) => a[i+1] - e)
  return factorsDistances.sort((a,z) => a - z).shift()
}



