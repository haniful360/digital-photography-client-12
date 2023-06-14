import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const FeedBack = () => {
    const loadAddClass = useLoaderData();
    console.log('manageClass', loadAddClass);
    const handleFeedBack = (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;
        console.log(feedback);
        axios.post('http://localhost:5000/addClass/feedback', feedback)
            .then(res => {
                console.log(res.data);
            })
    }
    return (
        <div>
            <Helmet>
                <title>-Feedback</title>
            </Helmet>
           
            <div className='lg:w-4/4 mx-auto'>
            <h2>send feedback</h2>
            <form onSubmit={handleFeedBack}>
                <textarea name='feedback' cols='40' rows='4' className="textarea textarea-primary" placeholder="write your feedback..."></textarea> <br />
                <button className="btn btn-outline block mx-auto btn-info">Send Feedback</button>
            </form>
        </div>
        </div>
    );
};

export default FeedBack;