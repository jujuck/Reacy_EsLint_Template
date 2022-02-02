import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/Home">
        <img className="" src="./images/logo.png" alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
