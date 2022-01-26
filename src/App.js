import "./App.css";
import { useEffect, useState } from "react";
import { GET_REQUEST } from "./js/requests";
import moment from "moment";
import { formatAnswer } from "./js/helpers";

function App() {
    const [answers, setAnswers] = useState([]);

    const fetchAnswers = () => {
        GET_REQUEST("/answers", setAnswers);
    };

    useEffect(() => {
        fetchAnswers();
        return () => {};
    }, []);

    return (
        <div className="App">
            <div className="container">
                <p className="title">Submitted Answers</p>
                {answers.map((ansDoc) => (
                    <div className="full-answer" key={ansDoc._id}>
                        <div className="answers">
                            {ansDoc.answers.map((ans) => (
                                <div className="answer-container">
                                    <p key={ans._id} className={`answer tooltip ${ans.question?.type}`} data-length={ans.answer?.length > 10 ? "large" : "normal"}>
                                        {formatAnswer(ans.answer)}
                                        <span class="tooltiptext">{ans.question?.question}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="date">{moment(ansDoc.createdAt).format("LLL")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
