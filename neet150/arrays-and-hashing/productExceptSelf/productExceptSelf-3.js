/**
 * Given an integer array nums, return an array answer
 * such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  const { length } = nums;
  const res = new Array(length);
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < length; i += 1) {
    res[i] ??= 1;
    res[i] *= prefix;
    prefix *= nums[i];
    const reverseIndex = length - 1 - i;
    res[reverseIndex] ??= 1;
    res[reverseIndex] *= postfix;
    postfix *= nums[reverseIndex];
  }

  return res;
};

// Example 1:
const input1 = [1, 2, 3, 4];
const output1 = productExceptSelf(input1);
console.log(output1); // Output: [24,12,8,6]

// Example 2:
const input2 = [-1, 1, 0, -3, 3];
const output2 = productExceptSelf(input2);
console.log(output2); // Output: [0,0,9,0,0]

// Example 3:
const input3 = [0, 0];
const output3 = productExceptSelf(input3);
console.log(output3); // Output: [0,0]

// Example 4:
const input4 = [2, 3, 0, 0];
const output4 = productExceptSelf(input4);
console.log(output4); // Output: [0,0,0,0]
