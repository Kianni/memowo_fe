import React, { useState } from 'react';
import Card from './Card';
import Result from './Result';
import './App.css';

const words = [
  { spanish: 'anguila', english: 'eel' },
  { spanish: 'caballito de mar', english: 'seahorse' },
  { spanish: 'medusa', english: 'jellyfish' },
  { spanish: 'foca', english: 'seal' },
  { spanish: 'nutria', english: 'otter' },
  { spanish: 'morsa', english: 'walrus' },
  { spanish: 'león marino', english: 'sea lion' },
  { spanish: 'pingüino', english: 'penguin' },
  { spanish: 'pulpo', english: 'octopus' },
  { spanish: 'langosta', english: 'lobster' },
  { spanish: 'cangrejo', english: 'crab' },
  { spanish: 'gaviota', english: 'seagull' },
  { spanish: 'pelícano', english: 'pelican' },
  { spanish: 'camarón', english: 'shrimp' },
  { spanish: 'mantarraya', english: 'manta ray' },
  { spanish: 'almeja', english: 'clam' },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

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
  };

  return (
    <div className="App">
      {showResult ? (
        <Result onRestart={handleRestart} />
      ) : (
        <Card word={words[currentIndex]} words={words} onNext={handleNext} />
      )}
    </div>
  );
}

export default App;
