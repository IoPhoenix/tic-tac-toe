import React from 'react';


function ListItem(props) {

  let moveLocation;

  if (props.moveLocation) {
    const [col, row] = props.moveLocation;
    moveLocation = `(col #${col}, row#${row})`;
  }

  let className = 'move pointer grow bg-white ba b--light-gray f5 tc pa1';
  if (props.isLast) className += ' fw6';

  return (
    <li className="mb2" key={props.moveNumber}>
      <button 
        className={className}
        onClick={() => props.onClick(props.moveNumber)}>
          {props.description} {moveLocation}
      </button>
    </li>
  )
}

export default ListItem;
