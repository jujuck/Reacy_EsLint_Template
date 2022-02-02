import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Link to="/Home">Home</Link>
      <Link to="/ItemList">Item List</Link>
    </div>
  );
};

export default Header;
