import React, { useState } from 'react'

export default function TicTacToe() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    function renderSquare(index) {
        return (
            <button className='square' onClick={() => handleClick(index)}>{board[index]}</button>
        )
    }

    function handleClick(index) {
        if(board[index] !== null)
            return;
        const newBoard = [...board];
        newBoard[index] = isXTurn ? 'X' : 'O';
        setBoard(newBoard);
        setXTurn(!isXTurn);
        const winnerComb = checkWinner(newBoard);
        if(winnerComb) {
            setWinner(newBoard[winnerComb[0]]);
        }
    }

    function checkWinner(newBoard) {
        const comb = [
            [0,1,2],
            [3,4,5],
            [6.7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i<comb.length; i++) {
            const [a,b,c] = comb[i];
            if(board[a] && board[a] === board[b] && board[b] === board[c]) {
                return comb[i];
            }
        }
        return null;
    }

    function handleReset() {
        setBoard(Array(9).fill(null));
        setWinner(null);
    }

    return (
        <div>
            <h3 style={{textAlign: 'center'}}>TIC TAC TOE GAME</h3>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button onClick={handleReset} className='resetBtn'>Reset</button>
            {winner && <div className='winnerText'>{winner} is Winner of this Game.</div>}
        </div>
    )
}
