import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const RootLayout = () => {
  const loginData = JSON.parse(localStorage.getItem('loginData'))

  const navigate = useNavigate()

  const signOut = () => {
    localStorage.removeItem('loginData')
    navigate('/login')
  }

  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block">Simple Dashboard</span>
          </div>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <div className="nav-link nav-icon search-bar-toggle">
                <i className="bi bi-search"></i>
              </div>
            </li>
            <li className="nav-item dropdown pe-3">
              <div className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                <span className="d-none d-md-block dropdown-toggle ps-2">{loginData.username}</span>
              </div>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <div className="dropdown-item d-flex align-items-center" onClick={() => signOut()}>
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <div style={{ marginTop: "60px" }}>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout