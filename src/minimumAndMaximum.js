/* 
* Find maximum and minimum
? Given an unsorted array of numbers, find the maximum and minimum numbers in the array. For example, given the array [8, 3, 7, 9, 4, 1, 2, 5, 6] your function should return an output array with two values like this: [1, 9], where the first element is the minimum and the second element is the maximum. If the given array is empty return the empty array [].

! Keep in mind that numbers in the array may also be negative.

TODO Implement two different algorithms to solve this problem.
/*

/*
 * an algorithm that sorts the array then returns the minimum and maximum
 */
// TODO Start by sorting the array using the built-in array sort() method then simply return the first and last elements of the array.
//! .sort() only works for this problem because it is assumed that the input values will not be greater than a single digit (-9 through 9). Note that sort() compares the string values of array elements, so the results will not be in numerical order. E.g. [5,0,-3,510000,6].sort() outputs [ -3, 0, 5, 510000, 6 ]. The sort() method will work to pass the test cases, since the numbers in the tests range within -9 and 9.

//* Pseudocode from Qualified Quiz was:
/* 
sort the numbers array
return [numbers[0], numbers[numbers.length - 1]]
*/

//* O(n log n) version
function minimumAndMaximumSort(numbers) {
  const minMax = [];
  if (numbers.length >= 1) {
    numbers.sort((a, b) => a - b);

    minMax.push(numbers[0]);
    minMax.push(numbers[numbers.length - 1]);
  }
  return minMax;
}

/*
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
// Iterate over the entire array and track the smallest (minimum) and largest (maximum) numbers found so far.

//* Pseudocode from Qualified Quiz was:
/* 
largest= negative infinity
smallest = positive infinity
for each e in numbers do
  if e is larger than largest
    largest = e
  if e is smaller than smallest
    smallest = e
return [smallest, largest]
*/

//* O(n) version
function minimumAndMaximumIterate(numbers) {
  if (numbers.length >= 1) {
    let min = numbers[0];
    let max = numbers[0];
    numbers.forEach((number) => {
      if (number < min) {
        min = number;
      }
      if (number > max) {
        max = number;
      }
    });
    return [min, max];
  }
  return [];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
