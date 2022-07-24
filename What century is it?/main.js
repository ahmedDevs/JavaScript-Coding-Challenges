/*
DESCRIPTION:
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

//prep
// string number  representing the year
// the century of the string number given 
// ex 1878 --- 19th
// pseudo code

// if the year has four digits, concat the 1st two digits, convert to number and add 1

// if the year has 3 digits, just add one to the first digit 
// if the year has 2 or less digits then return '1st'




function whatCentury(year) {
    const numberOfDigits = year.length
    if(numberOfDigits === 4) {
     const firstTwoDigits = year.split('').slice(0,2).join('')
     let century = (Number(firstTwoDigits) + 1).toString()
     if(year.split('').slice(1).join('') == 00) { 
        century = firstTwoDigits
    }
     const lastItemCenturyArr = century.split('')[century.length - 1]
     return Number(century) >= 11  && Number(century) <= 13 
     ? century +  'th' : lastItemCenturyArr == 1 
     ? century + 'st' : lastItemCenturyArr == 2 
     ? century + 'nd' : lastItemCenturyArr == 3 
     ? century + 'rd' : century + 'th'
    }
}