import React from 'react';


function ListItem({moveLocation, moveNumber, isCurrent, onClick, description}) {

  if (moveLocation) {
    const [col, row] = moveLocation;
    moveLocation = `(col #${col}, row #${row})`;
  }

  let className = 'move pointer grow bg-white ba b--light-gray f5 tc pa1';
  if (isCurrent) className += ' fw6';

  return (
    <li className="mb2" key={moveNumber}>
      <button 
        className={className}
        onClick={() => onClick(moveNumber)}>
          {description} {moveLocation}
      </button>
    </li>
  )
}

export default ListItem;
