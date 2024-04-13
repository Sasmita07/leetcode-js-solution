/**
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
 *
 * Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * Output: 6
 * Explanation: The maximal rectangle is shown in the above picture.
 *
 * Example 2:
 * Input: matrix = [["0"]]
 * Output: 0
 *
 * Example 3:
 * Input: matrix = [["1"]]
 * Output: 1
 *
 * Constraints:
 * rows == matrix.length
 * cols == matrix[i].length
 * 1 <= row, cols <= 200
 * matrix[i][j] is '0' or '1'.
 *
 */

// Helper function to calculate the area of the largest rectangle in a histogram
const largestRectangleArea = (heights) => {
  let result = 0;
  const n = heights.length;
  const indexStack = [];
  const left = Array(n).fill(-1);
  const right = Array(n).fill(n);

  // Calculate the indices of the next smaller element on the left and right
  for (let i = 0; i < n; ++i) {
    while (
      indexStack.length &&
      heights[indexStack[indexStack.length - 1]] >= heights[i]
    ) {
      right[indexStack[indexStack.length - 1]] = i; // Update right index
      indexStack.pop();
    }
    left[i] = indexStack.length === 0 ? -1 : indexStack[indexStack.length - 1]; // Update left index
    indexStack.push(i);
  }

  // Compute the area for each bar considering the range [left, right]
  for (let i = 0; i < n; ++i) {
    const rectangleArea = heights[i] * (right[i] - left[i] - 1);
    result = Math.max(result, rectangleArea);
  }

  return result;
};

// Function to compute the maximal rectangle area in a 2D binary matrix
const maximalRectangle = (matrix) => {
  let maxArea = 0;
  if (matrix.length === 0 || matrix[0].length === 0) return 0; // handle empty matrix input

  const numColumns = matrix[0].length;
  const heights = Array(numColumns).fill(0);

  // Process each row of the matrix
  for (const row of matrix) {
    // Update the heights of the histogram representation
    for (let j = 0; j < numColumns; j++) {
      if (row[j] === '1') {
        heights[j]++; // Increase height for continuous '1's
      } else {
        heights[j] = 0; // Reset height if '0' is encountered
      }
    }
    // Get the max rectangle area in histogram and update maxArea
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
};

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);

console.log(maximalRectangle([['1']]));
console.log(maximalRectangle([['0']]));
console.log(maximalRectangle([['1', '1']]));
console.log(maximalRectangle([['1', '0']]));
