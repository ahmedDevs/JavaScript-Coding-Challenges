/*
DESCRIPTION:
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/


const moveTen = s => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.repeat(3)
    return s.split('').map(e=> alphabet[alphabet.indexOf(e) + 10]).join('')
}
