/*
DESCRIPTION:
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/




function gordon(a){
    const vowels = 'EIOU'.split('')
    a = a.split('').map(e => e.toUpperCase())
    a = a.map(e => vowels.includes(e) ? e = '*' : e === 'A' ? e = '@' : e === ' ' ? e = '!!!! ' : e).join('') + '!!!!'
    return a
  }

