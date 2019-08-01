import React from 'react';
import Square from './Square';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
    }

    handleClick(i) {
        console.log('Button was clicked!');

        const squaresCopy = this.state.squares.slice(0);
        squaresCopy[i] = this.state.isXNext ? 'X' : '0';
        this.setState({ squares: squaresCopy, isXNext: !this.state.isXNext});
    }

    renderSquare(i) {
        // pass its current value to each Square
        // 'X', 'O', or null for empty squares
        return (
            <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    render() {
        const status = 'Next player: X';

        return (
            <>
                <div className="status mb3 fw5 f3">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </>
        )
    }
}

export default Board;