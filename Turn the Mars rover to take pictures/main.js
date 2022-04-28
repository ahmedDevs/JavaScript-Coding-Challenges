/*
Mars rover is on an important mission to take pictures of Mars.

In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

For example:

if it asks turn N E the expected result would be right
if it asks turn N W the expected result would be left
Mars rover can only make one move at a time and it will only request positions that require a single move.

Can you write an algorithm that tells if it should move left or right?
*/



function turn(current, target) {
    if (current.toUpperCase() === 'N' && target.toUpperCase() === 'E') {
      return 'right';
    }  else if(current.toUpperCase() === 'S' && target.toUpperCase() === 'W') {
      return 'right';
    }  else if(current.toUpperCase() === 'E' && target.toUpperCase() === 'S') {
      return 'right';
    }  else if(current.toUpperCase() === 'W' && target.toUpperCase() === 'N') {
      return 'right';
    }  else {
      return 'left';
    }
  }