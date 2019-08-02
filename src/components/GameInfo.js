import React from 'react';

function GameInfo(props) {

    return (
        <div className="board-info">
            <div className="status mb3 fw5 f3">{props.status}</div>
            <ol className="game-info">
            </ol>
        </div>
    );
}

export default GameInfo;
