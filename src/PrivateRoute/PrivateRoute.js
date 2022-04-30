import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { useLocation, Navigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <p className='text-center text-green-600 text-xl fw-bold private-route mt-52'><Spinner animation="border" variant="danger" /></p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;