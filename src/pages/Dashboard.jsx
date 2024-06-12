import React from 'react'

import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
        </div>
      </main>
    </>
  )
}

export default Dashboard