/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const count = new Map();
  const freq = new Array(nums.length + 1);

  for (let i = nums.length - 1; i >= 0; --i) {
    const num = nums[i];
    count.set(num, 1 + (count.get(num) ?? 0));
  }

  for (const [n, c] of count) {
    freq[c] ? freq[c].push(n) : (freq[c] = [n]);
  }

  const res = [];

  for (let i = freq.length - 1; i >= 0; --i) {
    const item = freq[i];
    if (!item) continue;

    for (let j = item.length - 1; j >= 0; --j) {
      res.push(item[j]);
      if (res.length === k) return res;
    }
  }
};

// Example 1:
const input1 = [1, 1, 1, 2, 2, 2, 3];
const k1 = 2;
const test1 = topKFrequent(input1, k1);
console.log(test1); // Output: [1,2]

// Example 2:
// const input2 = [1];
// const k2 = 2;
// const test2 = topKFrequent(input2, k2);
// console.log(test2); // Output: [1]
