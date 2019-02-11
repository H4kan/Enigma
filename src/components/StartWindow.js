import React from 'react';

import './stylesheets/StartWindow.css';




const StartWindow = (props) => {
    return (
        <div>
            <h1>Welcome to Enigma</h1>
            <h2>Brain Capability Test by H4kan</h2>
            <button
                onClick={props.click}
                className='play'>

            </button>
        </div>
    );
}

export default StartWindow;