import moment from "moment";
import React from "react";
import { formatAnswer } from "../../js/helpers";
import "./index.css";

const Answer = ({ ansDoc = {} }) => {
    return (
        <div className="full-answer">
            <div className="answers">
                {ansDoc.answers.map((ans) => (
                    <div className="answer-container" key={ans._id}>
                        <p className={`answer tooltip ${ans.question?.type}`} data-length={ans.answer?.length > 10 ? "large" : "normal"} data-testid={`sub-answer-${ans._id}`}>
                            {formatAnswer(ans.answer)}
                            <span className="tooltiptext">{ans.question?.question}</span>
                        </p>
                    </div>
                ))}
            </div>
            <p className="date" data-testid={`answer-date-${ansDoc._id}`}>
                {moment(ansDoc.createdAt).format("LLL")}
            </p>
        </div>
    );
};

export default Answer;
