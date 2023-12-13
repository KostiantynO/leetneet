/**
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();
  const res = [];

  nums.forEach(n => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });

  const store = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0, lastIndex = store.length; i < lastIndex && i < k; i += 1) {
    res.push(store[i][0]);
  }

  return res;
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
