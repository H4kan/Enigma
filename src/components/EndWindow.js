import React from 'react';

import './stylesheets/EndWindow.css'

const EndWindow = (props) => {
    return (
        <div className="end">
            <div>
                <h1 className="gratz">Thank you for playing Enigma</h1>
                <h3 className='gratz'>Brain Capability Test by H4kan</h3>
            </div>
            <div className="score">
                <h4 className="gratz">Your statistics:</h4>
                <p className="gratz">Size: <span>{props.size}</span></p>
                <p className="gratz">Chaos: <span>{props.chaos}</span></p>
                <p className="gratz">Complexity: <span>{props.complexity}</span></p>
            </div>
            <p className="gratz">Time: <span>{props.time.hours < 10 ? "0" + props.time.hours : props.time.hours}:{props.time.minutes < 10 ? "0" + props.time.minutes : props.time.minutes}:{props.time.seconds < 10 ? "0" + props.time.seconds : props.time.seconds}</span></p>
            <button className="return" onClick={() => {
                props.restart();
                props.resetTime();
            }}>Try again</button>
        </div>
    );
}

export default EndWindow;