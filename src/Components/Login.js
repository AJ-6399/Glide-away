import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
import AdminPage from './AdminPage'

export default function Admin(){
    const[username,setUsername]=useState([])
    const[password,setPassword]=useState([])
   // const adminRedirect=useNavigate();
  function handleLoginClick(){

  }
  function handleLoginClick(u,pswrd){
 axios.get(`https://mi-linux.wlv.ac.uk/~2311275/restapi_crud/public/api/admins/verify/${u}`).then((res)=>{
  if(res.data.length!==0&&pswrd!=null)
  {
    //adminRedirect('/dashboard')'
    alert('Login Success');
   
  }
  else{
    alert('Error.Check the fields you have entered');
  }
  return (
    <div>
        <AdminPage/>
      </div>
      );

 })
   }
  
    return (
      <>
      <div class='row g-3'>
        <div className="col-auto ">
    <input onChange={(e)=>setUsername(e.target.value)} type="email" className="form-control"  id="email" placeholder="Username"/>
  </div>
  <div className="col">
    <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control"  id="password" placeholder="password" />
  </div>
  <div className="col">
    
    <button onClick={()=>handleLoginClick(username,password)} className="btn btn-outline-dark" >Admin Login</button>
 

   
 
  </div>
</div>
      </>
        
    )
  }


