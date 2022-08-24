/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/



const mirror = text => {
    text = text.split('').reverse().join('').split(' ').reverse()
    const largestString = text.map(e => e.length).sort((a,z) => z-a)[0]
    const numberStars = largestString + 4
    let firstRow = ''
    let lastRow = ''
    let i = 1
    while(i <= numberStars) {
        firstRow += '*'
        lastRow += '*'
        i++
    }
    firstRow += `\n* ${text[0]} *\n`
    for(let i = 1; i < text.length; i++) {
        firstRow += `* ${text[i]} *\n` 
    }
    return firstRow + lastRow
  }
  console.log(mirror('grchwpc vqhlk lwgpxzb oswbyxi vrkce'))