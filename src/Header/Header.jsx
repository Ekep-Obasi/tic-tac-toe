/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <h1>Tic-Tac-Toe</h1>
      <p>
        The goal of the game is for players to position their marks so that they
        make a continuous line of three cells vertically, horizontally, or
        diagonally. An opponent can prevent a win by blocking the completion of
        the opponent's line.
      </p>
      <hr />
    </div>
  );
}

export default Header;
