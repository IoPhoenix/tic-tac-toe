import React from 'react';
import 'tachyons';
import Board from './components/Board';
import GameInfo from './components/GameInfo';
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
    console.log('Current history: ', history);

    // display board for current move number:
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current);

    const moves = history.map((_, moveNumber) => {
      const description = moveNumber ? 'Go to move #' + moveNumber : 'Game start';

      return (
        <li className="mb2" key={moveNumber}>
          <button 
            className="move pointer grow bg-white ba b--light-gray f5 tc pa1"
            onClick={() => this.goTo(moveNumber)}>
              {description}
          </button>
        </li>
      )
    });

    let status;
    if (winner) {
        status =  'Winner is ' + winner;
    } else {
        status = `Next player: ${this.state.isXNext ? 'X' : '0'}`;
    }

    return (
      <div className="game avenir flex mt5 ml5">
        <Board 
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
