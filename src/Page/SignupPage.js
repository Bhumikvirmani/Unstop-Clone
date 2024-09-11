import React from 'react';
import LeftColumnComponent from '../Component/LeftColumnComponent';
// import LoginFormComponent from '../Component/LoginFormComponent';
import SignupFormComponent from '../Component/SignupFormComponent';
import './SignupPage.css'

const SignupPage = () => {
  return (
    <div className="container">
        <div className='inside'>
            <LeftColumnComponent />
            <SignupFormComponent />
        </div>
    </div>
  );
};

export default SignupPage;