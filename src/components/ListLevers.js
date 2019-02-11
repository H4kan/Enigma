import React from 'react';

import Lever from './Lever';

const ListLevers = (props) => {
    const name = props.size > 16 ? "listlevers big" : "listlevers";
    return (
        <div className={name}>
            {props.activeList.map((element, id) => <Lever
                key={id}
                id={id}
                active={element}
                changeState={props.changeState} boundaries={props.boundaries[id]}
                complexity={props.complexity}
            />)}
        </div>
    );
}

export default ListLevers;