/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    // A minimum length of 2 is required for valid parentheses
    if (s.length < 2) return false;

    const bracketMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    // A stack is Last in first out
    // We push all the opening brackets into the stack
    const stack = [];
    for(const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (bracketMap[stack.pop()] !== char) return false;
        }
    }

    return stack.length === 0;
}

console.log(isValid("([])"))
console.log(isValid("({[{])"))
console.log(isValid("(]"))
console.log(isValid("((({})"))