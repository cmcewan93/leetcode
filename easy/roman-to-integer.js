/**
 * @param {string} s
 * @return {boolean}
 */
function validateRomanNum(romanNum) {
    if (typeof(romanNum) !== 'string') return false;

    const validChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const romanNumChars = romanNum.toString().split('');

    const isValidChar = romanNumChars.every((char) => {
        return validChars.find((val) => val === char);
    });
    return isValidChar;
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    if (!validateRomanNum(s)) {
        return new Error('Invalid Roman numeral');
    }

    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    let total = 0;;

    for(let i = 0; i < s.length; i++) { 
        const currChar = s[i];
        const nextChar = s[i + 1];

        if (romanMap[currChar] < romanMap[nextChar]) {
            total -= romanMap[currChar]
        } else {
            total += romanMap[currChar];
        }

    }

    if (total < 1 || total > 3999) {
        return new Error('Value is outside of range');
    }

    return total;
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("MCMXCIV2"))
console.log(romanToInt("MCMXCIVA"))