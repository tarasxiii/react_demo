import React from 'react';
import Logo from '../image/Logo.png';

export default function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
    </header>
  );
}
