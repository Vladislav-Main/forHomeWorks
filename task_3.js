'use strict';

function tickets(person) {
  const cashbox = [];
  const ticketCost = 25;
  let result = '';

  for (let i = 0; i < person.length; i++) {
    if (person[i] === ticketCost) {
      cashbox.push(person[i]);
    } else if (person[i] === 2 * ticketCost) {
      cashbox.shift();
      cashbox.push(person[i]);
    } else if (person[i] === 4 * ticketCost) {
      if (cashbox.reduce((sum, current) => sum + current) >= 3 * ticketCost) {
        cashbox.reduce((sum, current) => sum + current);
        cashbox.shift();
        cashbox.push(person[i]);
      } else {
        result = 'NO';
      }
    }
    if (
      cashbox.length > 0 &&
      person.length > 0 &&
      cashbox[cashbox.length - 1] === person[person.length - 1]
    ) {
      result = 'YES';
    }
  }

  return console.log(result);
}

tickets([25, 25, 50, 25]);
tickets([25, 100]);
tickets([25, 25, 50, 100]);
tickets([25, 50, 100]);
