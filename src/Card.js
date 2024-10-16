import React from 'react';

const getOptions = (correctOption, allWords) => {
  const options = [correctOption];
  while (options.length < 3) {
    const randomOption =
      allWords[Math.floor(Math.random() * allWords.length)].english;
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }
  return options.sort(() => Math.random() - 0.5);
};

function Card({ word, words, onNext }) {
  const options = getOptions(word.english, words);

  const handleClick = (option) => {
    if (option === word.english) {
      onNext();
    } else {
      alert('Try again!');
    }
  };

  return (
    <div className="card">
      <h2>{word.spanish}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => handleClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;
