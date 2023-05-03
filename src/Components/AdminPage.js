import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AdminPage() {

const [data,setData]=useState([])
var length;
const originaccess={"Access-Control-Allow-Origin":"*"};

const fetchData=()=>{
 axios.get("https://mi-linux.wlv.ac.uk/~2311275/crudapi_test/public/api/posts",{
  headers: {
    "Accept": "application/json",
    'Content-Type': 'application/json',
    originaccess
 } 
 }).then(
    (res)=>{
      
        setData(res.data);
        length=res.data.length;
        console.log(length);
    })
}
function deleteItem(id){
    axios.get(`https://mi-linux.wlv.ac.uk/~2311275/crudapi_test/public/api/posts/${id}`,{
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        originaccess
     } 
    })
    .then(()=>{
        fetchData();
        alert('Item deleted');
    });
}
useEffect(() => {
 fetchData();
},[]);

function storeLocal(id,title,description,imageUrl){
 localStorage.setItem("id",id);
 localStorage.setItem("title",title);
 localStorage.setItem("description",description);
 localStorage.setItem("imageUrl",imageUrl);

}
    return (
        <div>
          <>
         <div className='container my-4 ' style={{color:'white'
        }}><h2><b>Dashboard</b></h2>
         <Link to='/create'>
         <button type="button" className="btn btn-dark my-3">Add new</button>
         </Link></div> 
          <center>
            <div className='container mx-3'>
          <table className="table table-striped" style={{borderTopLeftRadius:"22px",borderRadius:"22px"}} bgcolor='white'>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">ImageUrl</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
     {
        data.map((item)=>{
        return (
          
        <tbody key={item.updated_at}>
    
        <tr>
          <td>{item.title}</td>
          <td>{item.imageUrl.slice(0,40)+"....."}</td>
          <td>{item.description.slice(0,30)+"....."}</td>
          <td>
            <Link to='/update'>
            <button onClick={()=>storeLocal(item.id,item.title,item.description,item.imageUrl)} type="button" className="btn btn-primary mx-1">Edit</button>
            </Link>
            <button onClick={()=>deleteItem(item.id)} type="button" className="btn btn-danger mx-1">Delete</button>
          </td>
        </tr>
        
      </tbody>
     
            )
        })
      }
    </table>
    </div>
    </center>
          </>
        </div>
      )

  
}
