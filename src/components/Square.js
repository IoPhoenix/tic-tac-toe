import React from 'react';

function Square(props) {
  return (
    <button 
        className="square pa2 ph3 bg-white ba b--light-gray">{props.value}
    </button>
  );
}

export default Square;
