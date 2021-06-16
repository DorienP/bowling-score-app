import './App.css';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import PinSelection from './Components/PinSelection';
import Scoreboard from './Components/Scoreboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  // eslint-disable-next-line
  const [pins, setPins] = useState([
  <div className="pins" id="pin-10"></div>,
  <div className="pins" id="pin-9"></div>,
  <div className="pins" id="pin-8"></div>,
  <div className="pins" id="pin-7"></div>,
  <div className="pins" id="pin-6"></div>,
  <div className="pins" id="pin-5"></div>,
  <div className="pins" id="pin-4"></div>,
  <div className="pins" id="pin-3"></div>,
  <div className="pins" id="pin-2"></div>,
  <div className="pins" id="pin-1"></div>]);
  const [frame, setFrame] = useState("1");
  const [shot, setShot] = useState(1);
  const [totalShots, setTotalShots] = useState(0);
  // eslint-disable-next-line
  const [shotScores, setShotScores] = useState({});
  // eslint-disable-next-line
  const [frameScore, setFrameScore] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [spare, setSpare] = useState(false);
  // eslint-disable-next-line
  const [strikeOrSpareFrames, setStrikeOrSpareFrames] = useState({});


  const updateFrame = (frame, e, shot, spare = false, strike = false) => {
    if (frameScore[frame] === undefined) {
      frameScore[frame] = {
        frame: frame,
        firstShot: null,
        secondShot: null,
        lastShot: null,
        totalScore: null,
        strike: null,
        strike_first_shot: null,
        strike_second_shot: null,
        spare: null,
        spare_first_shot: null
      };
    }
    if (shot === 1 && typeof Number(e) === "number" && frame === "10") {
      frameScore[frame].firstShot = { shotNumber: totalShots, score: Number(e) };
    }
    if (shot === 1 && typeof Number(e) === "number" && frame === "10") {
      frameScore[frame].firstShot = { shotNumber: totalShots, score: Number(e) };
    }
    if (shot === 1 && frame !== "10" && e === "0") {
      frameScore[frame].firstShot = { shotNumber: totalShots, score: Number(e) };
    }
    if (shot === 1 && Number(e) && !strike && frame !== "10") {
      frameScore[frame].firstShot = { shotNumber: totalShots, score: Number(e) };
    } else if (strike && frame !== "10") {
      frameScore[frame].lastShot = { shotNumber: totalShots, score: Number(e) };
      frameScore[frame].strike = strike;
    }
    if (shot === 2 && frame !== "10") {
      frameScore[frame].lastShot = { shotNumber: totalShots, score: Number(e) };
      frameScore[frame].spare = spare;
    }
    if (shot === 2 && frame === "10") {
      frameScore[frame].secondShot = { shotNumber: totalShots, score: Number(e) };
    }
    if (shot === 3 && frame === "10") {
      frameScore[frame].lastShot = { shotNumber: totalShots, score: Number(e) };
    }
    if (shot === 2 && frame !== "10" && frameScore[frame].lastShot.score < 10 && frameScore[frame].lastShot !== null) {
      frameScore[frame].totalScore = frameScore[frame].lastShot.score + frameScore[frame].firstShot.score;
    }
    if (frameScore[frame].lastShot !== null && frame === "10") {
      frameScore[frame].totalScore = frameScore[frame].lastShot.score + frameScore[frame].firstShot.score + frameScore[frame].secondShot.score;
    }

  }
  // if frame does not === strike or spare
  const frameResult = (e) => {
    const frameResult = e;
    if (frame === "10" && document.getElementById(`${frameResult}-second-shot`).innerText !== "") {
      document.getElementById(`${frameResult}-frame-result`).innerText = (Number(document.getElementById(`${frameResult}-first-shot`).innerText) + Number(document.getElementById(`${frameResult}-second-shot`).innerText) + score);
    } else {
      document.getElementById(`${frameResult}-frame-result`).innerText = (Number(document.getElementById(`${frameResult}-first-shot`).innerText) + Number(document.getElementById(`${frameResult}-last-shot`).innerText) + score);
    }
    setScore(Number(document.getElementById(`${frameResult}-frame-result`).innerText));
  }


  /*  
  THIS COULD USE SOME REFACTORING:
  Realized to look at the sport in stages near the end and solved many problems.
  */
  const checkForBonus = (e) => {
    // SPARES
    if (spare && shot === 2 && document.getElementById(`${frame}-last-shot`).innerText === "") {
      document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = (score + Number(document.getElementById(`${frame}-first-shot`).innerText));
      setScore(Number(document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText));
      setSpare(false);
    }
    if (spare && frame !== "10" && shot === 1 && document.getElementById(`${frame}-last-shot`).innerText === "X") {
      document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = (score + 20);
      setScore(Number(document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText));
      setSpare(false);
    }
    if (spare && frame === "10" && shot === 1 && document.getElementById(`${frame}-last-shot`).innerText !== "") {
      document.getElementById(`${frame}-frame-result`).innerText = (score + Number(document.getElementById(`${frame}-last-shot`).innerText));
      setScore(Number(document.getElementById(`${frame}-frame-result`).innerText));
      setSpare(false);
    }
    if (spare && frame === "10" && shot === 1 && document.getElementById(`${frame}-last-shot`).innerText === "X") {
      document.getElementById(`${frame}-frame-result`).innerText = (score + 10);
      setScore(Number(document.getElementById(`${frame}-frame-result`).innerText));
      setSpare(false);
    }
    if (!spare && frame === "10" && shot === 3 && document.getElementById(`${frame}-last-shot`).innerText !== "") {

      document.getElementById(`${frame}-frame-result`).innerText = (score + frameScore[frame].totalScore);
      setScore(Number(document.getElementById(`${frame}-frame-result`).innerText));
      setSpare(false);
    }

    // STRIKES
    if (Number(frame) > 2 && frameScore[(Number(frame) - 1).toString()].strike && frameScore[frame].totalScore === 0) {
      frameScore[(Number(frame) - 1).toString()].strike_second_shot = 0;
      document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = 10 + score;
      document.getElementById(`${frame}-frame-result`).innerText = 10 + score;
      setScore(10 + score);
    } else {

      if (frame === "10" && frameScore[(Number(frame) - 1).toString()].strike && document.getElementById(`${frame}-frame-result`).innerText === "" && frameScore[frame].firstShot && frameScore[frame].secondShot && frameScore[frame].lastShot) {
        document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = 10 + score;
        setScore(score + 10);
      }
      if (frame === "10" && frameScore[(Number(frame) - 1).toString()].strike && shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1]) {
        frameScore[(frame - 1).toString()].strike_first_shot = shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1]
      }
      if (frame === "10" && frameScore[(Number(frame) - 1).toString()].strike && shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2] && document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText === "") {
        frameScore[(Number(frame) - 1).toString()].strike_second_shot = shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2]
        if (frameScore[(Number(frame) - 1).toString()].strike_first_shot && frameScore[(Number(frame) - 1).toString()].strike_second_shot) {
          document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1] + shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2] + score + 10;
          setScore(score + shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1] + shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2] + 10);
        }
      }
      if (frame !== "1" && frameScore[(Number(frame) - 1).toString()].strike && shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1]) {
        frameScore[(frame - 1).toString()].strike_first_shot = shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1]
      }
      if (frame !== "1" && frame !== "10" && frameScore[(Number(frame) - 1).toString()].strike && shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2]) {
        frameScore[(Number(frame) - 1).toString()].strike_second_shot = shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2]
        if (frameScore[(Number(frame) - 1).toString()].strike_first_shot && frameScore[(Number(frame) - 1).toString()].strike_second_shot) {
          document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1] + shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2] + score + 10;
          setScore(score + shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 1] + shotScores[frameScore[(Number(frame) - 1).toString()].lastShot.shotNumber + 2] + 10);
        }
      }
      if (Number(frame) > 2 && frameScore[(Number(frame) - 2).toString()].totalScore === null && frameScore[(Number(frame) - 2).toString()].strike) {
        if (strikeOrSpareFrames[Number(frame) - 1] === "X" && strikeOrSpareFrames[Number(frame)] === "X") {
          frameScore[(frame - 2).toString()].totalScore = 30 + score;
          document.getElementById(`${(Number(frame) - 2).toString()}-frame-result`).innerText = 30 + score;
          setScore(score + 30);
        }
      }
      if (Number(frame) > 2 && frameScore[(Number(frame) - 2).toString()].strike && frameScore[(Number(frame) - 2).toString()].strike_second_shot === null) {
        frameScore[(Number(frame) - 2).toString()].strike_second_shot = shotScores[frameScore[(Number(frame) - 2).toString()].lastShot.shotNumber + 2];
        frameScore[(Number(frame) - 2).toString()].totalScore = frameScore[(Number(frame) - 2).toString()].strike_first_shot + frameScore[(Number(frame) - 2).toString()].strike_second_shot + score + 10;
        document.getElementById(`${(Number(frame) - 2).toString()}-frame-result`).innerText = frameScore[(Number(frame) - 2).toString()].totalScore;
        setScore(frameScore[(Number(frame) - 2).toString()].totalScore);
      }

      if (frame === "10" && frameScore[(Number(frame) - 2).toString()].totalScore === null && frameScore[(Number(frame) - 2).toString()].strike) {
        frameScore[(Number(frame) - 2).toString()].totalScore = shotScores[frameScore[frame].firstShot.shotNumber + 1] + shotScores[frameScore[frame].secondShot.shotNumber + 2];

      }

      if (Number(frame) > 2 && frameScore[(Number(frame) - 1).toString()].strike && shotScores[totalShots] < 10 && frameScore[frame].lastShot && shotScores[totalShots] === frameScore[frame].lastShot.score) {
        frameScore[(Number(frame) - 1).toString()].totalScore = frameScore[frame].firstShot.score + frameScore[frame].lastShot.score + score;
        document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = score + frameScore[frame].firstShot.score + frameScore[frame].lastShot.score + 10;
        document.getElementById(`${frame}-frame-result`).innerText = score + frameScore[frame].firstShot.score + frameScore[frame].lastShot.score + 10;
        setScore(score + frameScore[frame].firstShot.score + frameScore[frame].lastShot.score + 10);
      }

      if (frame === "10" && frameScore[(Number(frame) - 1).toString()].strike && shotScores[totalShots] < 10 && frameScore[frame].secondShot && shotScores[totalShots] === frameScore[frame].secondShot.score) {
        frameScore[(Number(frame) - 1).toString()].totalScore = frameScore[frame].firstShot.score + frameScore[frame].secondShot.score + score;
        document.getElementById(`${(Number(frame) - 1).toString()}-frame-result`).innerText = score + frameScore[frame].firstShot.score + frameScore[frame].secondShot.score + 10;
        document.getElementById(`${frame}-frame-result`).innerText = score + frameScore[frame].firstShot.score + frameScore[frame].secondShot.score + 10;
        setScore(score + frameScore[frame].firstShot.score + frameScore[frame].secondShot.score + 10);
      }
    }

  }

  const scoreKeeper = (e) => {
    // TENTH FRAME
    debugger;
    if (frame === "10") {
      if (shot === 1 && e === "0") {
        document.getElementById(`${frame}-first-shot`).innerText = e;
        shotScores[totalShots] = Number(e);
        updateFrame(frame, e, 1, false, false);
        checkForBonus();
        setShot(shot + 1)
      }
      if (shot === 2 && e === "0") {
        document.getElementById(`${frame}-second-shot`).innerText = e;
        if (document.getElementById(`${frame}-first-shot`).innerText === "X") {
          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, false, false);
          checkForBonus();
          setShot(shot + 1);
        } else {
          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, false, false);
          checkForBonus();
          setShot(1);
          setGameOver(true);
        }
      }
      if (shot === 1 && e !== "10") {
        document.getElementById(`${frame}-first-shot`).innerText = e;
        shotScores[totalShots] = Number(e);
        updateFrame(frame, e, 1, false, false);
        checkForBonus();
        setShot(shot + 1);
      }
      if (shot === 1 && Number(e) === 10) {
        document.getElementById(`${frame}-first-shot`).innerText = "X";
        shotScores[totalShots] = Number(e);
        updateFrame(frame, e, 1, false, true);
        strikeOrSpareFrames[frame] = "X";
        checkForBonus();
        setShot(shot + 1);
        setTimeout(resetPins, 1000); 
      } else {
        if (shot === 2 &&
          (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) === 10)) {
          document.getElementById(`${frame}-second-shot`).innerText = "/";
          setScore(score + 10);
          setSpare(true);
          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, true, false);
          checkForBonus();
          setShot(shot + 1);
          setTimeout(resetPins, 1000); 
        }
        if (shot === 2 && Number(e) === 10) {
          document.getElementById(`${frame}-second-shot`).innerText = "X";
          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, false, true);
          strikeOrSpareFrames[frame] = "X";
          checkForBonus();
          setShot(shot + 1);
          setTimeout(resetPins, 1000); 
        }
        if (shot === 2 && (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText)) !== 10 && Number(e) !== 10) {
          document.getElementById(`${frame}-second-shot`).innerText = e;
          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, false, false);
          checkForBonus();
          setShot(1);
          if (!frameScore[(Number(frame) - 1).toString()].strike) frameResult(frame);
          setGameOver(true);
        } else {
          if ((document.getElementById(`${frame}-first-shot`).innerText === "X" ||
            document.getElementById(`${frame}-second-shot`).innerText === "/") && shot === 3) {
            document.getElementById(`${frame}-last-shot`).innerText = e === "10" ? "X" : e;
            shotScores[totalShots] = Number(e);
            updateFrame(frame, e, 3, false, false);
            checkForBonus();
            setShot(1);
            setGameOver(true);
          }
        }
      }
      // NOT TENTH FRAME
    } else {
      if (shot === 1 && e !== "10") {
        document.getElementById(`${frame}-first-shot`).innerText = e;
        shotScores[totalShots] = Number(e);
        updateFrame(frame, e, 1, false, false);
        checkForBonus(e);
        setShot(shot + 1);
      }
      if (shot === 1 && Number(e) === 10) {
        document.getElementById(`${frame}-last-shot`).innerText = "X";
        shotScores[totalShots] = Number(e);
        updateFrame(frame, e, 2, false, true);
        setTotalShots(totalShots + 1);
        strikeOrSpareFrames[frame] = "X";
        setShot(1);
        checkForBonus();
        setFrame((Number(frame) + 1).toString());
        setTimeout(resetPins, 1000);
      } else {
        if (shot === 2 && (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) < 10)) {
          document.getElementById(`${frame}-last-shot`).innerText = e;
          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, false, false);
          setShot(1);
          frameResult(frame);
          checkForBonus();
          setFrame((Number(frame) + 1).toString());
          setTimeout(resetPins, 1000);
        }
        if (shot === 2 &&
          (Number(e) + Number(document.getElementById(`${frame}-first-shot`).innerText) === 10)) {
          document.getElementById(`${frame}-last-shot`).innerText = "/";

          shotScores[totalShots] = Number(e);
          updateFrame(frame, e, 2, true, false);
          strikeOrSpareFrames[frame] = "/";
          setScore(score + 10);
          setSpare(true);
          setShot(1);
          checkForBonus();
          setFrame((Number(frame) + 1).toString());
          setTimeout(resetPins, 1000);
        }
      }
    }
  }

  const refresh = () => {
    // re-renders the webpage, not optimal.
    window.location.reload();
  }

  const removePins = (e) => {
    if (Number(e) <= pins.length) {
      setPins(pins.reverse().splice(Number(e), pins.length - 1).reverse());
    }
  }

  const resetPins = () => {
    setPins([
      <div className="pins" id="pin-10"></div>,
      <div className="pins" id="pin-9"></div>,
      <div className="pins" id="pin-8"></div>,
      <div className="pins" id="pin-7"></div>,
      <div className="pins" id="pin-6"></div>,
      <div className="pins" id="pin-5"></div>,
      <div className="pins" id="pin-4"></div>,
      <div className="pins" id="pin-3"></div>,
      <div className="pins" id="pin-2"></div>,
      <div className="pins" id="pin-1"></div>]);
  }

  useEffect(() => {
    setTotalShots(totalShots + 1);
    if (frame !== "10") checkForBonus();
    // eslint-disable-next-line
  }, [shot])

  return (
    <div className="App">
      <div style={{display:"flex", justifyContent:"center"}}>
      <img id="logo" url="./public/sm_logo_noSM_DRK@3x.png" alt="" width="564px" height="100px"></img>
      </div>
      <div id="bowling-pins">
        <Button onClick={refresh} variant="danger">Reset</Button>
      {pins}
      </div>
      <PinSelection scoreKeeper={scoreKeeper} removePins={removePins}/>
      {gameOver ?
        <div>
          <h1>Game Over</h1>
        </div> : null
      }
      <Scoreboard gameOver={gameOver} setGameOver={setGameOver} />
    </div>
  );
}

export default App;