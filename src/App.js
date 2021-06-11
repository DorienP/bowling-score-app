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
  const [shot, setShot] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const scoreKeeper = (e) => {
    console.log(frame);
    if (frame === "10") {
      if (shot === 1 && e === "0") {
        document.getElementById(`${frame}-first-shot`).innerText = e;
        setShot(shot + 1)
      }
      if (shot === 2 && e === "0") {
        document.getElementById(`${frame}-second-shot`).innerText = e;
        if (document.getElementById(`${frame}-first-shot`).innerText === "X") {
          setShot(shot + 1);
        } else {
          setShot(1);
          setGameOver(true);
        }
      }
      if (shot === 1 && e !== "10") {
        document.getElementById(`${frame}-first-shot`).innerText = e;
        setShot(shot + 1);
      }
      if (shot === 1 && Number(e) === 10) {
        document.getElementById(`${frame}-first-shot`).innerText = "X";
        setShot(shot + 1);
      } else {
        if (shot === 2 &&
          (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) === 10)) {
          document.getElementById(`${frame}-second-shot`).innerText = "/";
          setShot(shot + 1);
        }
        if (shot === 2 && Number(e) === 10) {
          document.getElementById(`${frame}-second-shot`).innerText = "X";
          setShot(shot + 1);
        } else {
          if ((document.getElementById(`${frame}-first-shot`).innerText === "X" ||
            document.getElementById(`${frame}-second-shot`).innerText === "/") && shot === 3) {
            document.getElementById(`${frame}-last-shot`).innerText = e === "10" ? "X" : e;
            setShot(1);
            setGameOver(true);
          }
        }
      }
    } else if (document.getElementById(`${frame}-first-shot`).innerText === "" && e !== "10") {
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

  }, [gameOver])



  return (
    <div className="App">
      <PinSelection scoreKeeper={scoreKeeper} />
      <Scoreboard gameOver={gameOver} setGameOver={setGameOver} />
    </div>
  );
}

export default App;
