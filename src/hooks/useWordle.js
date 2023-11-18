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

  const handleKeyup = ({ key }) => {
    // I only care about letter values, keys such as shift / enter aren't going to be a factor here
    if (/^[A-Za-z]$/.test(key)) {
      // next we need to check if currentGuess string is less than 5 chars
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }

    // user needs to be able to delete the last char
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
