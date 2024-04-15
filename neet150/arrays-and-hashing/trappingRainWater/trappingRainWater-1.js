/**
 * Given n non-negative integers
 * representing an elevation map
 * where the width of each bar is 1,
 * compute how much water it can trap after raining.
 *
 * Constraints:
 * • n == height.length
 * • 1 <= n <= 2 * 10^4
 * • 0 <= height[i] <= 10^5
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  const len = height.length;
  if (len === 0 || len === 1 || len === 2) return 0;

  let l = 0;
  let r = len - 1;
  let leftMax = height[l];
  let rightMax = height[r];

  let res = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l += 1;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r -= 1;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
    }
  }

  return res;
};

/**
 * The above elevation map (black section)
 * is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped.
 */
const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const output1 = trap(input1);
console.log(output1); // 6

// Example 2:
// const input2 = [4, 2, 0, 3, 2, 5];
// const output2 = trap(input2);
// console.log(output2); // 9
