import React from 'react';

function GameInfo({status, moves}) {
    return (
        <div className="board-info">
            <div className="status mb3 fw5 f3">{status}</div>
            <ul className="game-info list">
                {moves}
            </ul>
        </div>
    );
}

export default GameInfo;
