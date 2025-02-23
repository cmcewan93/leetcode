/**
 * @param {string[]} strs
 * @return {string}
*/
const longestCommonPrefix = function(strs) {
    // common prefix
    let commonPrefix = '';
    // common character 
    let currCommonChar = ''

    // Check if an empty string is passed
    if (!strs[0][0]) return commonPrefix;

    for(let i = 0; i < strs[0].length; i++) {
        currCommonChar = strs[0][i];
        for(let j = 0; j < strs.length; j++) {
            const string = strs[j]
            if (!string || string[i] !== currCommonChar) return commonPrefix;
        }
        commonPrefix += strs[0][i];
    }

    return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["a"]));