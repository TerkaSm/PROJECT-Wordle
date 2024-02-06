import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({guess})
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        // minLength nefunguje ve spojení s metodou toUpperCase(), vyřešeno pomocí pattern atributu a title
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase())
        }}
        id="guess-input" type="text" />
    </form>
  );
}

export default GuessForm;
