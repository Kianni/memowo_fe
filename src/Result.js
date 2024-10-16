import React from 'react';

function Result({ onRestart }) {
  return (
    <div className="result">
      <h2>Congratulations! You've completed the quiz.</h2>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Result;
