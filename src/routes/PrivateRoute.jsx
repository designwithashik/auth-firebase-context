import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthPoviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56 bg-white"></progress>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;