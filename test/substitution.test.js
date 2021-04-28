// Write your tests here!


const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("substitution()", () => {
    describe("errors", () => {
        it("returns false if alphabet is missing", () => {
            const expected = false;
            const actual = substitutionModule.substitution("Porkchop sandwiches");
            expect(actual).to.eql(expected);
        });
        it("returns false if alphabet is not 26 characters long", () => {
            const expected = false;
            const actual = substitutionModule.substitution("Porkchop sandwiches", "abcdefg");
            expect(actual).to.eql(expected);
        });
        it("returns false if alphabet has duplicate letters", () => {
            const expected = false;
            const actual = substitutionModule.substitution("Porkchop sandwiches", "ababababababababababababab");
            expect(actual).to.eql(expected);
        });
    });
    describe("encoding", () => {
        it("encode a message using given alphabet", () => {
            const expected = "123";
            const actual = substitutionModule.substitution("abc", "123456789qwertyuiopasdfghj");
            expect(actual).to.eql(expected);
        });
        it("should preserve spaces", () => {
            const expected = "123 123";
            const actual = substitutionModule.substitution("abc abc", "123456789qwertyuiopasdfghj");
            expect(actual).to.eql(expected);
        });
    });
    describe("decoding", () => {
        it("decode a message using given alphabet", () => {
            const expected = "abc";
            const actual = substitutionModule.substitution("123", "123456789qwertyuiopasdfghj", false);
            expect(actual).to.eql(expected);
        });
        it("should preserve spaces", () => {
            const expected = "abc abc";
            const actual = substitutionModule.substitution("123 123", "123456789qwertyuiopasdfghj", false);
            expect(actual).to.eql(expected);
        });
    });
});