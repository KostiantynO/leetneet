/**
 * Design an algorithm to encode a list of strings to a string.
 * The encoded string is then sent over the network.
 * And is decoded back to the original list of strings.
 */
class Solution {
  /**
   *
   * @param {string[]} strs
   */
  static encode = strs => {
    let res = '';
    strs.forEach(str => {
      res += `${str.length}#${str}`;
    });
    return res;
  };

  /**
   *
   * @param {string} str
   */
  static decode = str => {
    const decodedWords = [];

    let i = 0;
    while (i < str.length) {
      let delimiterIndex = i;

      while (str[delimiterIndex] !== '#') {
        delimiterIndex += 1;
      }

      const wordLen = parseInt(str.slice(i, delimiterIndex), 10);

      const wordStartIndex = delimiterIndex + 1;
      const nextIndex = wordStartIndex + wordLen;
      decodedWords.push(str.slice(wordStartIndex, nextIndex));
      i = nextIndex;
    }

    return decodedWords;
  };
}

// Example1
// One possible encode method is: "lint:;code:;love:;you"
// const input1 = ['lint', 'code', 'love', 'you'];
// const output1 = Solution.decode(Solution.encode(input1));
// console.log(output1); // ["lint","code","love","you"]

// Example2
// One possible encode method is: "we:;say:;:::;yes"
const input2 = ['we', 'say', ':', 'yes'];
const output2 = Solution.decode(Solution.encode(input2));
console.log(output2); // ["we", "say", ":", "yes"]
