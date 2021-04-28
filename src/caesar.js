// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // exits the function if any values are out of bounds
    if(!input || !shift || shift < -25 || shift === 0 || shift > 25){
      return false;
    }
    //reverses the shift when decoding is desired
    if(encode === false){
      shift *= -1
    }

    let message = "";
    input = input.toLowerCase();

    for(letter in input){
      let current = input.charCodeAt(letter)
      if(current < 97 || current > 122){
        message += String.fromCharCode(current); // if char code is not a lowercase letter the shift is ignored
      }
      else if(current + shift > 122) {
        current = (current + shift) - 26 // math to making the shift wrap the alphabet going forwards
        message += String.fromCharCode(current);
      }
      else if(current + shift < 97){
        current = (current + shift) + 26 // math to making the shift wrap the alphabet going backwards
        message += String.fromCharCode(current);
      }
      else{
        message += String.fromCharCode(current + shift);
      }
    }
    
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
