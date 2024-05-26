import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import { GET_USERS, DELETE_USER } from '../constants';
import axios from 'axios';
export default function Dashboard() {
    
       
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
    
  useEffect(() => {
    setLoading(true)
    fetch(GET_USERS)
      .then(response => response.json())
      .then(json => setUsers(json.users))
      .finally(() => {
        setLoading(false)
      })
  }, [])


  function deleteUser(id) {
    try {
      const response = axios.delete(DELETE_USER + "/" + id);
      console.log(response.data);
      } catch (error) {
          if (error.response) {
              console.log(error.response.data);
          }
      }
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
        User List
        <div className="float-end">
            <a  href='addedituser' className='btn btn-primary'>Add New</a>
        </div>
    </div>
    <div className="card-body">
    {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Users</h1>
          <table className='table table-striped'>
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <div className="btn-group">
                    <a href={"addedituser?id=" + user.id} className='btn btn-info'><i className='bi bi-pen'></i></a>
                    <button onClick={() => deleteUser(user.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )}

    </div>
</div>


</main>

    </>
  )
}
