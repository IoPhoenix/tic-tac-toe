import React from 'react';


function Square(props) {
    return (
        <button 
            className="square pointer bg-white ba b--light-gray f4 tc fl"
            onClick={props.onClick}>{props.value}
        </button>
    );
}

export default Square;
