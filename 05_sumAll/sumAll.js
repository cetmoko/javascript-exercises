const sumAll = function(x, y) {
    if (((Number.isInteger(x)) && (x > 0)) && ((Number.isInteger(y)) && (y > 0))) {
        let sum = 0;
        if (x < y) {
            for (let i = x; i <= y; i++) {
                sum += i;
            }
        } else {
            for (let i = y; i <= x; i++) {
                sum += i;
            }
        }
        return sum;
    } else {
        return "ERROR";
    }
    

};

// Do not edit below this line
module.exports = sumAll;
