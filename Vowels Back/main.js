/*
DESCRIPTION:
You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. 
For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.
*/




function vowelsBack(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(3)
    const vowels = 'aiu'
    const revertBack = 'code'
    const newStr = []
    let originalValue = 0
    for(let i = 0; i < str.length; i++) {
        originalValue = str[i]
        if(str[i] === 'c' || str[i] === 'o') {
            newStr.push(alphabet[alphabet.indexOf(str[i]) - 1])
        }  else if(str[i] === 'd') {
            newStr.push(alphabet[alphabet.lastIndexOf(str[i]) - 3])
        }  else if(str[i] === 'e') {
            newStr.push(alphabet[alphabet.lastIndexOf(str[i]) - 4])
        }  else if(vowels.includes(newStr[i])) {
            newStr.push(alphabet[alphabet.lastIndexOf(str[i]) - 5])
        }  else if(str[i] === 'a') {
            newStr.push('v') 
        }  else {
            newStr.push(alphabet[alphabet.indexOf(str[i]) + 9])
        }
        if(revertBack.includes(newStr[i])) {
            newStr.splice(i,1,originalValue)
        } 
    }
    return newStr.join('')
}

