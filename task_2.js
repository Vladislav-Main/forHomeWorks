'use struct';

function cakes(recipe, available) {
  const arr = [];

  for (const [key, value] of Object.entries(recipe)) {
    if (key in available) {
      const num = Math.floor(available[key] / value);
      arr.push(num);
    } else {
      return 0;
    }
  }
  if (arr.length > 0) {
    let [min] = arr;
    for (let i = 0; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }
  return 0;
}

console.log(cakes({ sugar: 30, eggs: 1 }, { sugar: 1200, eggs: 5, milk: 200 }));
console.log(
  cakes(
    { flour: 500, sugar: 30, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, eggs: 5, milk: 2000 }
  )
);
