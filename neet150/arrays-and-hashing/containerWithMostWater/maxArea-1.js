/**
 * You are given an integer array height of length n.
 * There are n vertical lines drawn
 * such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Constraints:
 * • n == height.length
 * • 2 <= n <= 105
 * • 0 <= height[i] <= 104
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let res = 0;

  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    if (height[l] <= height[r]) {
      res = Math.max((r - l) * height[l], res);
      l += 1;
    } else {
      res = Math.max((r - l) * height[r], res);
      r -= 1;
    }
  }

  return res;
};

/**
 *  ^ height
 * 8|_
 * 7|_    |_ _ _ _ _ _ _ |_ _ _ < water level
 * 6|_    |              |     |
 * 5|_    |  |           |     |
 * 4|_    |  |     |     |     |
 * 3|_    |  |     |  |  |     |
 * 2|_    |  |     |  |  |  |  |
 * 1|_    |  |  |  |  |  |  |  |
 * 0|__|__|__|__|__|__|__|__|__|__> n
 *     0  1  2  3  4  5  6  7  8
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]
 * In this case, the max area of water (blue section) the container can contain is 49.
 */
const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const output1 = maxArea(input1);
console.log(output1); // 49

// Example 2:
const input2 = [1, 1];
const output2 = maxArea(input2);
console.log(output2); // 1

// Example 3:
const input3 = [1, 2, 1];
const output3 = maxArea(input3);
console.log(output3); // 2

// Example 4:
const input4 = [2, 3, 4, 5, 18, 17, 6];
const output4 = maxArea(input4);
console.log(output4); // 17
