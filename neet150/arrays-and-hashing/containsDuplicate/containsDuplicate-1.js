// Given an integer array `nums`,
// return `true` if any value appears at least twice in the array,
// and return `false` if every element is distinct.

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length;

// Example 1:
const one = containsDuplicate([1, 2, 3, 1]); // true
const two = containsDuplicate([1, 2, 3, 4]); // false
const three = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // true

console.log({ one, two, three });
