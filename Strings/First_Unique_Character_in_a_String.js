// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let sObj = {};
    let sArr = s.split("");
    sArr.forEach(function(char) {
        if(sObj[char]) {
            sObj[char] = sObj[char] + 1;
        } else {
             sObj[char] = 1;
        }
    })
    for(let index = 0; index < sArr.length; index++) {
        if(sObj[sArr[index]] == 1) {
            return index;
        }
    }
    return -1;
    
};