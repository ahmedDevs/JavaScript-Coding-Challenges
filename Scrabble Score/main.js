/*
DESCRIPTION:
Write a program that, given a word, computes the scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

Examples
"cabbage" --> 14
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14
*/


function scrabbleScore(str){
    const onePoint = 'AEIOULNRST'
    const twoPoints = 'DG'
    const threePoints = 'BCMP'
    const fourPoints = 'FHVWY'
    const fivePoints = 'K'
    const eightPoints = 'JX'
    const tenPoints = 'QZ'
    let score = 0
    str = str.toUpperCase()
  
    for(let i = 0; i < str.length; i++) {
        if(onePoint.includes(str[i])) score += 1
          else if(twoPoints.includes(str[i]))  score += 2
          else if(threePoints.includes(str[i])) score += 3
          else if(fourPoints.includes(str[i])) score += 4
          else if(fivePoints.includes(str[i])) score += 5
          else if(eightPoints.includes(str[i])) score += 8
          else if(tenPoints.includes(str[i])) score += 10
    }
    return score
}