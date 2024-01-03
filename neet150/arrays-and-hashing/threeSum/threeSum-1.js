/**
 * Given an integer array nums,
 * return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * Constraints:
 * • 3 <= nums.length <= 3000
 * • -10^5 <= nums[i] <= 10^5
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  const res = [];
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i += 1) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    let l = i + 1;
    let r = sorted.length - 1;
    while (l < r) {
      const sum = sorted[i] + sorted[l] + sorted[r];

      if (sum > 0) r -= 1;
      else if (sum < 0) l += 1;
      else {
        res.push([sorted[i], sorted[l], sorted[r]]);
        l += 1;
        while (sorted[l] === sorted[l - 1] && l < r) l += 1;
      }
    }
  }

  return res;
};

// Example 1:
/*
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
  Notice that the order of the output and the order of the triplets does not matter. */
const input1 = [-1, 0, 1, 2, -1, -4];
const output1 = threeSum(input1);
console.log(output1); // [[-1,-1,2], [-1,0,1]]

// Example 2:
// The only possible triplet does not sum up to 0.
const input2 = [0, 1, 1];
const output2 = threeSum(input2);
console.log(output2); // []

// Example 3:
// Explanation: The only possible triplet sums up to 0.
const input3 = [0, 0, 0];
const output3 = threeSum(input3);
console.log(output3); // [[0,0,0]]

// Example 4:
const input4 = [-2, 0, 1, 1, 2];
const output4 = threeSum(input4);
console.log(output4); // [[-2,0,2],[-2,1,1]]

// Example 5:
const input5 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
const output5 = threeSum(input5);
console.log(output5); // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
