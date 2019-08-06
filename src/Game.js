import React, { useState } from 'react';
import 'tachyons';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import ListItem from './components/ListItem';
import calculateWinner from './helpers';
import './Game.css';


function Game() {

  const [history, setHistory] = useState([{
            squares: Array(9).fill(null),
            moveLocation: null
        }]);
  const [isXNext, setIsXNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  /* history: [
    {
      squares: [null, null, null,
              null, null, null,
              null, null, null],
      moveLocation: null
    },
    {
      squares: [null, null, 'null',
                null, 'X', null,
                null, null, null],
      moveLocation: [2,2]
    }
      ...
  ]
  */ 

   const handleClick = (i, location) => {
     // throw away “future” history when we return back to past step:
     const historyCopy = history.slice(0, stepNumber + 1);
     const current = historyCopy[historyCopy.length - 1];
     const squaresCopy = current.squares.slice();
      
      // prevent double click or game after winning:
      if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
      
      squaresCopy[i] = isXNext ? 'X' : '0';

      setHistory(historyCopy.concat([{
          squares: squaresCopy,
          moveLocation: location
      }]));
      setIsXNext(!isXNext);
      setStepNumber(historyCopy.length);
  }


  const goTo = (stepNumber) => {
    setIsXNext((stepNumber % 2) === 0);
    setStepNumber(stepNumber);
  }

  // display board for current move number:
  const current = history[stepNumber];

  const result = calculateWinner(current.squares);

  const winner = result && result.winner;

  // display list of previous moves:
  const moves = history.map((currentHistory, moveNumber, array) => {
    const description = moveNumber ? 'Go to move #' + moveNumber : 'Game start';
    const isCurrent = moveNumber === stepNumber;

    return <ListItem 
              moveLocation={currentHistory.moveLocation}
              isCurrent={isCurrent}
              key={moveNumber}
              moveNumber={moveNumber} 
              description={description} 
              onClick={goTo} />
  });

  let status;
  let winnerIndexes;
  if (winner) {
      status =  'Winner is ' + winner;
      winnerIndexes = result.winnerIndexes;
  } else {
      if (stepNumber === 9) {
        status = 'It\'a draw!';  
      } else {
        status = `Next player: ${isXNext ? 'X' : '0'}`;
      }
  }

  return (
    <div className="game avenir flex mt5 ml5">
      <Board 
        winnerIndexes={winnerIndexes}
        squares={current.squares}
        onClick={handleClick}/>
      <GameInfo 
        status={status}
        moves={moves}
      />
    </div>
  );
}

export default Game;
