/*
DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/



function humanReadable (seconds) {
    let hours = 00
    let minutes = 00
    let secs = 00

  if(seconds <= 59) {
    secs += seconds
  }  else {
       hours = Math.floor((seconds / 60 )/ 60)
       minutes = Math.floor((seconds - (hours*60) * 60)/60)
       secs = seconds - ((hours * 60) * 60 + (minutes * 60))
  }
  
  if(hours < 10) {hours = 0 + String(hours)}
  if(minutes < 10) {minutes = 0 + String(minutes)}
  if(secs < 10) {secs = 0 + String(secs)}
  return `${hours}:${minutes}:${secs}`
}