import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`guess: ${guess}`)
    setGuess('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value)
        }}
        id="guess-input" type="text" />
    </form>
  );
}

export default GuessForm;
