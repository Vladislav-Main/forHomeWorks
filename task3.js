'use strict';

// single digit

function getSingleDigit(arg) {
  let result;
  result = 0;
  const x = String(arg);

  for (let i = 0; i < x.length; i++) {
    console.log(`${result} + ${Number(x[i])} = ${result + Number(x[i])}`);
    result = result + Number(x[i]);
  }

  const result2 = String(result);

  result = 0;
  for (let j = 0; j < result2.length; j++) {
    console.log(`${result} + ${Number(result2[j])} = ${result + Number(result2[j])}`);
    result = result + Number(result2[j]);
  }

  return result;
}

console.log(getSingleDigit(942));
console.log(getSingleDigit(123456789));
