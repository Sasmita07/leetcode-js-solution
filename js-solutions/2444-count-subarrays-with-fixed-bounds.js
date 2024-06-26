/**
 * You are given an integer array nums and two integers minK and maxK.
 * A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
 *
 * The minimum value in the subarray is equal to minK.
 * The maximum value in the subarray is equal to maxK.
 * Return the number of fixed-bound subarrays.
 *
 * A subarray is a contiguous part of an array.
 *
 * Example 1:
 * Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
 * Output: 2
 * Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
 *
 * Example 2:
 * Input: nums = [1,1,1,1], minK = 1, maxK = 1
 * Output: 10
 * Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.
 */

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (nums, minK, maxK) => {
  let totalCount = 0;
  let trackMin = -1;
  let trackMax = -1;
  let excludeIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    // Update index for numbers outside the range
    if (nums[i] < minK || nums[i] > maxK) {
      excludeIndex = i;
    }
    if (nums[i] === minK) {
      trackMin = i;
    }
    if (nums[i] === maxK) {
      trackMax = i;
    }
    totalCount += Math.max(Math.min(trackMin, trackMax) - excludeIndex, 0);
  }
  return totalCount;
};

// Example - 1
console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5));

// Example - 2
console.log(countSubarrays([1, 1, 1, 1], 1, 1));
