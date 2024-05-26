import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom'
import { GET_USER, ADD_USER, EDIT_USER } from '../constants';

export default function AddEditUser() {
    
    const [editUser, setEditUser] = useSearchParams();

    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [msg, setMsg] = useState('');
    const [showMsg, setShowMsg] = useState(false);
    const [loading, setLoading] = useState(false)

    const id = editUser.get('id');
    if(id) {
        getUser()
    }

    async function processSubmit(e) {
        e.preventDefault();
        if(id) {
            editUserDetails()
        } else {
            createUser()
        }
    }

    async function getUser() {
        try {
        const response = await axios.get(GET_USER + "/" + id);
        setfname(response.data.firstName);
        setlname(response.data.lastName);
        setemail(response.data.email);
        setphone(response.data.phone);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                setMsg(error.response.data.message);
                setShowMsg(true)
            }
        }
    }

    async function createUser() {
        
    
        try {
            const response = await  axios.post(ADD_USER, {
                firstName: fname,
                lastName: lname,
                email: email,
                phone: phone
            },{
                headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'}
            });
            console.log(response);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                setMsg(error.response.data.message);
                setShowMsg(true)
            }
        }
    }

    async function editUserDetails() {
        try {
            const response = await  axios.put(EDIT_USER + "/" + id, {
                firstName: fname,
                lastName: lname,
                email: email,
                phone: phone
            },{
                headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'}
            });
            console.log(response);

        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                setMsg(error.response.data.message);
                setShowMsg(true)
            }
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
    {id ? "Edit" : "Add"} User
    </div>
    <div className='card-body'> 
        <form method='post' onSubmit={processSubmit}>
        <div className={showMsg ? "alert alert-info": "alert alert-info d-none"} >
                  {msg}
                  </div>
            <div className='row'>
                <div className='col-6'>
            <label htmlFor='firstname'>
                First Name
            </label>
            <input className='form-control' id='firstname' value={fname} onChange={(e) => {setfname(e.target.value)}} required />
            </div>

            <div className='col-6'>
            <label htmlFor='lastname'>
                Last Name
            </label>
            <input className='form-control' id='lastname' value={lname} onChange={(e) => {setlname(e.target.value)}} required />
            </div>

            <div className='col-6'>
            <label htmlFor='email'>
                Email
            </label>
            <input className='form-control' id='email' value={email} onChange={(e) => {setemail(e.target.value)}} required />
            </div>


            <div className='col-6'>
            <label htmlFor='phone'>
                Phone
            </label>
            <input className='form-control' id='phone' value={phone} onChange={(e) => {setphone(e.target.value)}} required />
            </div>
          
            </div>

            <input type='submit' value={id ? "Update" : "Save"} className='btn btn-primary' />
        </form>
    </div>
    </div>
</main>

    </>
  )
}
