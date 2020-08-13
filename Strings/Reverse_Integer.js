// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ret = 0;
    while(x != 0) {
        ret *=10;
        ret += x % 10;
        x = (x - x%10) /10;
    }
    if(ret > 2**31 || ret < -(2**31)) {
        return 0;
    }
    return ret;
    
};