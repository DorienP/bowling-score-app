import './Scoreboard.css';
export default function ScoreBoard({gameOver, setGameOver}) {
    return (
        <div className="ScoreBoard" data-testid="Scoreboard">
            {/* First Frame */}
            <div className="frame frame_1">
                <div className="frame-number">
                    <h2 className="number">1</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="1-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="1-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="1-frame-result"> </h2>
                </div>
            </div>
            {/* Second Frame */}
            <div className="frame frame_2">
                <div className="frame-number">
                    <h2 className="number">2</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="2-first-shot" > </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="2-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="2-frame-result"> </h2>
                </div>
            </div>
            {/* Third Frame */}
            <div className="frame frame_3">
                <div className="frame-number">
                    <h2 className="number">3</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="3-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="3-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="3-frame-result"> </h2>
                </div>
            </div>
            {/* Fourth Frame */}
            <div className="frame frame_4">
                <div className="frame-number">
                    <h2 className="number">4</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="4-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="4-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="4-frame-result"> </h2>
                </div>
            </div>
            {/* Fifth Frame */}
            <div className="frame frame_5">
                <div className="frame-number">
                    <h2 className="number">5</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="5-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="5-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="5-frame-result"> </h2>
                </div>
            </div>
            {/* Sixth Frame */}
            <div className="frame frame_6">
                <div className="frame-number">
                    <h2 className="number">6</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="6-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="6-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="6-frame-result"> </h2>
                </div>
            </div>
            {/* Seventh Frame */}
            <div className="frame frame_7">
                <div className="frame-number">
                    <h2 className="number">7</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="7-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="7-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="7-frame-result"> </h2>
                </div>
            </div>
            {/* Eigth Frame */}
            <div className="frame frame_8">
                <div className="frame-number">
                    <h2 className="number">8</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="8-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="8-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="8-frame-result"> </h2>
                </div>
            </div>
            {/* Ninth Frame */}
            <div className="frame frame_9">
                <div className="frame-number">
                    <h2 className="number">9</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="9-first-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="9-last-shot"> </h2>
                    </div>
                </div>
                <div className="frame-score-num">
                    <h2 id="9-frame-result"> </h2>
                </div>
            </div>
            {/* Tenth Frame */}
            <div className="frame frame_10">
                <div className="frame-number">
                    <h2 className="number">10</h2>
                </div>
                <div id="frame-score-container">
                    <div className="first-shot">
                        <h2 id="10-first-shot"> </h2>
                    </div>
                    <div className="second-shot">
                        <h2 id="10-second-shot"> </h2>
                    </div>
                    <div className="last-shot">
                        <h2 id="10-last-shot"> </h2>
                    </div>
                </div>
            </div>
            {gameOver ? <div>Game Over</div>: null}
        </div>
    );
}