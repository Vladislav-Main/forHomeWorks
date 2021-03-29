'use strict';

function countCharacters(string) {
  let result = '';

  const characters = {};
  for (const char of string) {
    // eslint-disable-next-line no-prototype-builtins
    if (characters.hasOwnProperty(char)) {
      characters[char]++;
    } else {
      characters[char] = 1;
    }
  }
  result = characters;
  return console.log(result);
}

countCharacters('sparrow');
countCharacters('aabcddeffge');
