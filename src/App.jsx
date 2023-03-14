import React, { useState } from "react";
import "./App.css";

const CARD_PAIRS = [
{ question: 'What year was the first Porsche 911 produced?', answer: '1963' },
{ question: 'What is the name of the engine used in the current-generation Ford GT?', answer: 'Ecoboost V6' },
{ question: 'What was the first car produced by Lamborghini?', answer: '350 GT' },
{ question: 'What year did the Mazda MX-5 Miata debut?', answer: '1989' },
{ question: 'What was the fastest production car of the 1990s?', answer: 'Jaguar XJ220' },
{ question: 'What is the name of the Ferrari Enzo successor?', answer: 'LaFerrari' },
{ question: 'What is the top speed of the Bugatti Veyron Super Sport?', answer: '267 mph' },
{ question: 'What was the first car to use a turbocharger?', answer: 'Oldsmobile Jetfire' },
{ question: 'What is the name of the engine used in the McLaren F1?', answer: 'BMW S70/2' },
{ question: 'What year did the Dodge Viper first go on sale?', answer: '1992' },
{ question: 'What is the name of the successor to the Lamborghini Murciélago?', answer: 'Aventador' },
{ question: 'What is the top speed of the Koenigsegg Jesko?', answer: '330 mph' },
{ question: 'What is the name of the engine used in the current-generation Corvette?', answer: 'LT2' },
{ question: 'What was the first car produced by Shelby American?', answer: 'Cobra' },
{ question: 'What year did the Porsche 959 debut?', answer: '1986' },
{ question: 'What is the name of the engine used in the Pagani Huayra?', answer: 'Mercedes-AMG M158' },
{ question: 'What is the top speed of the Hennessey Venom F5?', answer: '311 mph' },
{ question: 'What year did the Ferrari F40 debut?', answer: '1987' },
{ question: 'What is the name of the engine used in the Audi R8?', answer: 'V10' },
{ question: 'Which iconic sports car manufacturer produces the Sesto Elemento?', answer: 'Lamborghini' },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const currentCard = CARD_PAIRS[currentCardIndex];

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    setCurrentCardIndex((currentCardIndex + 1) % CARD_PAIRS.length);
    setShowAnswer(false);
    setUserGuess("");
    setIsCorrect(false);
  };

  const handlePrevClick = () => {
    setCurrentCardIndex((currentCardIndex - 1 + CARD_PAIRS.length) % CARD_PAIRS.length);
    setShowAnswer(false);
    setUserGuess("");
    setIsCorrect(false);
  };

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCorrect(userGuess.toLowerCase() === currentCard.answer.toLowerCase());
  };
  
  return (
  <div className="App">
  <h1>Sportcar Enthusiast</h1>
  <div className="card-container">
  <div className="card" onClick={handleCardClick}>
  <div className="card-question">{currentCard.question}</div>
  {showAnswer && (
  <div className="card-answer">{currentCard.answer}</div>
  )}
  </div>
  </div>
  <form onSubmit={handleSubmit}>
  <label>
  Guess:
  <input type="text" value={userGuess} onChange={handleInputChange} />
  </label>
  <button type="submit">Submit</button>
  </form>
  {isCorrect && <p>Correct!</p>}
  {userGuess && !isCorrect && <p>Incorrect. Try again.</p>}
  <button onClick={handlePrevClick}>Previous</button>
  <button onClick={handleNextClick}>Next</button>
  </div>
  );
  }
  
  export default App;