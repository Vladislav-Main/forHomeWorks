'use strict'

// Eggs and its' cooking time

function getCookingTime(eggsAmount) {
    let result;

    if (eggsAmount > 0 && eggsAmount <= 5) {
        result = 5;
    } else if (eggsAmount > 5) {
        result = Math.ceil(eggsAmount / 5) * 5;
    } else if (eggsAmount < 0) {
        result = "this is impossible";
    } else {
        result = 0;
    }

    return result;
}

console.log(getCookingTime(0));
console.log(getCookingTime(5));
console.log(getCookingTime(9));