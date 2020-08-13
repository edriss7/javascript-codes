// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
 

// Constraints:

// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    sArr=[];
    s.split("").forEach(function(char) {
        if(char.match(/[0-9a-zA-Z]/i)) {
            sArr.push(char.toLowerCase());
        }
    });
    for(let index=0; index < (sArr.length/2); index++) {
        if(sArr[index] != sArr[sArr.length - index - 1]) {
            return false;
        }
    }
    return true;
    
};