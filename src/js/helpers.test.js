import { formatAnswer } from "./helpers";

describe("Helpers", () => {
    it("Answer should end with ... when its length is > 10", () => {
        const answer = "12345678910";
        const exprectedAnswer = "1234567...";
        expect(formatAnswer(answer)).toEqual(exprectedAnswer);
    });

    it("Answer should be the same when its length is <= 10", (done) => {
        const answer = "1234567";
        expect(formatAnswer(answer)).toEqual(answer);
        done();
    });
});
