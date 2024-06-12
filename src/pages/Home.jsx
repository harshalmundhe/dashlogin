import React from 'react'

const Home = () => {
  const user = JSON.parse(localStorage.getItem('loginData'))

  return (
    <h2>Welcome - {user.username}</h2>
  )
}

export default Home