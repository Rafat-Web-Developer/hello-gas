import React from 'react';

const SingleQA = ({questionAndAnswer}) => {
    return (
        <div class="card my-3">
            <div class="card-header fw-bold">
                {questionAndAnswer.question}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <p>{questionAndAnswer.ans}</p>
                </blockquote>
            </div>
        </div>
    );
};

export default SingleQA;