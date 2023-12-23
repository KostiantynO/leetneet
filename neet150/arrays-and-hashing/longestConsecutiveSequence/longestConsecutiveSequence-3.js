/**
 * Given an unsorted array of integers nums,
 * return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * Constraints:
 * • 0 <= nums.length <= 10^5
 * • -10^9 <= nums[i] <= 10^9
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
  if (nums.length === 0) return 0;
  const map = new Map();

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    map.set(nums[i], 1);
  }

  let longest = 0;

  for (const n of map.keys()) {
    if (map.has(n - 1)) continue;
    let len = 1;
    while (map.has(n + len)) len += 1;
    longest = Math.max(len, longest);
  }

  return longest;
};

// Example 1:
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
const input1 = [100, 4, 200, 1, 3, 2];
const output1 = longestConsecutive(input1);
console.log(output1); // 4

// Example 2:
const input2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const output2 = longestConsecutive(input2);
console.log(output2); // 9

// Example 3:
const input3 = [0];
const output3 = longestConsecutive(input3);
console.log(output3); // 1

// Example 4:
const input4 = [0, 0];
const output4 = longestConsecutive(input4);
console.log(output4); // 1

// Example 5:
const input5 = [];
const output5 = longestConsecutive(input5);
console.log(output5); // 0
