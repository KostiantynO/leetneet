/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const a = {};
  const b = {};

  Array.from(s).forEach(letter => {
    a[letter] ??= 0;
    a[letter] += 1;
  });

  Array.from(t).forEach(letter => {
    b[letter] ??= 0;
    b[letter] += 1;
  });

  return !Object.keys(a).some(key => a[key] !== b[key]);
};

// An Anagram is a word or phrase formed by
// rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

const test = {
  one: isAnagram('anagram', 'nagaram') === true ? '✅ pass' : '🚩fail',
  two: isAnagram('rat', 'car') === false ? '✅ pass' : '🚩fail',
  three: isAnagram('aacc', 'ccac') === false ? '✅ pass' : '🚩fail',
};

console.log(test);

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters?
// How would you adapt your solution to such a case?
