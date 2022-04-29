import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <h3 className='text-center text-indigo-600 text-3xl py-3'>Please Login</h3>
            <div className="row">
                <div className="col-12">
                    <Form className='w-50 mx-auto p-3 mb-10 border-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary mx-auto d-block fw-bold ls-2 tracking-widest" type="submit">
                            Login
                        </Button>
                        <p className='text-center mt-3 mb-0 fw-bold'>New User? <Link to='/register'>Register</Link> </p>
                        <p className='text-center fw-bold'>Forget Password? <button className='btn btn-link fw-bold'>Please Reset</button> </p>
                        <div>
                            <button className='border-2 p-2 mx-auto d-block bg-slate-800 text-white rounded'>Signin with google</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;