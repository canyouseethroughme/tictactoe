import React from 'react';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
