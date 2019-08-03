import React from 'react';


function Square(props) {
    let className = 'square pointer bg-white b--light-gray f4 tc fl ';
    className += props.isWinner ? 'bw2' : 'ba';

    return (
        <button 
            className={className}
            onClick={props.onClick}>{props.value}
        </button>
    );
}

export default Square;
