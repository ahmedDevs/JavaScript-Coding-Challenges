/*
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
 minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
 in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
 deserunt mollit anim id est laborum";
*/

// map all the words in magazine
// loop through  the words of ransom note
// every word in ransom note has to be in the magazine map

function decipheRansomNote(note) {
    const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    const magazineMap = {}
    const ransomeNoteMap = {}
    for(let word of magazine.split(' ')) {
        magazineMap[word] = magazineMap[word] + 1 || 1
    }
    for(let word of note.split(' ')) {
        ransomeNoteMap[word] = ransomeNoteMap[word] + 1 || 1
    }
    for(key in ransomeNoteMap) {
        if(!magazineMap.hasOwnProperty(key)) {
            return false 
        }  else if(magazineMap[key] < ransomeNoteMap[key]) {
            return false
        }
    }
    return true 
}

console.log(decipheRansomNote("sit ad est sint"), true)
console.log(decipheRansomNote("sit ad est love"), false)
console.log(decipheRansomNote("sit ad est sint in in"), true)
console.log(decipheRansomNote("sit ad est sint in in in in"), false)



