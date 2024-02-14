import React from 'react';
import { RefreshCw } from 'react-feather';

function Header() {
  return (
    <header>
      <h1>Word Game</h1>
      <span className='refresh-wrapp'>
        <RefreshCw onClick={(e) => window.location.reload()} />
      </span>
    </header>
  );
}

export default Header;
