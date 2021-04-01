"use strict";

function checkNumber(value) {
  function isPrime(n) {
    if (n > 1 && n % n === 0 && n % 1 === 0) {
      return true;
    }
    return false;
  }

  function isEven(n) {
    if (n % 2 === 0) {
      return true;
    }
    return false;
  }

  function isMultiple(n) {
    if (n % 10 === 0) {
      return true;
    }
    return false;
  }

  const arr = [isPrime(value), isEven(value), isMultiple(value)];
  console.log(arr);
}

checkNumber(7);
checkNumber(-10);
