/**
 * @param {number} x
 * @return {boolean}
*/
const isPalindrome = function(x) {
    // if negative then it is not a palindrome.
    if (x < 0) return false;

    // The integer becomes a string and each char an indice so 121 becomes [1,2,1]
    const numbers = x.toString();
    let j = numbers.length;

    // We only need to iterate halfway through the array
    for(let i = 0; i < Math.floor(numbers.length/2); i++) {
        j--;
        if (numbers[i] !== numbers[j]) {
            return false;
        };
    }

    return true;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(90))