// You're given a string that consists of only lowercase English letters. If vowels are given a value of 1 and consonants are given a value of 2, return the sum of all the letters in the input string

function countVowelConsonant(str) {
  // write code here
  const lettersArr = str.split("");
  return lettersArr.reduce((acc, currVal) => {
      if (currVal === "a" || currVal === "e" || currVal === "i" || currVal === "o" || currVal === "u") {
          return acc += 1;
      } else {
          return acc += 2;
      }
  }, 0);
}