
import React from 'react';

const Timer = (props) => {


    return (
        <div className="timer">
            <p>{`${props.time.hours < 10 ? "0" + props.time.hours : props.time.hours}:${props.time.minutes < 10 ? "0" + props.time.minutes : props.time.minutes}:${props.time.seconds < 10 ? "0" + props.time.seconds : props.time.seconds}`}</p>
        </div>
    );
}

export default Timer;