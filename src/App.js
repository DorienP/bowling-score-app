import './App.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import PinSelection from './Components/PinSelection';
import Scoreboard from './Components/Scoreboard';

function App() {
  // eslint-disable-next-line
  const [pins, setPins] = useState(10);
  // eslint-disable-next-line
  const [frame, setFrame] = useState("1");

  const scoreKeeper = (e) => {
    console.log(frame);
    // eslint-disable-next-line
    if (document.getElementById(`${frame}-first-shot`).innerText === "" && e !== "10") {
      document.getElementById(`${frame}-first-shot`).innerText = e;
    } else {
      if (document.getElementById(`${frame}-first-shot`).innerText !== "" &&
       (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) === 10)) {
        document.getElementById(`${frame}-last-shot`).innerText = "/";
        setFrame((Number(frame) + 1).toString());
      }
      if (document.getElementById(`${frame}-first-shot`).innerText === "" && Number(e) === 10) {
        document.getElementById(`${frame}-last-shot`).innerText = "X";
        setFrame((Number(frame) + 1).toString());
      }
    }
  }
  // will add more to do once I created a frame state;
  useEffect(() => {
    console.log("New frame!");
    setPins(10);
  }, [frame])



  return (
    <div className="App">
      <PinSelection scoreKeeper={scoreKeeper} />
      <Scoreboard />
    </div>
  );
}

export default App;
