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
    // I only care about letter values, keys such as shift / numbers or brackets aren't going to be a factor here
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

    // user need to submit a guess
    // we need to check to see if length of string is exactly 5 and hasn't been previously guessed and the turn value hasn't gone above 5

    if (key === "Enter") {
      if (turn > 5) {
        // will put failure logic later
        console.log("turn is higher than 5");
        return;
      }

      if (history.includes(currentGuess)) {
        // will put failure logic later
        console.log("word has already been guessed");
        return;
      }

      if (currentGuess.length !== 5) {
        // will put failure logic later
        console.log("word isn't long enough");
        return;
      }

      formatGuess();
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
