// Return the century the year is from (1 to 100 is first century, 101 to 200 is 2nd etc...)
function centuryFromYear(num) {
  //  write code here.
  return Number.isInteger(num / 100) ? Math.floor(num / 100) : Math.floor(num / 100) + 1
}
