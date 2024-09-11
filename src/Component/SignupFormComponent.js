import React, { useState } from 'react';
import './SignupForm.css';
// import google from '../Assests/google.svg'

const SignupFormComponent = ()=> {
  const [accountType, setAccountType] = useState('Candidate');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
  };

  return (
    <div className="container">
      <div className="Signup-form">
        <div className="welcome-text">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/login/create-icon.png?d=80x80" alt="Hand icon" />
            <p>Hi, Unstoppable<br/>Welcome Back to Unstop!</p>
        </div>
        <h2>Create Account as</h2>
        <div className="account-type">
          <button
            className={`btn ${accountType === 'Candidate' ? 'active' : ''}`}
            onClick={() => handleAccountTypeChange('Candidate')}
          >
            <i className="fas fa-user"></i> Candidate
          </button>
          <button
            className={`btn ${accountType === 'Company' ? 'active' : ''}`}
            onClick={() => handleAccountTypeChange('Company')}
          >
            <i className="fas fa-building"></i> Company
          </button>
          <button
            className={`btn ${accountType === 'College' ? 'active' : ''}`}
            onClick={() => handleAccountTypeChange('College')}
          >
            <i className="fas fa-university"></i> College
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder='firstName'
            />
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder='lastName'
            />
          </div>
          <div className="form-group">
            <label htmlFor="userName"></label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder='userName'
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='email'
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder='phone'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='password'
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword"></label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder='confirmPassword'
            />
          </div>
        </form>
        <div className="terms-and-conditions">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to the <a href="#">Terms of Service</a> and{' '}
            <a href="#">Privacy Policy</a>
          </label>
        </div>
        <div className=''>

        </div>
      </div>
    </div>
  );
}

export default SignupFormComponent;
