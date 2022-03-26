import React from 'react';

const SingleQA = ({questionAndAnswer}) => {
    return (
        <div className="card my-3">
            <div className="card-header fw-bold">
                {questionAndAnswer.question}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{questionAndAnswer.ans}</p>
                </blockquote>
            </div>
        </div>
    );
};

export default SingleQA;