// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = [
    {letter: "a", code: "11"}, {letter: "b", code: "21"},
    {letter: "c", code: "31"}, {letter: "d", code: "41"},
    {letter: "e", code: "51"}, {letter: "f", code: "12"},
    {letter: "g", code: "22"}, {letter: "h", code: "32"},
    {letter: "i", code: "42"}, {letter: "j", code: "42"},
    {letter: "k", code: "52"}, {letter: "l", code: "13"},
    {letter: "m", code: "23"}, {letter: "n", code: "33"},
    {letter: "o", code: "43"}, {letter: "p", code: "53"},
    {letter: "q", code: "14"}, {letter: "r", code: "24"},
    {letter: "s", code: "34"}, {letter: "t", code: "44"},
    {letter: "u", code: "54"}, {letter: "v", code: "15"},
    {letter: "w", code: "25"}, {letter: "x", code: "35"},
    {letter: "y", code: "45"}, {letter: "z", code: "55"},
    {letter: "i/j", code: "42"}
  ]
  // helper function that returns 0 if digits in message are
  // even and 1 if they are odd
  function lengthTester(inputMessage){
    const test = inputMessage.split(" ").join("");
    return (test.length % 2);
  }

  function polybius(input, encode = true) {
    // checking for valid input
    if(!input){
      return false;
    }
    
    let message = "";
    input = input.toLowerCase();

    if(encode === true){
      for(letter in input){
        // spaces / puncuation get added to the encoded message unaltered
        if(!alphabet.some(char => char.letter === input[letter])){
          message += input[letter];
        }
        else{
          // adds the code that corresponds to the letter per the alphabet library above
          const current = alphabet.find(char => char.letter === input[letter]);
          message += (current.code);
        }
      }
    }

    else{
      for(let i = 0; i < input.length; i++){
        // testing for valid input
        if(lengthTester(input) === 1){
          return false;
        }
        // takes message 2 digits at a time to be decoded
        // according to the library
        let current = input.slice(i, i+2);
        if(current.slice(0, 1) === " "){
          // if the first digit is a space it adds a space 
          // and only moves up one digit
          message += " ";
        }
        else if(current === "42"){
          message += "(i/j)";
          i++
        }
        else{
          let letter = alphabet.find(char => char.code === current);
          message += letter.letter;
          i++; // i + 2 in order to move to the correct place in the message
        }
      }
    }
    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
