import React from 'react';
import logo from 'src/assets/images/logo-github.png';
import './style.scss';

export default function Header() {
  return (
    <header className="app-header">
      <a href="/">
        <img
          className="app-header__logo"
          src={logo}
          alt="Logo Github"
        />
      </a>
    </header>
  );
}
