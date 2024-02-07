import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import  GuessForm  from '../GuessForm';
import GuessList from '../GuessList';
import  WonBanner  from '../WonBanner';
import  LostBanner  from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')

  function handleSubmitGuess(tentativeGuess) {
    const NextGuesses = [...guesses, tentativeGuess]
    setGuesses(NextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (NextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
  <>
    <GuessList 
      guesses={guesses} 
      answer={answer}
    />
    <GuessForm 
      gameStatus={gameStatus} 
      handleSubmitGuess={handleSubmitGuess} 
    />
    {gameStatus === 'won' && (
      <WonBanner 
        numOfGuesses={guesses.length} 
      />
    )}
    {gameStatus === 'lost' && (
      <LostBanner 
        answer={answer}
      />
    )}
  </>
  );
}

export default Game;
