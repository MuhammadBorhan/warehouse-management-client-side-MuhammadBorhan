import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { useLocation, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;