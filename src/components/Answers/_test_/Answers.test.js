import { render, screen } from "@testing-library/react";
import Answers from "..";
import { GET_REQUEST } from "../../../js/requests";

describe("Answers Screen", () => {
    let answers = [];

    beforeAll(async () => {
        answers = (await GET_REQUEST("/answers")).data;
    });

    it("should find Submitted Answers", () => {
        render(<Answers />);
        const linkElement = screen.getByText("Submitted Answers");
        expect(linkElement).toBeInTheDocument();
    });

    it("Should have a list of answers", () => {
        render(<Answers />);

        const linkElement = screen.queryByTestId("answers-container");
        expect(linkElement).toBeInTheDocument();
    });
});
