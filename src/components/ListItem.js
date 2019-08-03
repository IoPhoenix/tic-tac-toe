import React from 'react';


function ListItem(props) {

  let className = 'move pointer grow bg-white ba b--light-gray f5 tc pa1';
  if (props.isLast) className += ' fw6';

  return (
    <li className="mb2" key={props.moveNumber}>
      <button 
        className={className}
        onClick={() => props.onClick(props.moveNumber)}>
          {props.description}
      </button>
    </li>
  )
}

export default ListItem;
