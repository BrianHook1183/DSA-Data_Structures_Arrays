/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let match = true;
    for (let j = 1; j <= numbers.length + 1; j++) {
      match = numbers.indexOf(j);
      if (match === -1) {
        return j;
      }
    }
  }
}
/* 
var missing = [];
var a = [5];
var count = 5;
var found = false;

for (var j = 1; j < count; j++) {
  found = false;
  for (var i = 0; i <= a.length; i++) {
    if (a[i] == j) {
      found = true;
      break;
    }
  }
  if (!found) {
    missing.push(j);
  }
}
alert(JSON.stringify(missing));
 */

/**
 * Use an iterative  strategy for finding the missing number in an array
 */

//TODO Find the expected sum of all integers from 1 to n. Then find the actual sum of the numbers in the array. The difference is the missing number.
function missingNumberSum(numbers) {
  const n = numbers.length;
  let total = ((n + 2) * (n + 1)) / 2;
  // let total = (n*(n+1)/2);
  numbers.map((number) => {
    total -= number;
  });
  return total;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
