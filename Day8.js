//Write a function that checks if an input string represents a valid time

function validTime(str) {
  //  write code here.
  // split our string
  // parse integers for the left side and right side
  // if left side is 00 to 24, it's okay
  // if right side os 00 to 59, it's okay
  const timeArr = str.split(":");
  console.log()
  if (parseInt(timeArr[0]) > 24 || parseInt(timeArr[0]) < 0) {
      return false;
  } else if (parseInt(timeArr[1]) < 0 || parseInt(timeArr[1]) > 59) {
      return false;
  } 
  return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));