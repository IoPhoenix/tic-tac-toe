import React from 'react';

function GameInfo(props) {

    return (
        <div className="board-info">
            <div className="status mb3 fw5 f3">{props.status}</div>
            <ul className="game-info list">
                {props.moves}
            </ul>
        </div>
    );
}

export default GameInfo;
