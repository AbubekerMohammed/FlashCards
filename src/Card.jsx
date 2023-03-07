import React from 'react';

const Card = ({ card, isQuestion, flipCard }) => {
  return (
    <div className="card" onClick={flipCard}>
      {isQuestion ? <h2>{card.question}</h2> : <h2>{card.answer}</h2>}
    </div>
  );
};

export default Card;
