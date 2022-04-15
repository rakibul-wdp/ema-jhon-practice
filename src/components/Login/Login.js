import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/google.png';

const Login = () => {
  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Login</h2>
        <form>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='' required />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='' required />
          </div>
          <input className='form-submit' type='submit' value='Login' />
        </form>
        <p className='form-link-signup'>
          New to Ema-John?{' '}
          <Link className='form-link' to='/signup'>
            Create an account
          </Link>
        </p>
        <div className='form-horizontal-line'>
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <button className='form-button'>
          <img src={logo} alt='' />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;