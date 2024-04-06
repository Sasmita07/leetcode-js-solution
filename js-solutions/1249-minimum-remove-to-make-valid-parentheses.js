/**
 * Given a string s of '(' , ')' and lowercase English characters.
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 *
 * Formally, a parentheses string is valid if and only if:
 * It is the empty string, contains only lowercase characters, or
 * It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * It can be written as (A), where A is a valid string.
 *
 * Example 1:
 * Input: s = "lee(t(c)o)de)"
 * Output: "lee(t(c)o)de"
 * Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
 *
 * Example 2:
 * Input: s = "a)b(c)d"
 * Output: "ab(c)d"
 *
 * Example 3:
 * Input: s = "))(("
 * Output: ""
 * Explanation: An empty string is also valid.
 */

const minRemoveToMakeValid = (s) => {
  let result = '';
  let leftBracket = 0;
  let rightBracket = 0;
  for (const char of s) {
    if (char === '(') {
      leftBracket++;
    } else if (char === ')' && rightBracket < leftBracket) {
      rightBracket++;
    }
  }
  let matchedLeftCount = 0;

  for (const char of s) {
    if (char === '(') {
      if (matchedLeftCount < rightBracket) {
        matchedLeftCount++;
        result += char;
      }
    } else if (char === ')') {
      if (matchedLeftCount !== 0 && rightBracket !== 0) {
        matchedLeftCount--;
        rightBracket--;
        result += char;
      }
    } else {
      result += char;
    }
  }

  return result;
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)'));

console.log(minRemoveToMakeValid('a)b(c)d'));

console.log(minRemoveToMakeValid('))(('));

console.log(minRemoveToMakeValid('())()((('));
