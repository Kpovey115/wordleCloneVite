import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0); // sets the turn, we increment this value after every guess if it goes higher than the turn limit, game is lost
  const [currentGuess, setCurrentGuess] = useState(""); // tracks every char entered using the handleKeyup func
  const [guesses, setGuesses] = useState([]); // previous guesses set by formatGuesss
  const [history, setHistory] = useState([]); // similar to above however this will be the pure string value. Will be used to ensure the player doesn't guess the same word twice
  const [isCorrect, setIsCorrect] = useState(false); // sets to true when the player wins. Will be used to trigger a victory modal.

  // format a guess into an array of letter objects
  // eg [{key: 'a', color: "yellow"}]

  const formatGuess = () => {};

  /*
    add a new guess to the guesses state
    update the isCorrect state if the guess is correct
    add one to the turn state
    */

  const addNewGuess = () => {};

  /*
  handle keyup event & track current guess
  if user presses enter, add the new guess
   */

  const handleKeyup = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;