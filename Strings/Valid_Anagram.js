/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    sObj = {}
    s.split("").forEach(function(char) {
        if(sObj[char]) {
            sObj[char] = sObj[char]+1;
        } else{
            sObj[char] = 1;
        }
    });
    t.split("").forEach(function(char){
        if(sObj[char]) {
            if(sObj[char] != 0) {
                sObj[char] = sObj[char] - 1;
            }
        } else {
            sObj[char] = -1;
        }
        if (sObj[char] == 0) {
            delete sObj[char];
            console.log(char);
            console.log(sObj);
        }
    });
    if(Object.keys(sObj).length > 0) {
        return false;
    } else {
        return true;
    }
};