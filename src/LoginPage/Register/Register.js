import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleCreateUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmpass.value;
        console.log(email, password, confirmPass)
    }
    return (
        <div className='container'>
            <h3 className='text-center text-indigo-600 text-3xl py-4'>Please Register</h3>
            <div className="row">
                <div className="col-12">
                    <Form onClick={handleCreateUser} className='w-50 mx-auto p-3 mb-10 border-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name="confirmpass" placeholder="Confirm Password" required />
                        </Form.Group>
                        <Button variant="primary mx-auto d-block fw-bold ls-2 tracking-widest" type="submit">
                            Register
                        </Button>
                        <p className='text-center mt-3 fw-bold'>Already User? <Link to='/login'>Login</Link> </p>
                        <div>
                            <button className='border-2 p-2 mx-auto d-block bg-slate-800 text-white rounded'>Signin with google</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;