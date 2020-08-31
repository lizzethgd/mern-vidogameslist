import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'
import Navigation from './Navigation';
import { signin, authenticate, isAuthenticated} from './apiCore';

const SignIn = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        success: false,
        redirectToReferrer: false
      });

    const {email, password, error, success, redirectToReferrer} = values;
      
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
      }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error: false, success: true})
        signin({email, password})
          .then(data => {
            if (data.error) {
              setValues({...values, error: data.error, success:false})
            } else {
              authenticate(
                data, () => {
                  setValues({
                    ...values,
                    redirectToReferrer: true
                  })
                }
              )
            }
          })
      }

    const redirectUser = () => {
        if(redirectToReferrer) {
          if(user && user.role === 1) {
            return <Redirect to="/admin/dashboard" />
          } else {
            return <Redirect to="/"/>
          }
        }
        if(isAuthenticated()) {
          return <Redirect to="/" />
        }
      }

    const showError = () => (
        <div className="alert alert-danget" style={{display: error ? '': 'none'}}>
          {error}
        </div>
      )
    
    const showSuccess = () => (
        success && (
          <div className="alert alert-info">
            <h2>Loading...</h2>
          </div>
        )
      )

    const signInForm = () => (
        <form className="sign-box">
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input
              onChange={handleChange('email')}
              type="email"
              className="form-control"
              value={email}
              />
          </div>
          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              onChange={handleChange('password')}
              type="password"
              className="form-control"
              value={password}
              />
          </div>
          <button onClick={clickSubmit} className="s-btn btn btn-primary">
            Sign In
          </button>
        </form>
      )

    return (
        <>
        <Navigation/>
        <div className="mt-5">
        <h4 className="text-center mb-5">Log In</h4>
        {showError()}
        {showSuccess()}
        {signInForm()}
        {redirectUser()}
      
      </div>
        </>
    )
}

export default SignIn
