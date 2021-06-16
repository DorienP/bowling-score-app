import './PinSelection.css'

export default function PinSelection({scoreKeeper, removePins}) {
    return (
        <div id="Pin-Button-Container">
            <button className="Pin-Button Pin-Button-0" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>0</button>
            <button className="Pin-Button Pin-Button-1" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>1</button>
            <button className="Pin-Button Pin-Button-2" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>2</button>
            <button className="Pin-Button Pin-Button-3" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>3</button>
            <button className="Pin-Button Pin-Button-4" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>4</button>
            <button className="Pin-Button Pin-Button-5" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>5</button>
            <button className="Pin-Button Pin-Button-6" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>6</button>
            <button className="Pin-Button Pin-Button-7" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>7</button>
            <button className="Pin-Button Pin-Button-8" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>8</button>
            <button className="Pin-Button Pin-Button-9" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>9</button>
            <button className="Pin-Button Pin-Button-10" onClick={(e) => {scoreKeeper(e.target.innerText); removePins(e.target.innerText);}}>10</button>
        </div>
    )
}