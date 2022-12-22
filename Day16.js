// Transform a given sentence into a new one with dashes between each two consecutive letters

function insertDashes(str) {
  // write code here
  // split string into an arr of words
  // map over the array and replace all the "" with dashes (this will add dashes at the beginning and end of the string)
      // while still in the map, slice the string to not include the first and last dashes
  // join the array with spaces
  return str.split(' ').map(word => word.replaceAll('','-').slice(1,-1)).join(' ')
}

console.log(insertDashes("aba caba"))