/**
 * @param {string[]} strs
 * @return {string[][]}
 * O(m * n)
 */
const groupAnagrams = strs => {
  // mapping charCount to list of Anagrams
  const res = {};
  const a = 'a'.charCodeAt(0);

  let i = 0;
  while (i < strs.length) {
    const string = strs[i];
    const count = new Array(26).fill(0);

    let j = 0;
    while (j < string.length) {
      count[string[j].charCodeAt(0) - a] += 1;
      j += 1;
    }

    res[count] ??= [];
    res[count].push(string);
    i += 1;
  }

  return Object.values(res);
};

/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original letters exactly once.
 */

// Example 1:

// Input:
const input1 = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const output1 = groupAnagrams(input1); // [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];
console.log(output1);

// Example 2:
const input2 = [''];
const output2 = groupAnagrams(input2); // [['']];
console.log(output2);

// Example 3:
const input3 = ['a'];
const output3 = groupAnagrams(input3); // [['a']];
console.log(output3);

// Constraints:

// 1 <= strs.length <= 10**4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
