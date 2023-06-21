import isEqual from 'lodash/isEqual';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const prevMap = {};

  console.log(prevMap);

  let i = 0;
  while (i < nums.length) {
    const n = nums[i];
    const diff = target - n;

    if (diff in prevMap) {
      return [prevMap[diff], i];
    }

    prevMap[n] = i;

    i += 1;
  }

  return undefined;
};

const args = [
  { nums: [2, 7, 11, 5, 15, 4], target: 9, expected: [0, 1] },
  // { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  // { nums: [3, 3], target: 6, expected: [0, 1] },
];

const check = (actual, i) => (isEqual(actual, args[i].expected) ? '✅' : '🚩');

const test = args.map(({ nums, target }, i) => check(twoSum(nums, target), i));

console.log(test);

/*
  Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  You can return the answer in any order.
*/
