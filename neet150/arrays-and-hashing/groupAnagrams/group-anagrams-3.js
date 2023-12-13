const groupWords = (words, map) => {
  for (const original of words) {
    /* Time O(N) */
    const hash = getHash(original); /* Time O(K) | Space O(1) */
    const values = map.get(hash) || [];

    values.push(original); /*           | Space O(N) */
    map.set(hash, values); /*           | Space O(N * K) */
  }
};

const getCode = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

const buildHash = frequency => frequency.toString();

const getHash = word => {
  const frequency = new Array(26).fill(0);

  for (const char of word) {
    /* Time O(K) */
    const charCode = getCode(char); /* Time O(1) | Space (1) */

    frequency[charCode]++; /*           | Space O(1) */
  }

  return buildHash(frequency);
};

/**
 * Hash Map
 * Time O(N * K) | Space O(N * K)
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} words
 * @return {string[][]}
 */
const groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];

  groupWords(words, map); /* Time O(N * K) | Space O(N * K) */


  return [...map.values()]; /* Time O(N)     | Space O(N * K) */
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
// const input2 = [''];
// const output2 = groupAnagrams(input2); // [['']];
// console.log(output2);

// Example 3:
// const input3 = ['a'];
// const output3 = groupAnagrams(input3); // [['a']];
// console.log(output3);

// Constraints:

// 1 <= strs.length <= 10**4
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
