/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
//TODO  Use a loop to consider every possible integer from 1 to n and check if that integer exists in the array or not.
//*  Pseudocode from Qualified Quiz was:
/* 
for i = 1 to n
  if n is not in numbers
    return i
 */

//* O(n^2) version
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

/**
 * Use an iterative strategy for finding the missing number in an array
 */
//* A program is called recursive when an entity calls itself. A program is call iterative when there is a loop (or repetition).
//TODO Find the expected sum of all integers from 1 to n. Then find the actual sum of the numbers in the array. The difference is the missing number.
//* Pseudocode from Qualified Quiz was:
/* 
expectSum = find the sum of all integers from 1 to n
actualSum = find the sum of all numbers in the array
return expectedSum - actualSum
*/

//* O(n) version
function missingNumberSum(numbers) {
  const n = numbers.length + 1;
  let total = (n * (n + 1)) / 2;

  numbers.forEach((number) => {
    total -= number;
  });
  return total;
}

//* more literal version that follows prompt's pseudocode:
/* 
function missingNumberSum(numbers) {
  const n = numbers.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  numbers.forEach((number) => {
    actualSum += number;
  });
  return expectedSum - actualSum;
}
*/

// Specifically asks not to use recursion but this is a past example of finding the sum:
/* 
function sum(n) {
  // Check the base case
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
}
 */

module.exports = { missingNumberBruteForce, missingNumberSum };
