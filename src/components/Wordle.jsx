import React, { useState, useEffect } from "react";
import useWordle from "../hooks/useWordle";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup } = useWordle();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup); // sets up the event listen for a user pressing a key on the keyboard

    return () => window.removeEventListener("keyup", handleKeyup); // cleans up the same listener, preventing multiple event listeners being in place.
  }, [handleKeyup]);

  return (
    <>
      <div> currentGuess - {currentGuess}</div>
    </>
  );
}
