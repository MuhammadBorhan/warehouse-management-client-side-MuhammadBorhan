import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import google from '../../images/google/google.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [emails, setEmails] = useState('');
    const [signInWithEmailAndPassword, signUser, signLoading, signError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (sending) {
        return <p className='text-center text-primary fs-2 fw-bold reset-pass'>Sending...</p>
    }

    if (signUser) {
        navigate(from, { replace: true });
    }
    if (googleUser) {
        navigate('/myitems')
    }

    const handleSignin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='container'>
            <h3 className='text-center text-indigo-600 text-3xl py-3'>Please Login</h3>
            <div className="row">
                <div className="col-12">
                    <Form onSubmit={handleSignin} className='w-50 mx-auto p-3 mb-10 border-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" onChange={(e) => setEmails(e.target.value)} placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>
                        {
                            (signLoading || googleLoading) && <p className='text-center text-green-600 text-xl fw-bold'><Spinner animation="border" variant="danger" /></p>
                        }
                        <p className='text-center text-red-500 fw-bold'>{signError?.message} {googleError?.message}</p>

                        <Button variant="primary mx-auto d-block fw-bold ls-2 tracking-widest" type="submit">
                            Login
                        </Button>
                        <p className='text-center mt-3 mb-0 fw-bold'>New User? <Link to='/register'>Register</Link> </p>
                        <p className='text-center fw-bold'>Forget Password? <button onClick={async () => {
                            await sendPasswordResetEmail(emails)
                            if (emails) {
                                toast("Email Sent")
                            } else {
                                toast('Please Enter Email')
                            }
                        }} className='btn btn-link fw-bold'>Please Reset</button> </p>
                        <div>
                            <button onClick={() => signInWithGoogle()} className='border-2 p-2 mx-auto d-block bg-slate-800 text-white rounded-lg fw-bold d-flex items-center'> <span><img className='w-8 mr-4' src={google} alt="" /></span> <span>Signin with google</span></button>
                        </div>
                    </Form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;