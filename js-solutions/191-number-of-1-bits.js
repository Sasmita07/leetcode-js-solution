/**
 * Write a function that takes the binary representation of a positive integer and returns the number of set bits
 * (A set bit refers to a bit in the binary representation of a number that has a value of 1)
 * it has (also known as the Hamming weight).
 *
 * Example 1:
 * Input: n = 11
 * Output: 3
 *
 * Explanation:
 * The input binary string 1011 has a total of three set bits.
 *
 * Example 2:
 * Input: n = 128
 * Output: 1
 * Explanation:
 * The input binary string 10000000 has a total of one set bit.
 *
 * Example 3:
 * Input: n = 2147483645
 * Output: 30
 * Explanation:
 * The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
 *
 * Constraints:
 * 1 <= n <= 231 - 1
 */

/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = (n) => {
  let count = 0;
  const binaryStr = n.toString(2);
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      count++;
    }
  }
  return count;
};

console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
