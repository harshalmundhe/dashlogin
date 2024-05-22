import React, {useEffect, useState} from 'react'
//import { connect } from 'react-redux'
import { LOGIN_API } from '../constants';
import axios from 'axios';
import { useNavigate, Navigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');
  const [showMsg, setShowMsg] = useState(false);
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));

  
  useEffect(() => {
    setMsg('');
    setShowMsg(false)
  }, [username, pass])


  if(authenticated) {
    navigate("/dashboard");
  }


  async function checklogin(e) {
    e.preventDefault();
    const response = await  axios.get(LOGIN_API, {
      username: username,
      pass: pass
    },{
      headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'}
    });
    setMsg(response.data.data.message);
    setShowMsg(true);
    setauthenticated(true)
    localStorage.setItem("authenticated", true);
    navigate("/dashboard");
    
  }

  return (
    <>
     <main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <span className="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">
                  <div className={showMsg ? "alert alert-info": "alert alert-info d-none"} >
                  {msg}
                  </div>

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={checklogin}>

                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username" className="form-control" id="yourUsername" value={username} onChange={(e) => {setUsername(e.target.value)}} required />
                        <div className="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Password</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">*</span>
                      <input type="password" name="password" className="form-control" id="yourPassword" onChange={(e) => {setPass(e.target.value)}} required />
                      <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>

    </>
  )
}


export default Login;