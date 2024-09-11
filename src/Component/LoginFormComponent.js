import React from 'react';
import './LoginFormComponent.css';
import google from '../Assests/google.svg'
// import SignupPage from '../Page/SignupPage';
// import SignupFormComponent from './SignupFormComponent';

const LoginFormComponent = () => {
  return (
      <div className="login-form">
        <div className="welcome-text">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/login/create-icon.png?d=80x80" alt="Hand icon" />
            <p>Hi, Unstoppable<br/>Welcome Back to Unstop!</p>
        </div>
        <form>
          <div className="login-options">
            <button className="google-login">
              <img className='img1'  src={google} alt="Google Logo" />
              <span>Continue with Google</span>
            </button>
            <button className="linkedin-login">
              <img className='img2' src="https://d8it4huxumps7.cloudfront.net/uploads/images/664ecbbb1335e_linkedin_fav.png" alt="LinkedIn Logo" />
              <span>Login with LinkedIn</span>
            </button>
          </div>
          <div className="or-login-with-email">
              <p>---------------------------Or login with email-----------------------</p>
          </div>
          <div className="email-login">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password?</a>
            <button>Login</button>
          </div>
          {/* <button className="sign-up-btn">Don't have an account? Sign up</button> */}
          <button className="sign-up-btn">
            <span >Don't have an account?</span>
            <a href= '/SignupPage'>Sign up</a>
          </button>
        </form>
      </div>
  );
};

export default LoginFormComponent;
