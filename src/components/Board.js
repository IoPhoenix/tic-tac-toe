import React from 'react';
import Square from './Square';


/* Board structure:
<div className="board-row">
    {renderSquare(0, [1,1])}
    {renderSquare(1, [2,1])}
    {renderSquare(2, [3,1])}
</div>
<div className="board-row">
    {renderSquare(3, [1, 2])}
    {renderSquare(4, [2, 2])}
    {renderSquare(5, [3, 2])}
</div>
<div className="board-row">
    {renderSquare(6, [1, 3])}
    {renderSquare(7, [2, 3])}
    {renderSquare(8, [3, 3])}
</div> */

function Board(props) {

    const renderSquare = (i, location) => {
        const isWinner = props.winnerIndexes && props.winnerIndexes.includes(i);

        // pass its current value to each Square
        // 'X', 'O', or null for empty squares
        return (
            <Square
                location={location}
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

            // Inner loop to create children
            for (let j = 0; j < 3; j++) {
                children.push(renderSquare(count, [j+1, i+1]));
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