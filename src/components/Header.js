import React from 'react';
import './Header.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="https://netflix.com">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://www.pngkey.com/png/detail/178-1787508_github-icon-download-at-icons8-white-github-icon.png" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}