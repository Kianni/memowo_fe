import React, { useState } from 'react';
import './App.css';
import Card from './Card';
import Result from './Result';

function App() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const fetchWords = async () => {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ words { spanish english } }' }),
    });
    const result = await response.json();
    setWords(result.data.words);
    setQuizStarted(true);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <button onClick={fetchWords}>Learn Sea Creatures</button>
      ) : showResult ? (
        <Result onRestart={handleRestart} />
      ) : (
        <Card word={words[currentIndex]} words={words} onNext={handleNext} />
      )}
    </div>
  );
}

export default App;
