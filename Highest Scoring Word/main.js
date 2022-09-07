/*
DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/


     

function high(str){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    str = str.split(' ')
    const scoreArray = []
  
    for(let i = 0; i < str.length; i++) {
      scoreArray.push(str[i].split('').map(e => alphabet.indexOf(e) + 1)) 
   }
    const finalscoreArray = scoreArray.map(e => e.reduce((sum, current) => sum + current, 0))
   
    const highestScore = scoreArray.map(e => e.reduce((sum, current) => sum + current, 0)).sort((a,z) => z - a).filter((e,i,a) => e === a[0])
    if (highestScore.length > 0) {
      const highestScoreIndex = finalscoreArray.indexOf(Number(highestScore[highestScore.length-1]))
      return str[highestScoreIndex]
   }
  
    const highestScoreIndex = finalscoreArray.indexOf(Number(highestScore))
    return str[highestScoreIndex]
  }