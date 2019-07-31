import React from 'react';
import './Game.css';
import Board from './components/Board';
import 'tachyons';

function Game() {
  return (
    <div 
      className="game absolute avenir">
      <Board />
    </div>
  );
}

export default Game;
