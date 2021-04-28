// Write your tests here!
/*
For the Polybius square (example: polybius("message") => "23513434112251"), 
the tests that you write should test that the following is true:

1. When encoding, your output should still be a string.
2. When decoding, the number of characters in the string excluding spaces should be even. 
   Otherwise, return false.
3. Spaces should be maintained throughout.
4. Capital letters can be ignored.
5. The letters "I" and "J" share a space. 
When encoding, both letters can be converted to 42, 
6. but when decoding, both letters should somehow be shown. 
*/

const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius()", () => {
    describe("encoding", () => {
        it("it returns the message as a string", () => {
            const expected = "112131";
            const actual = polybiusModule.polybius("abc");
            expect(actual).to.equal(expected);
        });
        it("spaces are perserved", () => {
            const expected = "112131 112131";
            const actual = polybiusModule.polybius("abc abc");
            expect(actual).to.equal(expected);
        });
        it("both i and j return 42", () => {
            const expected = "42 42";
            const actual = polybiusModule.polybius("i j");
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding", () => {
        it("returns false if number of characters besides spaces are odd", () => {
            const expected = false;
            const actual = polybiusModule.polybius("1121314", false);
            expect(actual).to.equal(expected);
        });
        it("shows both i and j when 42 is seen", () => {
            const expected = "(i/j)";
            const actual = polybiusModule.polybius("42", false);
            expect(actual).to.equal(expected);
        });
        it("leaves spaces as is", () => {
            const expected = "abc abc";
            const actual = polybiusModule.polybius("112131 112131", false);
            expect(actual).to.equal(expected);
        });
      it("leaves puncuation as is", () => {
            const expected = "abc!! abc...";
            const actual = polybiusModule.polybius("112131!! 112131...", false);
            expect(actual).to.equal(expected);
        });
    })
});
