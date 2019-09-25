// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

anagrams("help", "pleh") //?

module.exports = anagrams;


/* edge case if you only iterate over one charMap you might be missing stuff from the other one */

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//   return true
// }
// //helper function to build charMaps for all pararms
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap + 1 || 1
//   }
//   return charMap
// }

//workable solution, but if/else statement isn't necessary
// function anagrams(stringA, stringB) {
//   if (cleanString(stringA) === cleanString(stringB)) {
//     return true
//   } else {
//     return false
//   }
// }

// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }
