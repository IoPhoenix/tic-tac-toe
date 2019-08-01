import React from 'react';
import Square from './Square';
import calculateWinner from '../helpers';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
    }

    handleClick(i) {
        const squaresCopy = this.state.squares.slice();
        
        // prevent double click or game after winning:
        if (calculateWinner(squaresCopy) || squaresCopy[i]) return;
        
        console.log('Button was clicked!');

        squaresCopy[i] = this.state.isXNext ? 'X' : '0';
        this.setState({ squares: squaresCopy, isXNext: !this.state.isXNext});
    }

    renderSquare(i) {
        // pass its current value to each Square
        // 'X', 'O', or null for empty squares
        return (
            <Square 
                key={i}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    createBoard() {
        const board = [];
        let count = 0;

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = [];

            //Inner loop to create children
            for (let j = 0; j < 3; j++) {
                children.push(this.renderSquare(count));
                count++;
            }

            // Create the parent and add the children
            board.push(<div className="board-row">{children}</div>);
        }
        
        return board;
    }


    render() {
        const winner = calculateWinner(this.state.squares);
        let status;

        if (winner) {
            status =  'Winner is ' + winner;
        } else {
            status = `Next player: ${this.state.isXNext ? 'X' : '0'}`;
        }

        return (
            <>
                <div className="status mb3 fw5 f3">{status}</div>
                {this.createBoard()}
            </>
        )
    }
}

export default Board;