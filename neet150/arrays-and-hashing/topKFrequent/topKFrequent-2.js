/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();
  const bucket = [];
  const result = [];

  for (let i = nums.length - 1; i >= 0; --i) {
    const num = nums[i];
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const [num, freq] of map) {
    bucket[freq] = (bucket[freq] ?? new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; --i) {
    const item = bucket[i];
    if (item) result.push(...item);
    if (result.length === k) break;
  }

  return result;
};

// Example 1:
const input1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const test1 = topKFrequent(input1, k1);
console.log(test1); // Output: [1,2]

// Example 2:
// const input2 = [1];
// const k2 = 2;
// const test2 = topKFrequent(input2, k2);
// console.log(test2); // Output: [1]
