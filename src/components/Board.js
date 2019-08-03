import React from 'react';
import Square from './Square';


function Board(props) {

    const renderSquare = (i) => {
        const isWinner = props.winnerIndexes && props.winnerIndexes.includes(i);

        // pass its current value to each Square
        // 'X', 'O', or null for empty squares
        return (
            <Square 
                isWinner={isWinner}
                key={i}
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        )
    }

    const createBoard = () => {
        const board = [];
        let count = 0;

        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
            let children = [];

            //Inner loop to create children
            for (let j = 0; j < 3; j++) {
                children.push(renderSquare(count));
                count++;
            }

            // Create the parent and add the children
            board.push(<div className="board-row" key={i}>{children}</div>);
        }

        return board;
    }

    return (
        <div className="board mr5">
            {createBoard()}
        </div>
    )
}

export default Board;