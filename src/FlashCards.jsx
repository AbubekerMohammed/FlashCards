import React, { useState } from "react";
import Card from "./Card";
import "./FlashCards.css";

const FlashCards = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentCardIndex((index) => (index + 1) % cards.length);
  };

  const handlePrevClick = () => {
    setCurrentCardIndex((index) => {
      if (index === 0) {
        return cards.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  return (
    <div className="flashcards-container">
      <h1 className="flashcards-title">{cards[currentCardIndex].question}</h1>
      <Card text={cards[currentCardIndex].answer} />
      <div className="button-container">
        <button className="button" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashCards;