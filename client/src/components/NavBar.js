import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props) {
  return (
    <div>
    <nav className="thebar">
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
    </nav>

    </div>
  );
}

export default NavBar;