// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numObj = {};
    for(let index = 0; index < nums.length; index++) {
        if(!numObj[nums[index]]) {
            numObj[nums[index]] = [index];
        } else {
            numObj[nums[index]].push(index);
        }
    }
    for(num of Object.keys(numObj)) {
        console.log(numObj[num].length)
        if( (target - num) == num && numObj[num].length > 1)  {
            return [numObj[num][0], numObj[num][1]];
        }
        if (numObj[target - num]) {
            return [numObj[num][0], numObj[target - num][0]];
        }
    }
    
};