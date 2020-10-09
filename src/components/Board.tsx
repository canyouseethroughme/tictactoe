import React from 'react';
import Square from './Square';
import styled from '@emotion/styled';

const Container = styled.div`
  border: 1rem solid #ff652f;
  background: #ff652f;
  width: 500px;
  height: 500px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
`;

interface BoardProps {
  squares: any[];
  onClick: (e?: any) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <Container>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </Container>
  );
};

export default Board;
