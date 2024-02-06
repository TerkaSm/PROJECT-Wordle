import React from 'react';

function GuessList({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">{guess.guess}</p>
      ))}
    </div>
  );
}

export default GuessList;
