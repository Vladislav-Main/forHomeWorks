'use strict';

function tickets(person) {
  const cashbox = [];
  const ticketCost = 25;

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
        return 'NO. Vasya will not have enough money to give change.';
      }
    }
    if (
      cashbox.length > 0 &&
      person.length > 0 &&
      cashbox[cashbox.length - 1] === person[person.length - 1]
    ) {
      return 'YES';
    }
  }
}

console.log(tickets([25, 25, 50, 25]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 100]));
console.log(tickets([25, 50, 100]));
