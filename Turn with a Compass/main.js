/*
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
*/



function direction(facing, turn){
    let newDirection = 0;
    const directionsArray = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW',
    'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW',
    'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW',
    'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
   
    function countsDirection () { 
         if (directionsArray.includes(facing) && -1080 <= turn <= 1080) {
       for (let i = 0; i <= Math.abs(turn/45); i++) {
         newDirection = i;
       }  
    }
    }
  countsDirection(); 
  
  return turn < 0 ? directionsArray[directionsArray.lastIndexOf(facing) - newDirection] : directionsArray[directionsArray.indexOf(facing) + newDirection];  
 }

