import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthPoviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>This is home {user && <span>{user.displayName}</span>} </h2>
        </div>
    );
};

export default Home;