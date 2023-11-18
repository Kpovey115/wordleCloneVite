import { useState, useEffect } from "react";
import "./index.css";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        // random number between 0 and the length of the array

        const randomSolution = json[Math.floor(Math.random() * json.length)];

        setSolution(randomSolution);
      });
  }, [setSolution]);

  console.log(solution);

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
