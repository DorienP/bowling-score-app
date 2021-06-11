import './App.css';
import React, {useState, useEffect} from 'react';
import PinSelection from './Components/PinSelection';
import Scoreboard from './Components/Scoreboard';

function App() {

  const [pins, setPins] = useState(10);
  
  const removePins = (e) => {
    console.log('pins remaining:', pins - e);
    if (pins - e < 0) {
      console.log('unable to knock pins that don\'t exist');
    } else {
      setPins(pins - e);
    }
    if (pins === 0) setPins(10); // will add more to do once I created a frame state;
  }

  useEffect(() => {
    console.log('useEffect', pins);
  }, [pins])





  return (
    <div className="App">
      <PinSelection removePins={removePins}/>
      <Scoreboard />
    </div>
  );
}

export default App;
