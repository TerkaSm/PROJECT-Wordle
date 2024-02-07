import React from 'react';

function GameOverBanner({gameStatus, numOfGuesses, answer}) {
  if(gameStatus === 'won') {
    return (
      <div className="happy banner">
        
      </div>
    )
  } else if (gameStatus === 'lost') {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }
}

