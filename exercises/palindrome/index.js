// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//The issue with this solution is that it does double work by comparing the last to the first additionally to first to last. //
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1]
  })
}

console.log(palindrome('abba')) //?

module.exports = palindrome;

// function palindrome(str) {
//   const rev = str
//     .split('')
//     .reverse()
//     .join('');
//   return str === rev;
// }
