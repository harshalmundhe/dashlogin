import React, { useEffect, useId, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const UserManagement = () => {
  const params = useParams();
  const users = JSON.parse(localStorage.getItem('allUsers'))
  const isEdit = params.id
  const uuid = useId()
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    isAdmin: false
  })

  useEffect(() => {   
    if (isEdit) {
      const currUser = users.find((user) => user.id === params.id)
      setUserData({
        name: currUser.name,
        email: currUser.email,
        username: currUser.username,
        password: currUser.password,
        isAdmin: currUser.isAdmin
      })
    }
  }, [isEdit, params.id, users])

  async function processSubmit(e) {
    e.preventDefault();
    if (!isEdit) {
      const newUser = {
        ...userData,
        id: uuid
      }
      users.push(newUser)
      localStorage.setItem('allUsers', JSON.stringify(users))
      navigate('/admin/users')
    } else {
      const editedUser = {
        ...userData,
        id: params.id
      }
      const modifiedUsers = users.map((user) => {
        if (user.id === params.id) {
          return editedUser
        } else {
          return user
        }
      })
      localStorage.setItem('allUsers', JSON.stringify(modifiedUsers))
      navigate('/admin/users')
    }
  }

return (
  <>
    <Sidebar />
    <main id="main" className="main">

    <div className="pagetitle">
    <h1>Manage User</h1>

    </div>

    <div className='card'>
      <div className='card-header'>
      {isEdit ? "Edit" : "Add"} User
      </div>
      <div className='card-body'> 
          <form method='post' onSubmit={processSubmit}>
              <div className='row'>
                <div className='col-6'>
                  <label htmlFor='name'>
                      Name
                  </label>
                  <input
                    className='form-control'
                    id='name'
                    value={userData.name}
                    onChange={(e) => {setUserData({
                      ...userData,
                      name: e.target.value
                    })}}
                    required
                  />
                </div>

                <div className='col-6'>
                  <label htmlFor='email'>
                      E-mail
                  </label>
                  <input
                    className='form-control'
                    id='email'
                    value={userData.email}
                    onChange={(e) => {setUserData({
                      ...userData,
                      email: e.target.value
                    })}}
                    required   
                  />
                </div>

                <div className='col-6'>
                  <label htmlFor='username'>
                      Username
                  </label>
                  <input 
                    className='form-control'
                    id='username'
                    value={userData.username}
                    onChange={(e) => {setUserData({
                      ...userData,
                      username: e.target.value
                    })}}
                    required 
                  />
                </div>


                <div className='col-6'>
                  <label htmlFor='password'>
                      Password
                  </label>
                  <input 
                    className='form-control'
                    id='password'
                    value={userData.password}
                    onChange={(e) => {setUserData({
                      ...userData,
                      password: e.target.value
                    })}}
                    required 
                  />
                </div>
            
              </div>

              <input type='submit' value={isEdit ? "Update" : "Save"} className='btn btn-primary' />
          </form>
      </div>
      </div>
    </main>
  </>
)
}

export default UserManagement