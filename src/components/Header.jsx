import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Context Master</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </ul>
        </div>
      </div>
    );
};

export default Header;