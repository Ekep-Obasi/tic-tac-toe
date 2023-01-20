/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './Board.css';

function Board() {
  const [cells, setCells] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ]);

  function getRandomEmptyCell() {
    let randRow = Math.floor(Math.random() * 3);
    let randCol = Math.floor(Math.random() * 3);
    while (cells[randRow][randCol] !== ' ') {
      console.log('searching for random value');
      randRow = Math.floor(Math.random() * 3);
      randCol = Math.floor(Math.random() * 3);
    }
    return { randRow, randCol };
  }

  // Create a has win function and implement in the play function before an else
  function play(index, index2, value) {
    // Create hasWon function and put lines 27 to line 34 in an else block
    setCells((stateCells) => {
      const newCells = [...stateCells];
      if (newCells[index][index2] === ' ') {
        newCells[index][index2] = value;
      }
      return newCells;
    });
  }

  function rand() {
    const { randRow, randCol } = getRandomEmptyCell();
    play(randRow, randCol, 'O');
  }

  function handleClick(index, index2) {
    play(index, index2, 'X');
    setTimeout(rand, 1000);
  }

  return (
    <div className="board-container">
      {cells.map((item, index) => {
        return item.map((cell, index2) => (
          <button
            type="button"
            className="boardbutton"
            onClick={() => handleClick(index, index2)}
          >
            {cell}
          </button>
        ));
      })}
    </div>
  );
}

export default Board;
