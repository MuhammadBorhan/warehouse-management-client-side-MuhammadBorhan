import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import google from '../../images/google/google.png';

const Register = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (emailUser) {
        navigate('/myitems')
    }
    if (googleUser) {
        navigate('/myitems')
    }


    const handleCreateUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmpass.value;

        if (password.length < 6) {
            setError('Password not longer than 6 character')
            return;
        } else if (password !== confirmPass) {
            setError('Password did not mathced');
            return;
        } else {
            createUserWithEmailAndPassword(email, password)
        }

    }
    return (
        <div className='container'>
            <h3 className='text-center text-green-600 text-3xl py-4'>Please Register</h3>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <Form onSubmit={handleCreateUser} className='p-3 mb-10 border-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className='relative'>
                                <Form.Control type={show ? "text" : "password"} name="password" placeholder="Password" required />
                                <p onClick={() => setShow(!show)} className='absolute text-danger fw-bold right-0 top-2 pr-2 cursor-pointer'>
                                    {
                                        show ? "hide" : "show"
                                    }
                                </p>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <div className='relative'>
                                <Form.Control type={show ? "text" : "password"} name="confirmpass" placeholder="Confirm Password" required />
                                <p onClick={() => setShow(!show)} className='absolute text-danger fw-bold right-0 top-2 pr-2 cursor-pointer'>
                                    {
                                        show ? "hide" : "show"
                                    }
                                </p>
                            </div>
                            <p className='text-center text-red-500 fw-bold'>{error} {googleError?.message}</p>
                            {
                                (emailLoading || googleLoading) && <p className='text-center text-green-600 text-xl fw-bold'><Spinner animation="border" variant="danger" /></p>
                            }
                            {
                                emailError && <p className='text-center text-danger text-xl fw-bold'>Already User</p>
                            }

                        </Form.Group>

                        <Button variant="primary mx-auto d-block fw-bold ls-2 tracking-widest" type="submit">
                            Register
                        </Button>
                        <p className='text-center mt-3 fw-bold'>Already User? <Link to='/login'>Login</Link> </p>
                        <div>
                            <button onClick={() => signInWithGoogle()} className='border-2 p-2 mx-auto d-block bg-slate-800 text-white rounded-lg fw-bold d-flex items-center'> <span><img className='w-8 mr-4' src={google} alt="" /></span> <span>Signin with google</span></button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;