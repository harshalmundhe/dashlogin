import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');
  const [showMsg, setShowMsg] = useState(false);

  const users = JSON.parse(localStorage.getItem('allUsers'))

  const navigate = useNavigate();
  
  // useEffect(() => {
  //   let isAuth = JSON.parse(localStorage.getItem('userData'));
  //   if(isAuth && isAuth !== null) {
  //       navigate("/dashboard");
  //   }
  // }, []);
  
  useEffect(() => {
    setMsg('');
    setShowMsg(false)
  }, [username, pass]);

  async function checklogin(e) {
    e.preventDefault();

    const user = users.find((user) => user.username === username && user.password === pass && user.isAdmin)

    if (user) {
      localStorage.setItem("loginData", JSON.stringify(user));
      navigate('/admin/dashboard');
    } else {
      setMsg("Invalid Cred");
      setShowMsg(true)
    }
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
                      <span className="d-none d-lg-block">Admin Simple Dashboard</span>
                    </a>
                  </div>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className={showMsg ? "alert alert-info": "alert alert-info d-none"} >
                      {msg}
                      </div>
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">Admin Login</h5>
                        <p className="text-center small">Enter your username & password to login</p>
                      </div>
                      <form className="row g-3 needs-validation" onSubmit={checklogin}>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">Username</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend"><i className='bi bi-person'></i></span>
                            <input type="text" name="username" className="form-control" id="yourUsername" value={username} onChange={(e) => {setUsername(e.target.value)}} required />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">Password</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend"><i className=' bi bi-lock'></i></span>
                          <input type="password" name="password" className="form-control" id="yourPassword" onChange={(e) => {setPass(e.target.value)}} required />
                          <div className="invalid-feedback">Please enter your password!</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Login</button>
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


export default AdminLogin;