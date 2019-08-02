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
        isXNext: true
    }
  }

    /* history: [
        [null, null, null,
        null, null, null,
        null, null, null],

        [null, null, null,
        null, 'X', null,
        null, null, null],
    ]
    */ 

   handleClick = (i) => {
     const history = this.state.history;
     const current = history[history.length - 1];
     const squaresCopy = current.slice();
      
      // prevent double click or game after winning:
      if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
      
      console.log('Button was clicked!');

      squaresCopy[i] = this.state.isXNext ? 'X' : '0';
      this.setState({
        history: history.concat([squaresCopy]),
        isXNext: !this.state.isXNext});
  }

  
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current);
    let status;
  
    if (winner) {
        status =  'Winner is ' + winner;
    } else {
        status = `Next player: ${this.state.isXNext ? 'X' : '0'}`;
    }

    return (
      <div className="game absolute avenir">
        <Board 
          squares={current}
          onClick={this.handleClick}/>
        <GameInfo status={status}/>
      </div>
    );
  }
}

export default Game;
