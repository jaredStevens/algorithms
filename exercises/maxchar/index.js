// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* other commonly asked questions that use this technique
  1) What is the most common character in the string.
  2) Does string A have the same characters as string B? (Is it an anagram)
  3) Does the given string have any repeated characters in it?
*/

//use toLowerCase() on param to make results non-case sensitive
function maxChar(str) {
  str = str.toLowerCase()
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar
}
maxChar( 'hEEEllllo')
module.exports = maxChar;
