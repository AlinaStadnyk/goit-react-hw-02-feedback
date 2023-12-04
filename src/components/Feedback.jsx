import React from 'react';

const Feedback = ({ options, updateFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} onClick={() => updateFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);
export default Feedback;
