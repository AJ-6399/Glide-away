import {React,useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const [title,setTitle]=useState([])
    const [url,setUrl]=useState([])
    const [description,setDescription]=useState([])
    const header={"Access-Control-Allow-Origin":"*"};
    const updateRedirect=useNavigate();
    var id=localStorage.getItem("id");

   useEffect(() => {
    //setState(localStorage.getItem("id"));
     setTitle(localStorage.getItem("title"));
     setUrl(localStorage.getItem("imageUrl"));
     setDescription(localStorage.getItem("description"));
   }, [])
   

    function update(uid){
    axios.post(`https://mi-linux.wlv.ac.uk/~2311275/restapi_crud/public/api/posts/${uid}`,
    {
     "title":title,
     "description":description,
     "imageUrl":url,
      header
    }).then((res)=>{
        alert('Item updated');
        updateRedirect('/');
    })
    }
  return (
    <center>
    <div className='container my-5'>
       <div style={{color:'black'}}><h2>Update item</h2></div> 
      <div className='col g-3 my-4'>
        <div className="col-auto ">
    <input onChange={(e)=>setTitle(e.target.value)} type="text" value={title}
    className="form-control my-3" id="Title" placeholder="Title"/>
  </div>
  <div className="col">
    <textarea onChange={(e)=>setDescription(e.target.value)}  type="text" value={description} 
    className="form-control my-3" placeholder='Description' rows="9"/>
  </div>
  <div className="col">
    <input onChange={(e)=>setUrl(e.target.value)}  type="text" value={url}
    className="form-control my-3" id="ImageUrl" placeholder="ImageUrl" />
  </div>
  <div className="col">
    <button onClick={()=>update(id)} className="btn btn-primary my-3" >Update</button>
  </div>
</div>
    </div>
    </center>
  )
}
