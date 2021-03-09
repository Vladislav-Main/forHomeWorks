'use strict'

//Pass validation
function isAlphaNumeric(str) {

    /* Iterating character by character to get ASCII code for each character */
    for (let i = 0, len = str.length, code = 0; i < len; ++i) {
  
      /* Collecting charCode from i index value in a string */
      code = str.charCodeAt(i);
  
      /* Validating charCode falls into anyone category */
      if (
        (code > 47 && code < 58) // numeric (0-9)
        ||
        (code > 64 && code < 91) // upper alpha (A-Z)
        ||
        (code > 96 && code < 123) // lower alpha (a-z)
      ) {
        continue;
      }
  
      /* If nothing satisfies then returning false */
      return false;
    }
  
    /* After validating all the characters and we returning success message*/
    return true;
  }
  
  
  validatePass('pass');
  validatePass('TcSf12y');
  
  function validatePass(value) {
  
    if (isAlphaNumeric(value) == true) {
      
      if (value.length <= 20 && value.length >= 6) {
        console.log('VALID');
      } else {
        console.log('NOT VALID');
      }
    } else {
      console.log('NOT VALID');
    }
  
  }