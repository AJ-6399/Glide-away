import {React,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [title,setTitle]=useState([])//Change state of title input
    const [url,setUrl]=useState([])//Change state of url input
    const [description,setDescription]=useState([])//Change state of description input
    const header={"Access-Control-Allow-Origin":"*"};
    const addRedirect=useNavigate();//Navigate user to certain page.

    const createPost=(e)=>{
        e.preventDefault();
        axios.post("https://mi-linux.wlv.ac.uk/~2311275/crudapi_test/public/api/posts",
        {
            "title":title,
            "description":description,
            "imageUrl":url,
            //Creating new data with above fields using POST method and axios.
            header  ,
            headers: {
              "Accept": "application/json",
              'Content-Type': 'application/json'
           } 
        });
        alert('Item added');
        addRedirect('/dashboard');//Redirecting user.
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
    <textarea onChange={(e)=>setDescription(e.target.value)}  type="text" value={description} 
    className="form-control my-3" placeholder='Description' rows="9"/>
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
