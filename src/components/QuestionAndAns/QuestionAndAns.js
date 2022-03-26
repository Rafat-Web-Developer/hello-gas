import React, { useEffect, useState } from 'react';
import SingleQA from '../SingleQA/SingleQA';

const QuestionAndAns = () => {

    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

    useEffect(() => {
        fetch('qaData.json')
            .then(res => res.json())
            .then(data => setQuestionsAndAnswers(data));
    }, []);

    return (
        <div className='py-3'>
            <h3 className='mb-5 pb-3 border border-2 border-end-0 border-start-0 border-top-0'>Some Important Questions And Answers</h3>
            <div>
                {
                    questionsAndAnswers.map(quesAndAns => <SingleQA key={quesAndAns.id} questionAndAnswer={quesAndAns}></SingleQA>)
                }
            </div>
        </div>
    );
};

export default QuestionAndAns;