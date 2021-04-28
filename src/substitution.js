// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // helper function that both formats the new alphabet in an array
  // and checks to see if it is a valid alphabet
  function alphabetFormatter(alphabet){
    let result = [];
    for(letter in alphabet){
      if(!result.includes(alphabet[letter])){
        result.push(alphabet[letter]);
      }
    }
    if(result.length === 26){
      return result;
    }
    else{
      return false;
    }
  }

  function substitution(input, alphabet, encode = true) {
    // validating input
    if(!input || !alphabet || alphabet.length < 26){
      return false;
    }

    let message = "";
    input = input.toLowerCase();
    const alphabetArray = alphabetFormatter(alphabet);
    if(alphabetArray){
      if(encode){
        for(letter in input){
          let current = input.charCodeAt(letter);
          // if char code is not a lowercase letter the character is added to the message
          if(current < 97 || current > 122){
            message += String.fromCharCode(current);
          }
          // otherwise, the new letter in the correct position is added
          else{
            message += alphabetArray[current - 97];
          }
        }
      }
      else{
        for(letter in input){
          const current = alphabetArray.indexOf(input[letter]) + 97;
          // if current is 96 it means that the character wasn't in the given alphabet
          // therefore it must be puncuation and is added to the decoded message
          if(current === 96){
            message += input[letter];
          }
          else{
            message += String.fromCharCode(current);
          }
        }
      }
    }
    else{
      return false;
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
