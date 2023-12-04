import { Component } from 'react';

const Feedback = ({ options, updateFeedback }) => {
  return (
    <div>
      <div>
        <h1>Please leave feedback</h1>
        <button onClick={updateFeedback}>Good</button>
        <button onClick={updateFeedback}>Neutral</button>
        <button onClick={updateFeedback}>Bad</button>
      </div>
    </div>
  );
};
export default Feedback;
