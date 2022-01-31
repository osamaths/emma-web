import React, { useState, useEffect } from "react";
import "./index.css";
import { GET_REQUEST } from "../../js/requests";
import Answer from "../Answer";

const Answers = ({}) => {
    const [answers, setAnswers] = useState([]);

    const fetchAnswers = () => {
        GET_REQUEST("/answers", setAnswers);
    };

    useEffect(() => {
        fetchAnswers();
        return () => {};
    }, []);

    return (
        <div className="container" data-testid="answers-container">
            <p className="title">Submitted Answers</p>
            {answers.map((ansDoc) => (
                <Answer key={ansDoc._id} ansDoc={ansDoc} />
            ))}
        </div>
    );
};

export default Answers;
