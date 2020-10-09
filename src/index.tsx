import * as React from 'react';
import Game from './components/Game';
import styled from '@emotion/styled';

const Main = styled.div`
  background-color: black;
  color: white;
  font-family: 'Roboto', sans-serif;
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

export const TicTacToe = () => {
  return (
    <Main>
      <Game />
    </Main>
  );
};
