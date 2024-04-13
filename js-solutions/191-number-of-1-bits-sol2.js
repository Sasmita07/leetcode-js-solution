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
// Solution - 2
const hammingWeightSol2 = (n) => {
  let count = 0;
  while (n !== 0) {
    // Apply bitwise AND between n and n-1, which flips the least significant 1 bit of n to 0
    n &= n - 1;
    count++;
  }
  return count;
};
console.log(hammingWeightSol2(11));
console.log(hammingWeightSol2(128));
console.log(hammingWeightSol2(2147483645));
