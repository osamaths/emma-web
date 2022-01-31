import { render, screen } from "@testing-library/react";
import Answer from "..";

describe("Answer", () => {
    let answer = {
        _id: "123",
        createdAt: new Date(),
        answers: [
            { _id: 1, answer: "test@123", question: { question: "Question?", type: "free" } },
            { _id: 2, answer: "test@123456", question: { question: "Question?", type: "free" } },
        ],
    };

    it("Answer should have date", () => {
        render(<Answer ansDoc={answer} />);
        const linkElement = screen.queryByTestId(`answer-date-${answer._id}`);
        expect(linkElement).toBeInTheDocument();
    });

    it("Answer should pass format cases", () => {
        render(<Answer ansDoc={answer} />);
        answer.answers.forEach((ans) => {
            const linkElement = screen.queryByTestId(`sub-answer-${ans._id}`);
            const allText = linkElement.textContent;
            const justAns = allText.replace(ans.question.question, "");
            const lookingFor = justAns.length >= 3 ? justAns.slice(justAns.length - 3, justAns.length) : justAns;

            if (ans.answer.length > 10) expect(lookingFor).toEqual("...");
            else expect(lookingFor).not.toEqual("...");
            expect(linkElement).toBeInTheDocument();
        });
    });
});
