import React from 'react';
import 'tachyons';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
import ListItem from './components/ListItem';
import calculateWinner from './helpers';
import './Game.css';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        history: [Array(9).fill(null)],
        isXNext: true,
        stepNumber: 0
    }
  }

    /* history: [
        [null, null, null,
        null, null, null,
        null, null, null],

        [null, null, null,
        null, 'X', null,
        null, null, null],
        
        ...
    ]
    */ 

   handleClick = (i) => {
     // throw away “future” history when we return back to past step:
     const history = this.state.history.slice(0, this.state.stepNumber + 1);

     const current = history[history.length - 1];
     const squaresCopy = current.slice();
      
      // prevent double click or game after winning:
      if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
      
      console.log('Button was clicked!');

      squaresCopy[i] = this.state.isXNext ? 'X' : '0';
      this.setState({
        history: history.concat([squaresCopy]),
        isXNext: !this.state.isXNext,
        stepNumber: history.length
      })
  }


  goTo = (stepNumber) => {
    this.setState({
      history: this.state.history.slice(0, stepNumber + 1),
      stepNumber: stepNumber,
      isXNext: (stepNumber % 2) === 0
    });
  }

  
  render() {
    const history = this.state.history;

    // display board for current move number:
    const current = history[this.state.stepNumber];

    const result = calculateWinner(current);

    const winner = result && result.winner;

    const moves = history.map((_, moveNumber, array) => {
      const description = moveNumber ? 'Go to move #' + moveNumber : 'Game start';
      const isLast = moveNumber === array.length - 1;

      return <ListItem 
                isLast={isLast}
                key={moveNumber}
                moveNumber={moveNumber} 
                description={description} 
                onClick={this.goTo} />
    });

    let status;
    let winnerIndexes;
    if (winner) {
        status =  'Winner is ' + winner;
        winnerIndexes = result.winnerIndexes;
    } else {
        status = `Next player: ${this.state.isXNext ? 'X' : '0'}`;
    }

    return (
      <div className="game avenir flex mt5 ml5">
        <Board 
          winnerIndexes={winnerIndexes}
          squares={current}
          onClick={this.handleClick}/>
        <GameInfo 
          status={status}
          moves={moves}
          />
      </div>
    );
  }
}

export default Game;
