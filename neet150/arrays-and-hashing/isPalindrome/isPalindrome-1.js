/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const alphanumeric = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return alphanumeric === alphanumeric.split('').reverse().join('');
};

// Example 1:
// Explanation: "amanaplanacanalpanama" is a palindrome.
const input1 = 'A man, a plan, a canal: Panama';
const output1 = isPalindrome(input1);
console.log(output1); // true

// Example 2:
// Explanation: "raceacar" is not a palindrome.
const input2 = 'race a car';
const output2 = isPalindrome(input2);
console.log(output2); // false

// Example 3:
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
const input3 = ' ';
const output3 = isPalindrome(input3);
console.log(output3); // true

// Example 4:
const input4 = 'ab_a';
const output4 = isPalindrome(input4);
console.log(output4); // true
