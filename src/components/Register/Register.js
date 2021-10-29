import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import googleImg from '../../images/google.png';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {signInWithGoogle, createUser, error, setIsLoading, setUser,setError, updateProfile, auth}=useAuth();
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const histroy= useHistory();

    const location=useLocation();
    const redirect_uri= location.state?.from || '/';

    const handleSignInWithGoogle =() =>{
      setIsLoading(true)
      signInWithGoogle()
      .then(result => {
        histroy.push(redirect_uri)
        setUser(result.user);
        setError('Logged in Successfully');
    })
    .finally( () => {
      setIsLoading(false)
    })
    .catch(error=>{
        setError(error.message)
    })
}

const handleCreateUser = e => {
  e.preventDefault();
  createUser(name,email,password)
  .then( result =>{
    histroy.push(redirect_uri)
    updateProfile(auth.currentUser, {
        displayName: name,
    })
    .then((result) => {
      setUser(result.user)
    })
    setError('Logged in Successfully');
    window.location.reload();
})
.finally(() => {
  
})
.catch( error=>{
    setError(error.message);
})
}

  
  const handleName=e=>{
    setName(e.target.value);
  }
   const handleEmailChange =e=>{
     setEmail(e.target.value);
   }
   const handlePasswordChange =e=>{
    if(e.target.value < 6){
      setError('Password At least 6 character')
      return;
   }
   else{
    setPassword(e.target.value);
   }
   }
    return (
        <div className="login mx-auto">
            <div>
                
            <Form className="container m-5 ms-1">
            <h1 className="text-info fs-3 pt-5">Please Register</h1>
            <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleName} type="name" placeholder="name" autoComplete="username" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" autoComplete="useremail" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password"  autoComplete="current-password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Link to="/login">
   <button className="btn">Already registered?</button></Link>
  </Form.Group>
        <div>
            <h6 className="text-danger">{error}</h6>
        </div>
  <Link to="/home">
  <Button onClick={ handleCreateUser } className="login-btn btn" variant="primary" type="submit">
    Register 
  </Button>
  </Link>
</Form>
        <div>
            <h6 className="d-flex align-items-center">---------------Or---------------</h6>
            <div className="">
            <button  onClick={handleSignInWithGoogle} className="btn googleSign"> <img src={googleImg} alt="" /> Sign in with Google</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Register;