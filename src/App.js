import './App.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import PinSelection from './Components/PinSelection';
import Scoreboard from './Components/Scoreboard';

function App() {
  // eslint-disable-next-line
  const [pins, setPins] = useState(10);
  const [frame, setFrame] = useState("1");
  const [shot, setShot] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [spare, setSpare] = useState(false);
  // eslint-disable-next-line
  const [strike, setStrike] = useState(false);

  // if frame does not === strike or spare
  const frameResult = (e) => {
    const frameResult = e;
    document.getElementById(`${frameResult}-frame-result`).innerText = (Number(document.getElementById(`${frame}-first-shot`).innerText) + Number(document.getElementById(`${frame}-last-shot`).innerText) + score);
    setScore(Number(document.getElementById(`${frameResult}-frame-result`).innerText));
  }

  const checkForBonus = (e) => {
    if (spare && shot === 2) {
      document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = (score + Number(document.getElementById(`${frame}-first-shot`).innerText));
      setScore(Number(document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText));
      setSpare(false);
    }
    if (spare && frame === "10" && shot === 1 && document.getElementById(`${frame}-last-shot`).innerText !== "") {
      document.getElementById(`${frame}-frame-result`).innerText = (score + Number(document.getElementById(`${frame}-last-shot`).innerText));
      setScore(Number(document.getElementById(`${frame}-frame-result`).innerText));
      setSpare(false);
    }
  }

  const scoreKeeper = (e) => {
    // TENTH FRAME
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
          setScore(score + 10);
          setSpare(true);
          setShot(shot + 1);
        }
        if (shot === 2 && Number(e) === 10) {
          document.getElementById(`${frame}-second-shot`).innerText = "X";
          setShot(shot + 1);
        }
        if (shot === 2 && (Number(e) + + Number(document.getElementById(`${frame}-first-shot`).innerText)) !== 10) {
          document.getElementById(`${frame}-second-shot`).innerText = e;
          setShot(1);
          setGameOver(true);
        } else {
          if ((document.getElementById(`${frame}-first-shot`).innerText === "X" ||
            document.getElementById(`${frame}-second-shot`).innerText === "/") && shot === 3) {
            document.getElementById(`${frame}-last-shot`).innerText = e === "10" ? "X" : e;
            checkForBonus(e);
            setShot(1);
            setGameOver(true);
          }
        }
      }
      // NOT TENTH FRAME
    } else {
      if (shot === 1 && e !== "10") {
        document.getElementById(`${frame}-first-shot`).innerText = e;
        // setScore(score + Number(e));
        checkForBonus(e);
        setShot(shot + 1);
      }
      if (shot === 1 && Number(e) === 10) {
        document.getElementById(`${frame}-last-shot`).innerText = "X";
        setShot(1);
        checkForBonus();
        setFrame((Number(frame) + 1).toString());
      } else {
        if (shot === 2 && (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) < 10)) {
          document.getElementById(`${frame}-last-shot`).innerText = e;
          setShot(1);
          frameResult(frame);
          setFrame((Number(frame) + 1).toString());
        }
        if (shot === 2 &&
          (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) === 10)) {
          document.getElementById(`${frame}-last-shot`).innerText = "/";
          setScore(score + 10);
          setSpare(true);
          setShot(1);
          setFrame((Number(frame) + 1).toString());
        }
      }
    }
  }

  useEffect(() => {
    checkForBonus();
    console.log(score);
  }, [shot])

  return (
    <div className="App">
      <PinSelection scoreKeeper={scoreKeeper} />
      <Scoreboard gameOver={gameOver} setGameOver={setGameOver} />
    </div>
  );
}

export default App;
