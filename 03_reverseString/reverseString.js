const reverseString = function(string) {
    result = ""

    for (let index = string.length - 1; index >= 0; index--) {
        result += string[index];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
