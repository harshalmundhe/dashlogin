import React,{useState} from 'react'

import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

export default function Users() {
  const usersData = JSON.parse(localStorage.getItem('allUsers'))
  const [users, setUsers] = useState(usersData)

  function deleteUser(id) {
    const afterDeleteUsers = users.filter((user) => user.id !== id)
    setUsers(afterDeleteUsers)
    localStorage.setItem('allUsers', JSON.stringify(afterDeleteUsers))
  }

  return (
    <>
      <Sidebar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Users</h1>
        </div>
        <div className='card'>
          <div className="card-header">
              Normal Users
              <div className="float-end">
                  <Link to={"/admin/add-user"} className='btn btn-primary'>Add New</Link>
              </div>
          </div>
          <div className="card-body">
              <>
                <table className='table table-striped'>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  {users.filter(user => !user.isAdmin).map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
                      <td>
                        <div className="btn-group">
                          <Link to={`/admin/edit-user/${user.id}`} className='btn btn-info'><i className='bi bi-pen'></i></Link>
                          <button onClick={() => deleteUser(user.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </>

          </div>
        </div>
        <div className='card'>
            <div className="card-header">
                    Admin Users
                <div className="float-end">
                  <Link to={"/admin/add-user"} className='btn btn-primary'>Add New</Link>
                </div>
            </div>
            <div className="card-body">
                <>
                  <table className='table table-striped'>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.filter(user => user.isAdmin).map(user => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>
                          <div className="btn-group">
                            <Link to={`/admin/edit-user/${user.id}`} className='btn btn-info'><i className='bi bi-pen'></i></Link>
                            <button onClick={() => deleteUser(user.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </>

            </div>
        </div>
      </main>
    </>
  )
}
