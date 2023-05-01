import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [title,setTitle]=useState([])
    const [url,setUrl]=useState([])
    const [description,setDescription]=useState([])
    const header={"Access-Control-Allow-Origin":"*"};
    const addRedirect=useNavigate();

    const createPost=(e)=>{
        e.preventDefault();
        axios.post("https://mi-linux.wlv.ac.uk/~2311275/restapi_crud/public/api/posts",
        {
            "title":title,
            "description":description,
            "imageUrl":url,
            header  
        });
        alert('Item added');
        addRedirect('/dashboard');
    }
  return (
    <center>
    <div className='container my-5'>
       <div style={{color:'white'}}><h2>Add new item</h2></div> 
      <div className='col g-3 my-4' style={{borderRadius:"22px"}}>
        <div className="col-auto ">
    <input type="text" onChange={(e)=>setTitle(e.target.value)} className="form-control my-3" id="Title" placeholder="Title"/>
  </div>
  <div className="col">
    <input  type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control my-3" id="Description" placeholder="Description" />
  </div>
  <div className="col">
    <input  type="text" onChange={(e)=>setUrl(e.target.value)} className="form-control my-3" id="ImageUrl" placeholder="ImageUrl" />
  </div>
  <div className="col">
  <button onClick={createPost} className="btn btn-primary my-3" >Create</button>
  </div>
</div>
    </div>
    </center>
  )
}
