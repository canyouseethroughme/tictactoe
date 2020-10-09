import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';
import styled from '@emotion/styled';

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #272727;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem 1rem;
`;

const Game: React.FC<{}> = ({}) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? 'X' : 'O';

  const handleClick = (i: any) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step: any) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to Start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <React.Fragment>
      <h1>Tic Tac Toe</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <InfoWrapper>
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? 'Winner: ' + winner : 'Next Player: ' + xO}</h3>
      </InfoWrapper>
    </React.Fragment>
  );
};

export default Game;
