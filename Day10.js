// Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be hte same as the initial array.
// Example: inputArray = ["abc", "", "aaa", "a", "zz"], output should be ["", "a", "zz", "abc", "aaa"]
// suggestion: use sort

function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))