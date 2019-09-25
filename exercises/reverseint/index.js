// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reversed) * Math.sign(n)
}

reverseInt(-43) //?

module.exports = reverseInt;

//first solution -- use Math.sign() to get rid of unneccesary "if statement"

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   if (n < 0) {
//     return parseInt(reversed) * -1
//   }
//   return parseInt(reversed)
// }

//Best solution, most pleasing to the eye

// function reverseInt(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//   return parseInt(reversed) * Math.sign(n)
//}

//One liner but not pretty

// function reverseInt(n) {
//   return parseInt(
//     n
//       .toString()
//       .split('')
//       .reverse()
//       .join('')
//   ) * Math.sign(n)
// }
