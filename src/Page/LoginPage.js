import React from 'react';
import LeftColumnComponent from '../Component/LeftColumnComponent';
import LoginFormComponent from '../Component/LoginFormComponent';
import './LoginPage.css'

const Login = () => {
  return (
    <div className="container">
        <div className='inside'>
            <LeftColumnComponent />
            <LoginFormComponent/>
        </div>
    </div>
  );
};

export default Login;