// Write your tests here!
/*
For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), 
the tests that you write should test that the following is true:

1. It returns false if the shift value is equal to 0
2. less than -25
3. greater than 25 
4. or not present.
5. It ignores capital letters.
6. When encoding, it handles shifts that go past the end of the alphabet. 
7. It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
*/

const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesar()", () => {
    describe("errors", () => {
        it("It returns false if shift value is 0", () => {
            const expected = false;
            const actual = caesarModule.caesar("testing", 0);
            expect(actual).to.eql(expected);
        });
        it("It returns false if shift value is over 25", () => {
            const expected = false;
            const actual = caesarModule.caesar("testing", 26);
            expect(actual).to.eql(expected);
        });
        it("It returns false if shift value is less than -25", () => {
            const expected = false;
            const actual = caesarModule.caesar("testing", -26);
            expect(actual).to.eql(expected);
        });
        it("It returns false if shift value is not present", () => {
            const expected = false;
            const actual = caesarModule.caesar("testing");
            expect(actual).to.eql(expected);
        });
    });
    describe("encoding", () => {
        it("It ignores casing", () => {
            const expected = "uftujoh";
            const actual = caesarModule.caesar("TeStInG", 1);
            expect(actual).to.eql(expected);
        });
        it("It handles shifts that go past the end of the alphabet", () => {
            const expected = "afcsb";
            const actual = caesarModule.caesar("zebra", 1);
            expect(actual).to.eql(expected);
        });
        it("It maintains spacing and punctuation", () => {
            const expected = "j mpwf... cfbo";
            const actual = caesarModule.caesar("I love... bean", 1);
            expect(actual).to.eql(expected);
        });
    });
    
    describe("decoding", () => {
        it("It decodes messages when third parameter is set to false", () => {
            const expected = "i love... bean";
            const actual = caesarModule.caesar("h knud... adzm", -1, false);
            expect(actual).to.eql(expected);
        });
        it("it maintains spaces", () => {
            const expected = "i love... bean";
            const actual = caesarModule.caesar("h knud... adzm", -1, false);
            expect(actual).to.eql(expected);
        });
        it("it ignores capitals", () => {
            const expected = "i love... bean";
            const actual = caesarModule.caesar("H kNud... adZm", -1, false);
            expect(actual).to.eql(expected);
        });
    });
});