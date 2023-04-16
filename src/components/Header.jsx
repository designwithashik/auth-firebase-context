import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthPoviders';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
    .catch(error =>console.log(error))
  }
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Context Master</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/orders'>Orders</Link>
            {user && <Link to='/profile'>Profile</Link>}
            {user? <button className='btn btn-sm' onClick={handleLogOut}>SignOut</button>:<Link to='/login'>Login</Link>}
            {user && <span>{user.email}</span>}
          </ul>
        </div>
      </div>
    );
};

export default Header;