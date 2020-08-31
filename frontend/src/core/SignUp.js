import React, { useState, useEffect } from 'react'
import Navigation from './Navigation';
import './SignUp.css'
import { signUp } from './apiCore';


const SignUp = () => {

    const signUpForm = () => (
        <form className="sign-box">
          <div className='form-group'>
            <label className='text-muted'>Name</label>
            <input
              onChange=''
              value=''
              type='text'
              className='form-control'/>
          </div>
          <div className='form-group'>
            <label className='text-muted'>email</label>
            <input
              onChange=''
              type='email'
              value=''
              className='form-control'/>
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              onChange=''
              value=''
              type='password'
              className='form-control'/>
          </div>
          <button onClick='' className='btn btn-primary'>
            Sign Up
          </button>
        </form>
      );

    return (
        <>
        <Navigation/>
        <div className='mt-5'>
        <h4 className='text-center mb-5'>Sing Up</h4>
        {signUpForm()}
        </div>
        </>
    )
}

export default SignUp
